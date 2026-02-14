import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.join(process.cwd(), "src/data");
function safeReadJson(filename, defaultValue = {}) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.warn(`⚠️ Could not read ${filename}, using default value`);
  }
  return defaultValue;
}
function getProductsSync() {
  return safeReadJson("products.json", {});
}
function getCategoriesSync() {
  return safeReadJson("categories.json", {});
}
function getPagesSync() {
  return safeReadJson("pages.json", {});
}
function getProductIds() {
  const products = getProductsSync();
  return Object.keys(products);
}
function getCategorySlugs() {
  const categories = getCategoriesSync();
  return Object.keys(categories);
}
function getPageSlugs() {
  const pages = getPagesSync();
  return Object.keys(pages);
}

export { getCategoriesSync as a, getProductIds as b, getPagesSync as c, getCategorySlugs as d, getPageSlugs as e, getProductsSync as g };
