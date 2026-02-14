import { b as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML } from './bundle-astro/server-DefwwQT6.js';
import 'piccolore';
import 'clsx';
import { s as siteData, D as DEFAULT_LANGUAGE } from './bundle-Footer-Dx8XM-bB.js';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://www.ob-simatic.com");
const $$ProductSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(productSchema)));
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/schema/ProductSchema.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.ob-simatic.com");
const $$BreadcrumbSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema)));
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/schema/BreadcrumbSchema.astro", void 0);

export { $$ProductSchema as $, $$BreadcrumbSchema as a };
