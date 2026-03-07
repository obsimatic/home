import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, u as unescapeHTML, e as defineScriptVars, f as renderScript, r as renderComponent, F as Fragment } from '../assets/bundle-astro/server-FkVzvw7-.js';
import 'piccolore';
import { c as categoriesData, d as getLocalizedPath, f as formatUrlSlug, s as siteData, D as DEFAULT_LANGUAGE, g as getPageData, $ as $$Layout, a as $$Header, b as $$Footer, S as SUPPORTED_LANGUAGES } from '../assets/bundle-Footer-C84hCY4r.js';
import 'clsx';
/* empty css                                        */
import { $ as $$AddToCartBtn, g as getCategoryImage } from '../assets/bundle-categoryImages-CLFbscNd.js';
import { g as $$ProductCard, $ as $$Popup, a as $$HeroSearch, b as $$ServicePillars, c as $$ProductCategories, d as $$FeaturedProducts, e as $$PriceList, f as $$Manufacturers } from '../assets/bundle-Popup-DjkUOp4g.js';
import fs from 'node:fs';
import path from 'node:path';
import { a as getProductImages, g as getProductImage } from '../assets/bundle-productImages-Dy0t3cLQ.js';
import { $ as $$SearchTemplate } from '../assets/bundle-SearchTemplate-G0JPqfeA.js';
import { $ as $$ContactTemplate } from '../assets/bundle-ContactTemplate-Bir3ORCd.js';
import { $ as $$CorporateTemplate } from '../assets/bundle-CorporateTemplate-PSDFQf_9.js';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://www.ob-simatic.com");
const $$CategorySidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CategorySidebar;
  const {
    currentCategorySlug = "",
    categories = [],
    brands = [{ name: "Siemens", count: 12 }],
    blogLinks = [],
    lang = "tr"
  } = Astro2.props;
  const categoriesTitle = lang === "ar" ? "\u0627\u0644\u0641\u0626\u0627\u062A" : lang === "en" ? "Categories" : "Kategoriler";
  function getCatLoc(cat) {
    return cat.i18n[lang] || cat.i18n["en"] || cat.i18n["tr"];
  }
  function getCategoryChain(slug) {
    const chain = [];
    let currentSlug = slug;
    while (currentSlug && categoriesData[currentSlug]) {
      const cat = categoriesData[currentSlug];
      const loc = getCatLoc(cat);
      chain.unshift({
        slug: currentSlug,
        name: loc.name,
        title: loc.title || loc.name
      });
      currentSlug = cat.parentSlug;
    }
    return chain;
  }
  const categoryChain = currentCategorySlug ? getCategoryChain(currentCategorySlug) : [];
  const topLevelCategories = Object.values(categoriesData).filter((cat) => cat.parentSlug === null).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
    const loc = getCatLoc(cat);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title || loc.name
    };
  });
  const currentCategory = categoriesData[currentCategorySlug];
  const parentSlug = currentCategory?.parentSlug;
  parentSlug ? Object.values(categoriesData).filter((cat) => cat.parentSlug === parentSlug).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
    const loc = getCatLoc(cat);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title || loc.name,
      isActive: cat.slug === currentCategorySlug
    };
  }) : [];
  const childCategories = Object.values(categoriesData).filter((cat) => cat.parentSlug === currentCategorySlug).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
    const loc = getCatLoc(cat);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title || loc.name
    };
  });
  return renderTemplate`${maybeRenderHead()}<aside class="category-sidebar" data-astro-cid-u2obp545> <!-- Category Chain (breadcrumb style) --> ${categoryChain.length > 0 && renderTemplate`<div class="sidebar-section category-nav" data-astro-cid-u2obp545> <h3 class="sidebar-title" data-astro-cid-u2obp545>${categoriesTitle}</h3> <ul class="nav-list category-chain" data-astro-cid-u2obp545> ${categoryChain.map((cat, index) => renderTemplate`<li${addAttribute(
    index === categoryChain.length - 1 ? "active" : "",
    "class"
  )}${addAttribute(`padding-left: ${index * 15}px`, "style")} data-astro-cid-u2obp545> <a${addAttribute(getLocalizedPath(
    `/${formatUrlSlug(cat.slug)}`,
    lang
  ), "href")} data-astro-cid-u2obp545> ${index > 0 && renderTemplate`<span class="chain-arrow" data-astro-cid-u2obp545>└</span>`} ${cat.title} </a> </li>`)} </ul>  ${childCategories.length > 0 && renderTemplate`<ul class="nav-list sub-categories" data-astro-cid-u2obp545> ${childCategories.map((cat) => renderTemplate`<li${addAttribute(`padding-left: ${categoryChain.length * 15}px`, "style")} data-astro-cid-u2obp545> <a${addAttribute(getLocalizedPath(
    `/${formatUrlSlug(cat.slug)}`,
    lang
  ), "href")} data-astro-cid-u2obp545> <span class="chain-arrow" data-astro-cid-u2obp545>└</span> ${cat.title} </a> </li>`)} </ul>`} </div>`} <!-- Fallback: Top-Level Categories (if no current category) --> ${categoryChain.length === 0 && renderTemplate`<div class="sidebar-section category-nav" data-astro-cid-u2obp545> <h3 class="sidebar-title" data-astro-cid-u2obp545>${categoriesTitle}</h3> <ul class="nav-list" data-astro-cid-u2obp545> ${topLevelCategories.map((cat) => renderTemplate`<li data-astro-cid-u2obp545> <a${addAttribute(getLocalizedPath(
    `/${formatUrlSlug(cat.slug)}`,
    lang
  ), "href")} data-astro-cid-u2obp545> ${cat.title || cat.name} </a> </li>`)} </ul> </div>`} </aside> `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/CategorySidebar.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://www.ob-simatic.com");
