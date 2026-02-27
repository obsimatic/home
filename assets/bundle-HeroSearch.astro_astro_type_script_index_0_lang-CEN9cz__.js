import{S as u}from"./bundle-searchEngine-B6p1lMZz.js";import{f as g}from"./bundle-urlFormatter-YyBz8RD3.js";document.addEventListener("astro:page-load",async()=>{const c=u.getInstance(),a=document.querySelector('.hero-search input[name="q"]'),t=document.getElementById("heroSearchResults"),i=document.documentElement.lang||"tr";if(!a||!t)return;const d=s=>{if(s.length===0){t.classList.remove("active");return}const n=i==="tr"?"":`/${i}`;t.innerHTML=s.map(e=>{const r=e[`title_${i}`]||e.title_tr||e.id,o=e.type==="category"?`${n}/${g(e.id)}`:`${n}/${e.id}`,l=e.type==="category";return`
          <a href="${o}" class="search-result-item ${l?"category-item":""}">
            <div class="search-result-info">
              <span class="search-result-id">${e.id}</span>
              <span class="search-result-title">${r}</span>
            </div>
            ${l?'<span class="type-badge">Category</span>':""}
          </a>
        `}).join(""),t.classList.add("active")};a.addEventListener("focus",()=>c.init()),a.addEventListener("input",async s=>{const n=s.target.value.trim();if(!n){t.classList.remove("active");return}await c.init();const e={q:n,brand:[],inStock:!1,contactPrice:!1,minPrice:0,maxPrice:1/0},r=c.search(e),o=[...r.categories.slice(0,2),...r.products.slice(0,8)];d(o)}),document.addEventListener("click",s=>{!a.contains(s.target)&&!t.contains(s.target)&&t.classList.remove("active")})});
