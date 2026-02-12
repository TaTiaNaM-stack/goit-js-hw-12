import{S as p,a as f,i as a}from"./assets/vendor-P1Bz7PaC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const y=document.querySelector(".gallery");new p(".gallery_item a");function c(t=[]){return t.map(({id:r,webformatURL:s,largeImageURL:e,tags:o,likes:n,views:d,comments:m,downloads:g})=>`<li class="gallery_item" id="${r}">
    <a href="${e}"><img src="${s}" alt="${o}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${n}
        </p>
        <p class="info_item">   
            <b>Views</b> ${d}
        </p>
        <p class="info_item">
            <b>Comments</b> ${m}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${g}
        </p>
    </div>
    </a>
    </li>`).join("")}function h(){y.innerHTML=""}function l(){const t=document.querySelector(".loader"),i=document.querySelector(".visibility");t&&i&&(t.style.display="block",document.body.appendChild(t));class r{constructor(){this.loader=document.createElement("div"),document.body.appendChild(this.loader)}}new r}function u(){const t=document.querySelector(".loader");t&&(t.style.display="none",document.body.removeChild(t))}async function b(t,i){return f.get("https://pixabay.com/api/",{params:{key:"YOUR_API_KEY_HERE",q:t,page:1,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images from Pixabay API:",e),e})}const w=document.querySelector(".form"),_=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");const E=15;w.addEventListener("submit",L);async function L(t){t.preventDefault();const i=_.value.trim();if(i===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(),l();try{const r=await c(i);console.log(r),r.hits.length===0?a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(appendImagesToGallery(c(r.hits)),a.success({title:"Success",message:`Found ${r.totalHits} images.`,position:"topRight"}))}catch(r){console.log(r.message),a.error({title:"Error",message:"An error occurred while fetching images.",position:"topRight"})}finally{u()}}window.addEventListener("scroll",async()=>{if(window.innerHeight+window.scrollY>=document.body.offsetHeight-500){currentPage+=1,l();try{const t=await b(`${query}&page=${currentPage}&per_page=${E}`);t.hits.length>0&&c(t.hits)}catch{a.error({title:"Error",message:"An error occurred while fetching more images.",position:"topRight"})}finally{u()}}});
//# sourceMappingURL=index.js.map