const $$ProductSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductSchema;
  const { product, lang, categoryName } = Astro2.props;
  const siteEnv = "https://www.ob-simatic.com".replace(
    /\/$/,
    ""
  );
  const baseEnv = "/".replace(/\/$/, "");
  const baseUrl = baseEnv === "" ? siteEnv : `${siteEnv}${baseEnv}`;
  const getLocalizedTitle = () => {
    if (!product.i18n) return product.id;
    return product.i18n[lang]?.title || product.i18n[DEFAULT_LANGUAGE]?.title || product.i18n["en"]?.title || product.id;
  };
  const getProductImage = () => {
    if (product.images && product.images.length > 0) {
      const img = product.images[0];
      return img.startsWith("http") ? img : `${baseUrl}${img.startsWith("/") ? "" : "/"}${img}`;
    }
    if (product.image) {
      return product.image.startsWith("http") ? product.image : `${baseUrl}${product.image.startsWith("/") ? "" : "/"}${product.image}`;
    }
    return `${baseUrl}/logo.png`;
  };
  const getProductUrl = () => {
    if (lang === DEFAULT_LANGUAGE) {
      return `${baseUrl}/${product.id}`;
    }
    return `${baseUrl}/${lang}/${product.id}`;
  };
  const hasNumericPrice = typeof product.price === "number" && product.price > 0;
  const priceValue = hasNumericPrice ? product.price : 0;
  const availability = product.inStock !== false ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: getLocalizedTitle(),
    image: getProductImage(),
    url: getProductUrl(),
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand || "OB Simatic"
    },
    ...categoryName && { category: categoryName },
    offers: {
      "@type": "Offer",
      url: getProductUrl(),
      priceCurrency: "EUR",
      availability,
      seller: {
        "@type": "Organization",
        name: siteData.shortName || "OB Simatic"
      },
      ...hasNumericPrice ? { price: priceValue } : {
        price: 0,
        priceValidUntil: new Date(
          Date.now() + 365 * 24 * 60 * 60 * 1e3
        ).toISOString().split("T")[0]
      }
    }
  };
  if (!hasNumericPrice) {
    productSchema.offers.priceSpecification = {
      "@type": "PriceSpecification",
      price: 0,
      priceCurrency: "EUR"
    };
  }
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(productSchema)));
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/schema/ProductSchema.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://www.ob-simatic.com");
const $$BreadcrumbSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BreadcrumbSchema;
  const { items, lang } = Astro2.props;
  const siteEnv = "https://www.ob-simatic.com".replace(
    /\/$/,
    ""
  );
  const baseEnv = "/".replace(/\/$/, "");
  const baseUrl = baseEnv === "" ? siteEnv : `${siteEnv}${baseEnv}`;
  const homeUrl = lang === DEFAULT_LANGUAGE ? baseUrl : `${baseUrl}/${lang}`;
  const homeName = lang === "ar" ? "الرئيسية" : lang === "en" ? "Home" : "Ana Sayfa";
  const breadcrumbItems = [
    { name: homeName, url: homeUrl },
    ...items.map((item) => ({
      name: item.name,
      url: item.url ? item.url.startsWith("http") ? item.url : `${baseUrl}${item.url.startsWith("/") ? "" : "/"}${item.url}` : void 0
    }))
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...item.url && { item: item.url }
    }))
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema)));
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/schema/BreadcrumbSchema.astro", void 0);

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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.ob-simatic.com");
const $$ProductTemplate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductTemplate;
  const { id, lang = DEFAULT_LANGUAGE, product: propProduct } = Astro2.props;
  function getCatLoc(cat, lang2) {
    return cat.i18n[lang2] ?? cat.i18n[DEFAULT_LANGUAGE] ?? cat.i18n["en"];
  }
  function getBreadcrumb(categorySlug, lang2, categoriesData2) {
    const crumbs = [];
    let current = categoriesData2[categorySlug];
    if (current) {
      const loc = getCatLoc(current, lang2);
      crumbs.unshift({ slug: categorySlug, name: loc.name || "" });
    }
    while (current && current.parentSlug) {
      const parent = categoriesData2[current.parentSlug];
      if (parent) {
        const loc = getCatLoc(parent, lang2);
        crumbs.unshift({ slug: current.parentSlug, name: loc.name || "" });
      }
      current = parent;
    }
    return crumbs;
  }
  function getRelatedProducts(categorySlug, currentId, productsData2, lang2) {
    return Object.entries(productsData2).filter(
      ([id2, prod]) => prod.categorySlug === categorySlug && id2 !== currentId
    ).slice(0, 4).map(([prodId, prod]) => ({
      ...prod,
      id: prodId,
      title: prod.i18n[lang2]?.title || prod.i18n["en"]?.title || prod.i18n["tr"]?.title || prod.i18n["ar"]?.title || prod.i18n[DEFAULT_LANGUAGE]?.title,
      image: getProductImage(prodId)
    }));
  }
  const { ui, site, isRTL } = await getPageData(lang);
  const productsData = getProductsSync();
  const categoriesData = getCategoriesSync();
  const product = propProduct || productsData[id];
  let categoryName = "";
  if (product && product.categorySlug) {
    const category = categoriesData[product.categorySlug];
    if (category) {
      const loc = getCatLoc(category, lang);
      categoryName = loc.name;
    }
  }
  const baseUrl = lang === DEFAULT_LANGUAGE ? "/".replace(/\/$/, "") : `${"/".replace(/\/$/, "")}/${lang}`;
  const discoveredImages = product ? getProductImages(id) : [];
  const productImages = discoveredImages.length > 0 ? discoveredImages.map((src) => ({ src })) : product?.images?.length > 0 ? product.images.map((img) => ({ src: img })) : [];
  const hasImages = productImages.length > 0;
  function getProductLocData(prod, lang2) {
    if (prod.i18n?.[lang2]?.title) return prod.i18n[lang2];
    if (prod.i18n?.["en"]?.title) return prod.i18n["en"];
    if (prod.i18n?.["tr"]?.title) return prod.i18n["tr"];
    if (prod.i18n?.["ar"]?.title) return prod.i18n["ar"];
    return prod.i18n?.[DEFAULT_LANGUAGE] || {};
  }
  function getProductSpecs(prod, lang2) {
    const allLanguages = [lang2, "en", "tr", "ar"].filter((l, i, arr) => arr.indexOf(l) === i);
    let maxSpecs = 0;
    for (const l of allLanguages) {
      const langKeys = prod.translations?.[l]?.keys || [];
      if (langKeys.length > maxSpecs) {
        maxSpecs = langKeys.length;
      }
    }
    const mergedSpecs = [];
    for (let i = 0; i < maxSpecs; i++) {
      let foundSpec = null;
      for (const l of allLanguages) {
        const langKeys = prod.translations?.[l]?.keys || [];
        const spec = langKeys[i];
        if (spec && spec.key && spec.key.trim() !== "" && spec.value && spec.value.trim() !== "") {
          foundSpec = { key: spec.key, value: spec.value };
          break;
        }
      }
      if (foundSpec) {
        mergedSpecs.push(foundSpec);
      }
    }
    return mergedSpecs;
  }
  const productLoc = product ? getProductLocData(product, lang) : {};
  const productTitle = productLoc.title || id;
  const productSpecs = product ? getProductSpecs(product, lang) : [];
  const hasSpecs = productSpecs.length > 0 && productSpecs.some((s) => s.key && s.value);
  const relatedProducts = product ? getRelatedProducts(product.categorySlug, id, productsData, lang) : [];
  const productCodeText = ui?.product?.code || "Ürün Kodu";
  const categoryText = ui?.product?.category || "Kategori";
  const getQuoteText = ui?.buttons?.getQuote || "Teklif Al";
  const whatsappText = ui?.buttons?.whatsapp || "WhatsApp ile İletişim";
  const relatedProductsText = ui?.sections?.relatedProducts || "İlgili Ürünler";
  const tabInfoText = ui?.tabs?.productInfo || "Ürün Bilgisi";
  const tabQuoteText = ui?.tabs?.getQuote || "Teklif Al";
  const backToHomeText = lang === "ar" ? "العودة للرئيسية" : lang === "en" ? "Back to Home" : "Ana Sayfaya Dön";
  const notFoundText = lang === "ar" ? "المنتج غير موجود" : lang === "en" ? "Product Not Found" : "Ürün Bulunamadı";
  const priceText = lang === "ar" ? "السعر" : lang === "en" ? "Price" : "Fiyat";
  const calculatingText = lang === "ar" ? "جاري الحساب..." : lang === "en" ? "Calculating..." : "hesaplanıyor...";
  const contactForPriceText = lang === "ar" ? "يرجى الاتصال للحصول على أفضل العروض" : lang === "en" ? "Please contact us for the best offers" : "En iyi teklifler için lütfen iletişime geçiniz";
  const noSpecsText = lang === "ar" ? "لا توجد مواصفات إضافية" : lang === "en" ? "No additional specifications" : "Ek özellik bulunmuyor";
  const nameLabel = lang === "ar" ? "الاسم الكامل *" : lang === "en" ? "Full Name *" : "Adınız Soyadınız *";
  const emailLabel = lang === "ar" ? "البريد الإلكتروني *" : lang === "en" ? "Email *" : "Email *";
  const phoneLabel = lang === "ar" ? "رقم الهاتف *" : lang === "en" ? "Phone Number *" : "Telefon Numaranız *";
  const emailSubject = lang === "ar" ? "معلومات عن المنتج" : lang === "en" ? "Product Information" : "Ürün Hakkında Bilgi";
  const emailBody = lang === "ar" ? "أرغب بالحصول على معلومات حول كيفية الحصول على تخفيضات حول هذا المنتج" : lang === "en" ? "I would like to get information on how to get discounts on this product" : "Bu ürün için indirim koşullarını öğrenmek istiyorum";
  const breadcrumbItems = product ? [
    ...getBreadcrumb(product.categorySlug, lang, categoriesData).map((crumb) => ({
      name: crumb.name,
      url: `${baseUrl}/${crumb.slug}`
    })),
    { name: id || "", url: void 0 }
  ] : [];
  const seoDescription = product ? `${id} - ${product.brand || ""} ${productTitle}. ${categoryName ? categoryName + "." : ""} ${lang === "ar" ? "منتجات الأتمتة الصناعية" : lang === "en" ? "Industrial automation products" : "Endüstriyel otomasyon ürünleri"}` : "";
  return renderTemplate(_a || (_a = __template(["", "  ", " <script>(function(){", "\n    const form = document.querySelector('.quote-form');\n    // Function to construct message body\n    const getMessageBody = () => {\n        const name = document.getElementById('quoteName').value;\n        const email = document.getElementById('quoteEmail').value;\n        const phone = document.getElementById('quotePhone').value;\n        return `${emailBody}\\n\\nName: ${name}\\nEmail: ${email}\\nPhone: ${phone}\\nProduct ID: ${id}`;\n    };\n\n    if (form) {\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const subject = `${emailSubject} - ${id}`;\n            const body = getMessageBody();\n            \n            window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;\n        });\n    }\n\n    const whatsappBtn = document.getElementById('whatsappQuoteBtn');\n    if (whatsappBtn) {\n        whatsappBtn.addEventListener('click', (e) => {\n            e.preventDefault();\n            const body = getMessageBody();\n            window.open(`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(body)}`, '_blank');\n        });\n    }\n})();</script>"], ["", "  ", " <script>(function(){", "\n    const form = document.querySelector('.quote-form');\n    // Function to construct message body\n    const getMessageBody = () => {\n        const name = document.getElementById('quoteName').value;\n        const email = document.getElementById('quoteEmail').value;\n        const phone = document.getElementById('quotePhone').value;\n        return \\`\\${emailBody}\\\\n\\\\nName: \\${name}\\\\nEmail: \\${email}\\\\nPhone: \\${phone}\\\\nProduct ID: \\${id}\\`;\n    };\n\n    if (form) {\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const subject = \\`\\${emailSubject} - \\${id}\\`;\n            const body = getMessageBody();\n            \n            window.location.href = \\`mailto:\\${site.contact.email}?subject=\\${encodeURIComponent(subject)}&body=\\${encodeURIComponent(body)}\\`;\n        });\n    }\n\n    const whatsappBtn = document.getElementById('whatsappQuoteBtn');\n    if (whatsappBtn) {\n        whatsappBtn.addEventListener('click', (e) => {\n            e.preventDefault();\n            const body = getMessageBody();\n            window.open(\\`https://wa.me/\\${site.contact.whatsapp}?text=\\${encodeURIComponent(body)}\\`, '_blank');\n        });\n    }\n})();</script>"])), renderComponent($$result, "Layout", $$Layout, { "title": `${id} - ${product?.brand || ""} ${productTitle} | ${site.shortName || "OB Simatic"}`, "lang": lang, "type": "product", "description": seoDescription, "data-astro-cid-bsktuutb": true }, { "default": async ($$result2) => renderTemplate`${product && renderTemplate`${renderComponent($$result2, "ProductSchema", $$ProductSchema, { "product": product, "lang": lang, "categoryName": categoryName, "data-astro-cid-bsktuutb": true })}`}${product && renderTemplate`${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": breadcrumbItems, "lang": lang, "data-astro-cid-bsktuutb": true })}`}${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-bsktuutb": true })} ${maybeRenderHead()}<main class="product-page" data-astro-cid-bsktuutb> <div class="product-container" data-astro-cid-bsktuutb> ${product ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-bsktuutb": true }, { "default": async ($$result3) => renderTemplate`<div class="page-header" data-astro-cid-bsktuutb> <h1 class="page-title" data-astro-cid-bsktuutb>${id} - ${product.brand}</h1> <p class="page-subtitle" data-astro-cid-bsktuutb>${product.brand} | ${categoryName || "Ürün"}</p> </div> <div class="product-layout row" data-astro-cid-bsktuutb>  <div class="col-12" data-astro-cid-bsktuutb>  <div class="product-card" data-astro-cid-bsktuutb> <div class="product-card-body" data-astro-cid-bsktuutb> <div class="product-gallery-section" data-astro-cid-bsktuutb> ${hasImages ? renderTemplate`<div class="gallery-container" data-astro-cid-bsktuutb> <div class="main-image-frame" data-astro-cid-bsktuutb> <img${addAttribute(productImages[0].src, "src")}${addAttribute(product.title, "alt")} id="mainProductImage" style="max-width: 100%; max-height: 600px; height: auto; object-fit: contain;" loading="lazy" data-astro-cid-bsktuutb> </div> ${productImages.length > 1 && renderTemplate`<div class="thumbnails-track" data-astro-cid-bsktuutb> ${productImages.map((img, idx) => renderTemplate`<div${addAttribute(`thumbnail-item ${idx === 0 ? "active" : ""}`, "class")}${addAttribute(img.src, "data-src")} data-astro-cid-bsktuutb> <img${addAttribute(img.src, "src")} alt="Thumbnail" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" data-astro-cid-bsktuutb> </div>`)} </div>`} </div>` : renderTemplate`<div class="no-image-placeholder" data-astro-cid-bsktuutb> <div class="placeholder-icon" data-astro-cid-bsktuutb> <i class="fas fa-cube fa-4x text-muted opacity-50" data-astro-cid-bsktuutb></i> </div> <span class="placeholder-text" data-astro-cid-bsktuutb>${product.brand}</span> </div>`} </div> <style>
                                        .product-gallery-section {
                                            flex: 1;
                                            min-width: 300px;
                                            margin-right: 30px;
                                        }
                                        .main-image-frame {
                                            text-align: center;
                                            margin-bottom: 15px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            min-height: 300px; 
                                        }
                                        .main-image-frame img {
                                            max-width: 100%;
                                            height: auto;
                                            max-height: 600px;
                                            object-fit: contain;
                                        }
                                        .no-image-placeholder {
                                            height: 300px;
                                            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                                            border-radius: 8px;
                                            display: flex;
                                            flex-direction: column;
                                            align-items: center;
                                            justify-content: center;
                                            color: #adb5bd;
                                            border: 1px dashed #dee2e6;
                                        }
                                        .placeholder-icon {
                                            margin-bottom: 15px;
                                        }
                                        .placeholder-text {
                                            margin-top: 15px;
                                            font-weight: 600;
                                            font-size: 1.2rem;
                                            opacity: 0.8;
                                        }
                                        .thumbnails-track {
                                            display: flex;
                                            gap: 8px;
                                            overflow-x: auto;
                                            padding: 4px 0;
                                        }
                                        .thumbnail-item {
                                            width: 60px;
                                            height: 60px;
                                            border: 2px solid transparent;
                                            border-radius: 4px;
                                            cursor: pointer;
                                            opacity: 0.7;
                                            transition: all 0.2s;
                                            flex-shrink: 0;
                                        }
                                        .thumbnail-item img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            border-radius: 2px;
                                        }
                                        .thumbnail-item:hover, .thumbnail-item.active {
                                            border-color: var(--primary-color, #0a58ca);
                                            opacity: 1;
                                        }
                                    </style> <div class="product-summary" data-astro-cid-bsktuutb> <h2 class="product-series" data-astro-cid-bsktuutb>${categoryName || product.brand}</h2> <table class="specs-table" data-astro-cid-bsktuutb> <tbody data-astro-cid-bsktuutb> <tr data-astro-cid-bsktuutb> <th data-astro-cid-bsktuutb>${productCodeText}</th> <td data-astro-cid-bsktuutb>${id}</td> </tr> <tr data-astro-cid-bsktuutb> <th data-astro-cid-bsktuutb>${categoryText}</th> <td data-astro-cid-bsktuutb>${categoryName}</td> </tr> </tbody> </table> <div class="product-actions-area" style="margin-top: 25px;" data-astro-cid-bsktuutb> ${product.price && product.price !== "contact" ? renderTemplate`<div class="product-price-display" style="margin-bottom: 15px;" data-astro-cid-bsktuutb> <div class="price-main" data-astro-cid-bsktuutb> <span class="price-label" data-astro-cid-bsktuutb>${priceText}:</span> <span class="price-value"${addAttribute(product.price, "data-eur-price")} data-astro-cid-bsktuutb>€${Number(product.price).toFixed(2)}</span> </div> <div class="price-try" id="try-price-display" data-astro-cid-bsktuutb> <span class="try-loading" data-astro-cid-bsktuutb>⏳ TRY ${calculatingText}</span> </div> </div>` : product.price === "contact" ? renderTemplate`<a class="product-price-display contact-price" style="margin-bottom: 15px; background: #e8f4ff; border-color: #b8daff; cursor: pointer; display: block; text-decoration: none;"${addAttribute(`mailto:${site.contact.email}?subject=${encodeURIComponent(emailSubject)} - ${id}&body=${encodeURIComponent(`${emailBody}. ID: ${id}`)}`, "href")} role="button" data-astro-cid-bsktuutb> <div class="price-main justify-content-center text-center" data-astro-cid-bsktuutb> <i class="fas fa-headset fa-lg text-primary me-2" data-astro-cid-bsktuutb></i> <span class="price-value text-primary" style="font-size: 1.1rem; white-space: normal;" data-astro-cid-bsktuutb> ${contactForPriceText} </span> </div> </a>` : null} ${renderComponent($$result3, "AddToCartBtn", $$AddToCartBtn, { "product": {
    id,
    title: productTitle,
    image: productImages[0]?.src || "",
    brand: product.brand,
    categorySlug: product.categorySlug,
    price: product.price || 0
  }, "ui": ui, "variant": "primary", "contactType": "whatsapp", "lang": lang, "data-astro-cid-bsktuutb": true })} </div> </div> </div> </div>  <div class="product-tabs" data-astro-cid-bsktuutb> <div class="tabs-nav" data-astro-cid-bsktuutb> <button type="button" class="tab-btn active" data-tab="info" data-astro-cid-bsktuutb>${tabInfoText}</button> <button type="button" class="tab-btn" data-tab="quote" data-astro-cid-bsktuutb>${tabQuoteText}</button> </div>  <div class="tab-content active" id="tab-info" data-astro-cid-bsktuutb> <table class="info-table" data-astro-cid-bsktuutb> <tbody data-astro-cid-bsktuutb> ${hasSpecs ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-bsktuutb": true }, { "default": async ($$result4) => renderTemplate`${productSpecs.map((spec) => renderTemplate`<tr data-astro-cid-bsktuutb> <th data-astro-cid-bsktuutb>${spec.key}</th> <td data-astro-cid-bsktuutb>${spec.value}</td> </tr>`)}` })}` : renderTemplate`<tr data-astro-cid-bsktuutb><td colspan="2" style="text-align:center; color:#999;" data-astro-cid-bsktuutb>${noSpecsText}</td></tr>`} </tbody> </table> </div>  <div class="tab-content" id="tab-quote" data-astro-cid-bsktuutb> <form class="quote-form" data-astro-cid-bsktuutb> <div class="form-group" data-astro-cid-bsktuutb> <label data-astro-cid-bsktuutb>${nameLabel}</label> <input type="text" id="quoteName" required data-astro-cid-bsktuutb> </div> <div class="form-group" data-astro-cid-bsktuutb> <label data-astro-cid-bsktuutb>${emailLabel}</label> <input type="email" id="quoteEmail" required data-astro-cid-bsktuutb> </div> <div class="form-group" data-astro-cid-bsktuutb> <label data-astro-cid-bsktuutb>${phoneLabel}</label> <input type="tel" id="quotePhone" required data-astro-cid-bsktuutb> </div> <div class="form-actions" data-astro-cid-bsktuutb> <button type="submit" class="btn-submit" data-astro-cid-bsktuutb>${getQuoteText}</button> <a${addAttribute(`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(id)}`, "href")} id="whatsappQuoteBtn" class="btn-whatsapp" target="_blank" data-astro-cid-bsktuutb> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-bsktuutb> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-bsktuutb></path> </svg> ${whatsappText} </a> </div> </form> </div> </div>  ${relatedProducts.length > 0 && renderTemplate`<div class="related-products" data-astro-cid-bsktuutb> <h2 data-astro-cid-bsktuutb>${relatedProductsText}</h2> <div class="related-grid" data-astro-cid-bsktuutb> ${relatedProducts.map((relProd) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "image": relProd.image, "brand": relProd.brand, "title": relProd.title, "code": relProd.id, "href": `${baseUrl}/${relProd.id}`, "ui": ui, "categorySlug": relProd.categorySlug, "price": relProd.price || 0, "lang": lang, "data-astro-cid-bsktuutb": true })}`)} </div> </div>`} </div> </div> ` })}` : renderTemplate`<div class="not-found" data-astro-cid-bsktuutb> <h1 data-astro-cid-bsktuutb>${notFoundText}</h1> <a${addAttribute(baseUrl || "/", "href")} class="back-link" data-astro-cid-bsktuutb>${backToHomeText}</a> </div>`} </div> </main>  <div id="imageLightbox" class="lightbox-overlay" data-astro-cid-bsktuutb> <div class="lightbox-close" id="closeLightbox" data-astro-cid-bsktuutb> <i class="fas fa-times" data-astro-cid-bsktuutb></i> </div> <div class="lightbox-content" data-astro-cid-bsktuutb> <button class="lightbox-nav-btn prev" id="prevImage" data-astro-cid-bsktuutb> <i class="fas fa-chevron-left" data-astro-cid-bsktuutb></i> </button> <div class="lightbox-image-container" id="zoomContainer" data-astro-cid-bsktuutb> <img id="lightboxImage" src="" alt="Enlarged Product" data-astro-cid-bsktuutb> </div> <button class="lightbox-nav-btn next" id="nextImage" data-astro-cid-bsktuutb> <i class="fas fa-chevron-right" data-astro-cid-bsktuutb></i> </button> </div> <div class="lightbox-controls" data-astro-cid-bsktuutb> <button id="zoomOut" title="Zoom Out" data-astro-cid-bsktuutb><i class="fas fa-search-minus" data-astro-cid-bsktuutb></i></button> <span id="zoomLevel" data-astro-cid-bsktuutb>100%</span> <button id="zoomIn" title="Zoom In" data-astro-cid-bsktuutb><i class="fas fa-search-plus" data-astro-cid-bsktuutb></i></button> <button id="resetZoom" title="Reset Zoom" data-astro-cid-bsktuutb><i class="fas fa-sync-alt" data-astro-cid-bsktuutb></i></button> </div> <div class="lightbox-counter" id="imageCounter" data-astro-cid-bsktuutb>1 / 1</div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-bsktuutb": true })} ` }), renderScript($$result, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ProductTemplate.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ site, id, emailSubject, emailBody }));
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ProductTemplate.astro", void 0);

