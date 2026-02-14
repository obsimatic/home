import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './bundle-astro/server-DefwwQT6.js';
import 'piccolore';
import 'clsx';
import { c as categories, d as getLocalizedPath, f as formatUrlSlug } from './bundle-Footer-Dx8XM-bB.js';
/* empty css                                */

const $$Astro = createAstro("https://www.ob-simatic.com");
const $$CategorySidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategorySidebar;
  const {
    currentCategorySlug = "",
    categories: categories$1 = [],
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
    while (currentSlug && categories[currentSlug]) {
      const cat = categories[currentSlug];
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
  const topLevelCategories = Object.values(categories).filter((cat) => cat.parentSlug === null).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
    const loc = getCatLoc(cat);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title || loc.name
    };
  });
  const currentCategory = categories[currentCategorySlug];
  const parentSlug = currentCategory?.parentSlug;
  parentSlug ? Object.values(categories).filter((cat) => cat.parentSlug === parentSlug).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
    const loc = getCatLoc(cat);
    return {
      slug: cat.slug,
      name: loc.name,
      title: loc.title || loc.name,
      isActive: cat.slug === currentCategorySlug
    };
  }) : [];
  const childCategories = Object.values(categories).filter((cat) => cat.parentSlug === currentCategorySlug).sort((a, b) => (a.order || 0) - (b.order || 0)).map((cat) => {
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

export { $$CategorySidebar as $ };
