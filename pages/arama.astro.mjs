import { c as createComponent, r as renderComponent, a as renderTemplate } from '../assets/bundle-astro/server-FkVzvw7-.js';
import 'piccolore';
import { $ as $$SearchTemplate } from '../assets/bundle-SearchTemplate-G0JPqfeA.js';
import { D as DEFAULT_LANGUAGE } from '../assets/bundle-Footer-C84hCY4r.js';
export { renderers } from '../renderers.mjs';

const $$Arama = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SearchTemplate", $$SearchTemplate, { "lang": DEFAULT_LANGUAGE })}`;
}, "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/arama.astro", void 0);

const $$file = "C:/Users/ob-si/OneDrive/Desktop/ob-simatic-ekkeri/project/src/pages/arama.astro";
const $$url = "/arama";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Arama,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
