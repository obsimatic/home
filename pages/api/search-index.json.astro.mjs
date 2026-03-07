import { g as getProductImage } from '../../assets/bundle-productImages-Dy0t3cLQ.js';
import fs from 'node:fs';
import path from 'node:path';
export { renderers } from '../../renderers.mjs';

async function GET() {
  const productsPath = path.join(process.cwd(), "src", "data", "products.json");
  const categoriesPath = path.join(process.cwd(), "src", "data", "categories.json");
  let products = {};
  let categories = {};
  try {
    if (fs.existsSync(productsPath)) {
      products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    }
    if (fs.existsSync(categoriesPath)) {
      categories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
    }
  } catch (error) {
    console.error("Error reading data files:", error);
  }
  function getBrandFromCategory(categorySlug) {
    if (!categorySlug || !categories[categorySlug]) return null;
    let current = categories[categorySlug];
    const chain = [current];
    while (current.parentSlug && categories[current.parentSlug]) {
      current = categories[current.parentSlug];
      chain.unshift(current);
    }
    if (chain.length >= 2) {
      const brandCat = chain[1];
      return brandCat.i18n?.en?.name || brandCat.i18n?.tr?.name || null;
    }
    return null;
  }
  const productIndex = Object.values(products).map((prod) => ({
    type: "product",
    id: prod.id,
    title_tr: prod.i18n?.tr?.title || "",
    title_en: prod.i18n?.en?.title || "",
    title_ar: prod.i18n?.ar?.title || "",
    image: getProductImage(prod.id, prod.image),
    categorySlug: prod.categorySlug,
    brand: getBrandFromCategory(prod.categorySlug) || prod.brand || "Other",
    inStock: prod.inStock,
    price: prod.price
  }));
  const categoryIndex = Object.values(categories).map((cat) => ({
    type: "category",
    id: cat.slug,
    title_tr: cat.i18n?.tr?.name || "",
    title_en: cat.i18n?.en?.name || "",
    title_ar: cat.i18n?.ar?.name || "",
    image: cat.slug,
    // Will be resolved by getCategoryImage on client
    parentSlug: cat.parentSlug
  }));
  return new Response(JSON.stringify([...productIndex, ...categoryIndex]), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
