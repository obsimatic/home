import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './bundle-astro/server-DefwwQT6.js';
import 'piccolore';
import { $ as $$AddToCartBtn } from './bundle-AddToCartBtn-DsYpS-Lj.js';
/* empty css                                */

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    image,
    brand,
    title,
    code,
    href = "#",
    ui,
    categorySlug = "",
    price = 0
  } = Astro2.props;
  const base = "/".replace(/\/$/, "");
  const isAbsolute = typeof image === "string" && (image.startsWith("http") || image.startsWith("data:"));
  const isLegacy = typeof image === "string" && image.includes("cpu-1516");
  const hasImage = image && !isLegacy;
  let imagePath = image;
  if (hasImage && typeof image === "string" && !isAbsolute) {
    const hasBase = image.startsWith(base);
    if (!hasBase) {
      imagePath = `${base}${image.startsWith("/") ? "" : "/"}${image}`;
    }
  }
  const isContactPrice = price === "contact";
  const formattedPrice = isContactPrice ? "" : `€${price}`;
  const contactText = ui?.product?.contactForPrice || (Astro2.currentLocale === "ar" ? "تواصل معنا للسعر" : Astro2.currentLocale === "en" ? "Contact for Price" : "Fiyat için iletişime geçin");
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-astro-cid-tjdfhdqb> <a${addAttribute(href, "href")} class="product-image skeleton-loader" data-astro-cid-tjdfhdqb> ${hasImage ? renderTemplate`<img${addAttribute(imagePath, "src")}${addAttribute(title, "alt")} loading="lazy" onload="this.parentElement.classList.remove('skeleton-loader'); this.classList.add('loaded')" data-astro-cid-tjdfhdqb>` : renderTemplate`<div class="no-image-placeholder" data-astro-cid-tjdfhdqb> <i class="fas fa-cube" data-astro-cid-tjdfhdqb></i> </div>`} </a> <div class="product-info" data-astro-cid-tjdfhdqb> <a href="#" class="product-brand" data-astro-cid-tjdfhdqb>${brand}</a> <a${addAttribute(href, "href")} class="product-title"${addAttribute(title, "title")} data-astro-cid-tjdfhdqb> <span class="product-code" data-astro-cid-tjdfhdqb>${code}</span> ${title} </a> <div class="product-price-row mt-2" data-astro-cid-tjdfhdqb> ${isContactPrice ? renderTemplate`<span class="text-primary fw-bold small" data-astro-cid-tjdfhdqb> <i class="fas fa-envelope me-1" data-astro-cid-tjdfhdqb></i> ${contactText} </span>` : renderTemplate`<span class="fw-bold text-dark" data-astro-cid-tjdfhdqb>${formattedPrice}</span>`} </div> </div> <div class="product-actions" style="margin-top: 15px;" data-astro-cid-tjdfhdqb> ${renderComponent($$result, "AddToCartBtn", $$AddToCartBtn, { "product": { id: code, title, image, brand, categorySlug, price }, "ui": ui, "variant": "secondary", "data-astro-cid-tjdfhdqb": true })} </div> </div> `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
