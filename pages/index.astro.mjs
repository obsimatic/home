import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../assets/bundle-astro/server-FkVzvw7-.js';
import 'piccolore';
import { g as getPageData, $ as $$Layout, a as $$Header, b as $$Footer } from '../assets/bundle-Footer-C84hCY4r.js';
import { $ as $$Popup, a as $$HeroSearch, b as $$ServicePillars, c as $$ProductCategories, d as $$FeaturedProducts, e as $$PriceList, f as $$Manufacturers } from '../assets/bundle-Popup-DjkUOp4g.js';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "tr";
  const { ui, site, isRTL } = await getPageData(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": site.seo.title, "lang": lang, "isHomePage": true, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Popup", $$Popup, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HeroSearch", $$HeroSearch, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServicePillars", $$ServicePillars, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ProductCategories", $$ProductCategories, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "PriceList", $$PriceList, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Manufacturers", $$Manufacturers, { "lang": lang, "ui": ui, "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "ui": ui, "site": site, "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/index.astro", void 0);

const $$file = "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
