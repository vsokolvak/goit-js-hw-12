import{i as m,s as p}from"./assets/vendor-5c957d73.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const l={_button:document.querySelector(".form-button"),active(){this._button.disabled=!1,this._button.classList.add("active")},disable(){this._button.disabled=!0,this._button.classList.remove("active")}};function h(e){return e.reduce((r,s)=>r+=`
      <li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
          <img class="gallery-image" src="${s.webformatURL}"
          width="360" heihgt="200"
          alt="${s.tags}"/>
          </a>
          <ul class="galery-descriptions">
            <li class="galery-descriptions-item">
              <span class="galery-descriptions-title">likes</span>
              <span>${s.likes}</span>
            </li>
            <li class="galery-descriptions-item">
            <span class="galery-descriptions-title">views </span>
            <span>${s.views}</span>
            </li>
            <li class="galery-descriptions-item">
            <span class="galery-descriptions-title">comments </span>
            <span>${s.comments}</span>
            </li>
            <li class="galery-descriptions-item">
              <span class="galery-descriptions-title"> downloads </span>
              <span>${s.downloads}</span>
            </li>
          </ul>
        </li>
      `,"")}const n=(e,r="red")=>{m.show({message:e,messageColor:"white",messageSize:"26",messageLineHeight:"",backgroundColor:"",color:r,close:!0,closeOnEscape:!0,closeOnClick:!0,position:"topRight",timeout:4e3})},c={loader:document.querySelector(".loader"),show(){this.loader.classList.remove("hiden")},close(){this.loader.classList.add("hiden")}},y="https://pixabay.com/api/?",f="37903725-9b007c08cd936d7b1a7a439ee",b=(e,r)=>{const s=new URLSearchParams({key:f,q:e,image_type:"photo",category:r,orientation:"horizontal",safesearch:"false"});return fetch(y+s).then(a=>{if(!a.ok)throw new Error(a.message);return a.json()})},u=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d={galleryEl:document.querySelector(".gallery"),clear(){this.galleryEl.innerHTML="",u.refresh()},addItems(e){this.galleryEl.innerHTML=e,u.refresh()}},g=document.querySelector(".search-form");g.addEventListener("submit",w);g.addEventListener("input",L);function L(e){if(e.currentTarget.elements.searchText.value.length>0){l.active();return}l.disable()}function w(e){e.preventDefault();const r=e.currentTarget.elements.searchText.value.trim(),s=e.currentTarget.elements.category.value;if(r.length<2){n("the search word must contain at least 2 letters","red"),e.currentTarget.reset();return}c.show(),d.clear(),b(r,s).then(a=>{if(console.log(a),a.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}d.addItems(h(a.hits))}).catch(a=>{n("error "+a)}).finally(()=>{c.close(),e.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
