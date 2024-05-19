import{i as L,a as v,s as w}from"./assets/vendor-b16ce8bc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const m={_button:document.querySelector(".form-button"),active(){this._button.disabled=!1,this._button.classList.add("active")},disable(){this._button.disabled=!0,this._button.classList.remove("active")}};function y(t){return t.reduce((e,s)=>e+=`
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
      `,"")}const o=(t,e="red")=>{L.show({message:t,messageColor:"white",messageSize:"26",messageLineHeight:"",backgroundColor:"",color:e,close:!0,closeOnEscape:!0,closeOnClick:!0,position:"topRight",timeout:4e3})},d={loader:document.querySelector(".loader-wraper"),btnLoadMore:document.querySelector(".button-wrapper"),show(){this.loader.classList.remove("hiden"),this.btnLoadMore.classList.add("hiden")},close(t,e){this.loader.classList.add("hiden"),t<e&&this.btnLoadMore.classList.remove("hiden")}},S="https://pixabay.com/api/?",q="37903725-9b007c08cd936d7b1a7a439ee",M=15,f=async(t,e,s=1)=>{const l={key:q,q:t,image_type:"photo",category:e,orientation:"horizontal",safesearch:"false",page:s,per_page:M};return await v.get(S,{params:l})},p=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),h={galleryEl:document.querySelector(".gallery"),clear(){this.galleryEl.innerHTML="",p.refresh()},addItems(t){this.galleryEl.insertAdjacentHTML("beforeend",t),p.refresh()}},b=document.querySelector(".search-form"),E=document.querySelector("#load-more");let i=1,n=1,c="",g="";b.addEventListener("submit",O);b.addEventListener("input",T);E.addEventListener("click",P);function T(t){if(t.currentTarget.elements.searchText.value.length>0){m.active();return}m.disable()}function O(t){if(t.preventDefault(),i=1,n=1,c=t.currentTarget.elements.searchText.value.trim(),g=t.currentTarget.elements.category.value,c.length<2){o("the search word must contain at least 2 letters","red"),t.currentTarget.reset();return}d.show(),h.clear(),f(c,g).then(e=>{if(e.data.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}n=Math.ceil(e.data.totalHits/15),h.addItems(y(e.data.hits))}).catch(e=>{o("error "+e)}).finally(()=>{d.close(i,n),t.target.reset(),i===n&&o("We're sorry, but you've reached the end of search results.","blue")})}function P(t){i+=1,d.show(),f(c,g,i).then(e=>{if(e.data.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}h.addItems(y(e.data.hits));const s=document.querySelector(".gallery-item").clientHeight;window.scrollBy({top:s*2,behavior:"smooth"})}).catch(e=>{o("error "+e)}).finally(()=>{d.close(i,n),i===n&&o("We're sorry, but you've reached the end of search results.","blue")})}
//# sourceMappingURL=commonHelpers.js.map