const $$Astro = createAstro("https://www.ob-simatic.com");
function getStaticPaths() {
  const categorySlugs = getCategorySlugs();
  const pageSlugs = getPageSlugs();
  const productIds = getProductIds();
  const contentSlugs = [...categorySlugs, ...pageSlugs];
  const paths = [];
  const otherLangs = SUPPORTED_LANGUAGES.filter(
    (l) => l !== DEFAULT_LANGUAGE
  );
  contentSlugs.forEach((slug) => {
    paths.push({
      params: { slug: slug.replace(/[<>:"\/\\|?*]/g, "-") },
      props: {
        lang: DEFAULT_LANGUAGE,
        type: "content",
        originalSlug: slug
      }
    });
  });
  productIds.forEach((id) => {
    if (!contentSlugs.includes(id)) {
      paths.push({
        params: { slug: id },
        props: { lang: DEFAULT_LANGUAGE, type: "product", id }
      });
    }
  });
  otherLangs.forEach((lang) => {
    paths.push({
      params: { slug: lang },
      props: { lang, type: "home" }
    });
    ["arama", "iletisim", "kurumsal"].forEach((p) => {
      paths.push({
        params: { slug: `${lang}/${p}` },
        props: { lang, type: "special", page: p }
      });
    });
    contentSlugs.forEach((slug) => {
      paths.push({
        params: {
          slug: `${lang}/${slug.replace(/[<>:"\/\\|?*]/g, "-")}`
        },
        props: { lang, type: "content", originalSlug: slug }
      });
    });
    productIds.forEach((id) => {
      if (!contentSlugs.includes(id)) {
        paths.push({
          params: { slug: `${lang}/${id}` },
          props: { lang, type: "product", id }
        });
      }
    });
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  function getCatLoc(cat, lang2) {
    return cat.i18n[lang2] ?? cat.i18n[DEFAULT_LANGUAGE] ?? cat.i18n["en"] ?? {};
  }
  function getSubcategories(parentSlug, lang2, categoriesData) {
    return Object.values(categoriesData).filter((cat) => cat.parentSlug === parentSlug).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
      const loc = getCatLoc(cat, lang2);
      return {
        slug: cat.slug,
        name: loc.name,
        title: loc.title,
        description: loc.description,
        image: getCategoryImage(cat.slug),
        order: cat.order || 0
      };
    });
  }
  function getProducts(categorySlug, productsData2) {
    return Object.entries(productsData2).filter(
      ([_, prod]) => prod.categorySlug === categorySlug
    ).map(([id2, prod]) => ({ ...prod, id: id2 }));
  }
  function getBreadcrumb(slug, lang2, categoriesData) {
    const crumbs = [];
    let current = categoriesData[slug];
    while (current && current.parentSlug) {
      const parent = categoriesData[current.parentSlug];
      if (parent) {
        const loc = getCatLoc(parent, lang2);
        crumbs.unshift({
          slug: current.parentSlug,
          name: loc.name
        });
      }
      current = parent;
    }
    return crumbs;
  }
  function getCategoryTree(currentSlug, lang2, categoriesData) {
    let rootSlug = currentSlug;
    let current = categoriesData[currentSlug];
    while (current && current.parentSlug) {
      rootSlug = current.parentSlug;
      current = categoriesData[current.parentSlug];
    }
    const rootChildren = getSubcategories(rootSlug, lang2, categoriesData);
    return rootChildren.map((child) => {
      const grandChildren = getSubcategories(
        child.slug,
        lang2,
        categoriesData
      );
      const isChildActive = child.slug === currentSlug;
      const isGrandChildActive = grandChildren.some(
        (gc) => gc.slug === currentSlug
      );
      return {
        name: child.name,
        slug: child.slug,
        isActive: isChildActive || isGrandChildActive,
        children: grandChildren.map((gc) => ({
          name: gc.name,
          slug: gc.slug,
          isActive: gc.slug === currentSlug
        }))
      };
    });
  }
  function getBrandName(slug, lang2, categoriesData) {
    const path = [];
    let current = categoriesData[slug];
    while (current) {
      path.unshift(current);
      if (!current.parentSlug) break;
      current = categoriesData[current.parentSlug];
    }
    const brandCat = path.length > 1 ? path[1] : path[0];
    return brandCat ? getCatLoc(brandCat, lang2).name : "";
  }
  const { lang, type, originalSlug, id } = Astro2.props;
  const { ui, site, isRTL } = await getPageData(lang);
  const baseUrl = lang === DEFAULT_LANGUAGE ? "/".replace(/\/$/, "") : `${"/".replace(/\/$/, "")}/${lang}`;
  const categories = getCategoriesSync();
  const productsData = getProductsSync();
  const pagesData = getPagesSync();
  let category = null;
  let isStaticPage = false;
  let staticPageData = null;
  let subcategories = [];
  let products = [];
  let breadcrumb = [];
  let sidebarCategories = [];
  let pageTitle = "";
  let pageName = "";
  let seoDescription = "";
  const homeText = ui?.nav?.home || "Ana Sayfa";
  const viewProductsText = ui?.buttons?.viewProducts || "Ürünleri İncele";
  const productsFoundText = ui?.product?.productsFound || "parça ürün bulundu";
  const productCodeText = ui?.product?.code || "Ürün Kodu";
  const brandText = ui?.product?.brand || "Üretici";
  const seriesText = ui?.product?.series || "Seri";
  const emptyStateTitle = lang === "ar" ? "لا توجد منتجات في هذه الفئة حالياً" : lang === "en" ? "No products in this category yet" : "Bu kategoride henüz ürün bulunmamaktadır";
  const backToHomeText = lang === "ar" ? "العودة للرئيسية" : lang === "en" ? "Back to Home" : "Ana Sayfaya Dön";
  if (type === "content") {
    const pageContent = pagesData[originalSlug];
    isStaticPage = !!pageContent;
    if (isStaticPage) {
      const loc = pageContent[lang] || pageContent["tr"] || {};
      staticPageData = {
        title: loc.title || originalSlug,
        image: loc.image || "",
        content: loc.content || "",
        description: loc.description || ""
      };
    } else {
      const rawCategory = categories[originalSlug];
      if (rawCategory) {
        category = { ...rawCategory, ...getCatLoc(rawCategory, lang) };
      }
    }
    if (category) {
      subcategories = getSubcategories(originalSlug, lang, categories);
      products = getProducts(originalSlug, productsData);
      breadcrumb = getBreadcrumb(originalSlug, lang, categories);
      if (category.parentSlug) {
        sidebarCategories = getCategoryTree(originalSlug, lang, categories);
      }
    }
    pageTitle = isStaticPage ? staticPageData.title : category?.title || category?.name || "Kategori";
    pageName = isStaticPage ? staticPageData.title : category?.name || "Ürünler";
    seoDescription = category ? `${category.name || ""} - ${category.title || ""}. ${products.length > 0 ? products.length + " " : ""}${lang === "ar" ? "منتجات الأتمتة الصناعية" : lang === "en" ? "Industrial automation products" : "Endüstriyel otomasyon ürünleri"}` : isStaticPage ? staticPageData.description || "" : "";
  }
  return renderTemplate`${type === "product" ? renderTemplate`${renderComponent($$result, "ProductTemplate", $$ProductTemplate, { "id": id, "lang": lang, "data-astro-cid-fzx4jmue": true })}` : type === "special" ? Astro2.props.page === "arama" ? renderTemplate`${renderComponent($$result, "SearchTemplate", $$SearchTemplate, { "lang": lang, "data-astro-cid-fzx4jmue": true })}` : Astro2.props.page === "iletisim" ? renderTemplate`${renderComponent($$result, "ContactTemplate", $$ContactTemplate, { "lang": lang, "data-astro-cid-fzx4jmue": true })}` : renderTemplate`${renderComponent($$result, "CorporateTemplate", $$CorporateTemplate, { "lang": lang, "data-astro-cid-fzx4jmue": true })}` : type === "home" ? renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": site.seo.title, "lang": lang, "isHomePage": true, "data-astro-cid-fzx4jmue": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}${renderComponent($$result2, "Popup", $$Popup, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}${maybeRenderHead()}<main class="home-main" data-astro-cid-fzx4jmue>${renderComponent($$result2, "HeroSearch", $$HeroSearch, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}${renderComponent($$result2, "ServicePillars", $$ServicePillars, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-fzx4jmue": true })}${renderComponent($$result2, "ProductCategories", $$ProductCategories, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}${renderComponent($$result2, "PriceList", $$PriceList, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}${renderComponent($$result2, "Manufacturers", $$Manufacturers, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}</main>${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-fzx4jmue": true })}` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle} | ${site.shortName || "OB Simatic"}`, "lang": lang, "description": seoDescription, "data-astro-cid-fzx4jmue": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-fzx4jmue": true })}<main class="category-page" data-astro-cid-fzx4jmue><div class="hero-section" data-astro-cid-fzx4jmue><div class="hero-container" data-astro-cid-fzx4jmue><nav class="breadcrumb" data-astro-cid-fzx4jmue><a${addAttribute(baseUrl || "/", "href")} data-astro-cid-fzx4jmue>${homeText}</a>${breadcrumb.map((crumb) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-fzx4jmue": true }, { "default": async ($$result3) => renderTemplate`<span class="separator" data-astro-cid-fzx4jmue>›</span><a${addAttribute(`${baseUrl}/${formatUrlSlug(crumb.slug)}`, "href")} data-astro-cid-fzx4jmue>${crumb.name}</a>` })}`)}<span class="separator" data-astro-cid-fzx4jmue>›</span><span class="current" data-astro-cid-fzx4jmue>${pageName}</span></nav><h1 data-astro-cid-fzx4jmue>${pageName}</h1></div></div><div class="main-content" data-astro-cid-fzx4jmue><div class="content-container" data-astro-cid-fzx4jmue>${isStaticPage ? renderTemplate`<div class="static-content-box" data-astro-cid-fzx4jmue>${staticPageData.image && renderTemplate`<div class="page-image-container" data-astro-cid-fzx4jmue><img${addAttribute(staticPageData.image, "src")}${addAttribute(staticPageData.title, "alt")} class="page-image" data-astro-cid-fzx4jmue></div>`}<div class="content-body" data-astro-cid-fzx4jmue>${staticPageData.content.split("\n").map(
    (line) => line.trim() ? renderTemplate`<p data-astro-cid-fzx4jmue>${line}</p>` : renderTemplate`<br data-astro-cid-fzx4jmue>`
  )}</div></div>` : renderTemplate`<div class="page-layout row" data-astro-cid-fzx4jmue>${sidebarCategories.length > 0 && renderTemplate`<aside class="col-xl-2 col-lg-3" data-astro-cid-fzx4jmue>${renderComponent($$result2, "CategorySidebar", $$CategorySidebar, { "currentCategorySlug": originalSlug, "categories": sidebarCategories, "lang": lang, "data-astro-cid-fzx4jmue": true })}</aside>`}<div${addAttribute(
    sidebarCategories.length > 0 ? "col-xl-10 col-lg-9" : "col-12",
    "class"
  )} data-astro-cid-fzx4jmue><div class="p-list__content" data-astro-cid-fzx4jmue>${subcategories.length > 0 ? renderTemplate`<div class="category-grid" data-astro-cid-fzx4jmue>${subcategories.map((cat) => renderTemplate`<a${addAttribute(`${baseUrl}/${formatUrlSlug(cat.slug)}`, "href")} class="category-card" data-astro-cid-fzx4jmue><div class="card-image" data-astro-cid-fzx4jmue>${cat.image && !cat.image.includes(
    "default"
  ) ? renderTemplate`<img${addAttribute(
    cat.image,
    "src"
  )}${addAttribute(
    cat.name,
    "alt"
  )} data-astro-cid-fzx4jmue>` : renderTemplate`<div class="image-placeholder" data-astro-cid-fzx4jmue><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fzx4jmue><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-astro-cid-fzx4jmue></path></svg></div>`}</div><div class="card-content" data-astro-cid-fzx4jmue><div class="card-title" data-astro-cid-fzx4jmue>${cat.title || cat.name}</div>${cat.description && renderTemplate`<p class="card-desc" data-astro-cid-fzx4jmue>${cat.description}</p>`}</div><span class="view-btn" data-astro-cid-fzx4jmue>${viewProductsText}</span></a>`)}</div>` : products.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-fzx4jmue": true }, { "default": async ($$result3) => renderTemplate`<h4 class="search-result" data-astro-cid-fzx4jmue><span class="product-count-span" data-astro-cid-fzx4jmue>${products.length}</span>${" "}${productsFoundText}</h4><div class="table-responsive" data-astro-cid-fzx4jmue><table class="table" data-astro-cid-fzx4jmue><thead data-astro-cid-fzx4jmue><tr data-astro-cid-fzx4jmue><th data-astro-cid-fzx4jmue>${productCodeText}</th><th data-astro-cid-fzx4jmue>${brandText}</th><th data-astro-cid-fzx4jmue>${seriesText}</th><th style="width: 50px;" data-astro-cid-fzx4jmue></th></tr></thead><tbody data-astro-cid-fzx4jmue>${products.map(
    (product) => renderTemplate`<tr${addAttribute(`window.location.href='${baseUrl}/${product.id}'`, "onclick")} data-astro-cid-fzx4jmue><th data-astro-cid-fzx4jmue><div class="product-id-cell" data-astro-cid-fzx4jmue>${(() => {
      const img = getProductImage(
        product.id,
        product.image
      );
      return img ? renderTemplate`<img${addAttribute(
        img,
        "src"
      )}${addAttribute(
        product.id,
        "alt"
      )} class="product-thumb" data-astro-cid-fzx4jmue>` : renderTemplate`<div class="thumb-placeholder" data-astro-cid-fzx4jmue><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fzx4jmue><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-fzx4jmue></rect><circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-fzx4jmue></circle><polyline points="21 15 16 10 5 21" data-astro-cid-fzx4jmue></polyline></svg></div>`;
    })()}<a${addAttribute(`${baseUrl}/${product.id}`, "href")} data-astro-cid-fzx4jmue>${product.id}</a></div></th><td data-astro-cid-fzx4jmue>${getBrandName(
      product.categorySlug,
      lang,
      categories
    )}</td><td data-astro-cid-fzx4jmue>${pageName}</td><td style="padding: 5px;" data-astro-cid-fzx4jmue><div onclick="event.stopPropagation()" data-astro-cid-fzx4jmue>${renderComponent($$result3, "AddToCartBtn", $$AddToCartBtn, { "product": {
      id: product.id,
      title: (product.i18n[lang] || product.i18n["en"] || product.i18n[DEFAULT_LANGUAGE] || product.i18n["tr"])?.title || product.id,
      image: getProductImage(
        product.id
      ),
      brand: product.brand,
      categorySlug: product.categorySlug,
      price: product.price || 0
    }, "ui": ui, "variant": "icon", "data-astro-cid-fzx4jmue": true })}</div></td></tr>`
  )}</tbody></table></div>` })}` : renderTemplate`<div class="empty-state" data-astro-cid-fzx4jmue><div class="empty-icon" data-astro-cid-fzx4jmue>📦</div><h3 data-astro-cid-fzx4jmue>${emptyStateTitle}</h3><a${addAttribute(baseUrl || "/", "href")} class="back-link" data-astro-cid-fzx4jmue>${backToHomeText}</a></div>`}</div></div></div>`}</div></div>${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-fzx4jmue": true })}</main>` })}`}`;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/[...slug].astro", void 0);
const $$file = "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
