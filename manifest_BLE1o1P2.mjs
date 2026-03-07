import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './assets/bundle-astro/server-FkVzvw7-.js';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/","cacheDir":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/node_modules/.astro/","outDir":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/","srcDir":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/","publicDir":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/public/","buildClientDir":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/client/","buildServerDir":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/api/search-index.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search-index.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search-index\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search-index.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search-index.json.ts","pathname":"/api/search-index.json","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/arama/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/arama","isIndex":false,"type":"page","pattern":"^\\/arama\\/?$","segments":[[{"content":"arama","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/arama.astro","pathname":"/arama","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/iletisim/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/iletisim","isIndex":false,"type":"page","pattern":"^\\/iletisim\\/?$","segments":[[{"content":"iletisim","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/iletisim.astro","pathname":"/iletisim","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/kurumsal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/kurumsal","isIndex":false,"type":"page","pattern":"^\\/kurumsal\\/?$","segments":[[{"content":"kurumsal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kurumsal.astro","pathname":"/kurumsal","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.ob-simatic.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/iletisim.astro",{"propagation":"none","containsHead":true}],["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/kurumsal.astro",{"propagation":"none","containsHead":true}],["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/arama.astro",{"propagation":"none","containsHead":true}],["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/search-index.json@_@ts":"pages/api/search-index.json.astro.mjs","\u0000@astro-page:src/pages/arama@_@astro":"pages/arama.astro.mjs","\u0000@astro-page:src/pages/iletisim@_@astro":"pages/iletisim.astro.mjs","\u0000@astro-page:src/pages/kurumsal@_@astro":"pages/kurumsal.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BLE1o1P2.mjs","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/data/ar/ui.json":"assets/bundle-ui-C3Wt5xf0.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/data/en/ui.json":"assets/bundle-ui-CGNstkeI.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/data/tr/ui.json":"assets/bundle-ui-CdUVEpns.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/data/products.json":"assets/bundle-products-h5LNh_80.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/templates/SearchTemplate.astro?astro&type=script&index=0&lang.ts":"assets/bundle-SearchTemplate.astro_astro_type_script_index_0_lang-CI09vmma.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Header.astro?astro&type=script&index=0&lang.ts":"assets/bundle-Header.astro_astro_type_script_index_0_lang-DfNqlh7-.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Header.astro?astro&type=script&index=1&lang.ts":"assets/bundle-Header.astro_astro_type_script_index_1_lang-BeXgxiVE.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/HeroSearch.astro?astro&type=script&index=0&lang.ts":"assets/bundle-HeroSearch.astro_astro_type_script_index_0_lang-CEN9cz__.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Popup.astro?astro&type=script&index=0&lang.ts":"assets/bundle-Popup.astro_astro_type_script_index_0_lang-CKvb-SlZ.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"assets/bundle-ClientRouter.astro_astro_type_script_index_0_lang-QW52Ox2j.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/AddToCartBtn.astro?astro&type=script&index=0&lang.ts":"assets/bundle-AddToCartBtn.astro_astro_type_script_index_0_lang-BKXAd8XE.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/ProductTemplate.astro?astro&type=script&index=0&lang.ts":"assets/bundle-ProductTemplate.astro_astro_type_script_index_0_lang-m9gCZ01-.js","C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/CartDrawer.astro?astro&type=script&index=0&lang.ts":"assets/bundle-CartDrawer.astro_astro_type_script_index_0_lang-DYiXjE4F.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const u=document.querySelector(\".mobile-menu-btn\"),n=document.querySelector(\".nav\"),d=document.querySelector(\".nav-overlay\"),v=document.querySelector(\".mobile-close-btn\");function o(e){if(!e)return null;const t=e.cloneNode(!0);return e.parentNode?.replaceChild(t,e),t}const l=o(u),r=o(v),s=o(d);function c(){if(!n)return;n.classList.toggle(\"active\");const e=document.querySelector(\".nav-overlay\");e&&e.classList.toggle(\"active\"),document.body.style.overflow=n.classList.contains(\"active\")?\"hidden\":\"\"}function f(){if(!n)return;n.classList.remove(\"active\");const e=document.querySelector(\".nav-overlay\");e&&e.classList.remove(\"active\"),document.body.style.overflow=\"\"}l&&l.addEventListener(\"click\",c),r&&r.addEventListener(\"click\",c),s&&s.addEventListener(\"click\",c),document.querySelectorAll(\".nav-list a:not(.lang-btn)\").forEach(e=>{const t=o(e);t&&t.addEventListener(\"click\",f)}),document.querySelectorAll(\".submenu-toggle\").forEach(e=>{const t=o(e);t&&t.addEventListener(\"click\",a=>{a.preventDefault(),a.stopPropagation();const i=t.parentElement;i&&i.classList.toggle(\"open\")})})});"],["C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/components/Popup.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"campaign-popup\"),t=document.getElementById(\"close-popup\");e&&t&&(t.addEventListener(\"click\",()=>{e.style.display=\"none\",sessionStorage.setItem(\"popupClosed\",\"true\")}),sessionStorage.getItem(\"popupClosed\")===\"true\"&&(e.style.display=\"none\"))});"]],"assets":["/file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/api/search-index.json","/file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/arama/index.html","/file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/iletisim/index.html","/file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/kurumsal/index.html","/file:///C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"nOnEu6L3oVq9Kies5MiBqkdfT5Y+7m7SGsbx3GFj5Mw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
