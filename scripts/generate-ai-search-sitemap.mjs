import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_ORIGIN = "https://tech.wplaceoki.com";
const DATABASE_PATH = "product/database";
const OUTPUT_FILE = "ai-search-sitemap.xml";
const SUPPORTED_EXTENSIONS = new Set([".md", ".txt"]);

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const databaseRoot = path.join(repositoryRoot, DATABASE_PATH);
const outputPath = path.join(repositoryRoot, OUTPUT_FILE);
const checkOnly = process.argv.includes("--check");

const documentPaths = (await listDocuments(databaseRoot))
  .map((filePath) => path.relative(repositoryRoot, filePath).split(path.sep).join("/"))
  .sort((left, right) => left.localeCompare(right, "en"));
const sitemap = buildSitemap(documentPaths);

if (checkOnly) {
  let current = "";
  try {
    current = await fs.readFile(outputPath, "utf8");
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }

  if (current !== sitemap) {
    console.error(`${OUTPUT_FILE} is out of date. Run npm run ai-search:sitemap.`);
    process.exitCode = 1;
  } else {
    console.log(`${OUTPUT_FILE} contains ${documentPaths.length} database documents.`);
  }
} else {
  await fs.writeFile(outputPath, sitemap, "utf8");
  console.log(`Wrote ${OUTPUT_FILE} with ${documentPaths.length} database documents.`);
}

async function listDocuments(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listDocuments(entryPath));
      continue;
    }
    if (entry.isFile() && SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  }
  return files;
}

function buildSitemap(paths) {
  const urls = paths.map((documentPath) => `  <url>\n    <loc>${escapeXml(`${SITE_ORIGIN}/${documentPath}`)}</loc>\n    <changefreq>hourly</changefreq>\n  </url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
