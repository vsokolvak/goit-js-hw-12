import{i as L,a as v,s as w}from"./assets/vendor-b16ce8bc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const d={_button:document.querySelector(".form-button"),active(){this._button.disabled=!1,this._button.classList.add("active")},disable(){this._button.disabled=!0,this._button.classList.remove("active")}};function y(t){return t.reduce((e,r)=>e+=`
      <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}"
          width="360" heihgt="200"
          alt="${r.tags}"/>
          </a>
          <ul class="galery-descriptions">
            <li class="galery-descriptions-item">
              <span class="galery-descriptions-title">likes</span>
              <span>${r.likes}</span>
            </li>
            <li class="galery-descriptions-item">
            <span class="galery-descriptions-title">views </span>
            <span>${r.views}</span>
            </li>
            <li class="galery-descriptions-item">
            <span class="galery-descriptions-title">comments </span>
            <span>${r.comments}</span>
            </li>
            <li class="galery-descriptions-item">
              <span class="galery-descriptions-title"> downloads </span>
              <span>${r.downloads}</span>
            </li>
          </ul>
        </li>
      `,"")}const o=(t,e="red")=>{L.show({message:t,messageColor:"white",messageSize:"26",messageLineHeight:"",backgroundColor:"",color:e,close:!0,closeOnEscape:!0,closeOnClick:!0,position:"topRight",timeout:4e3})},u={loader:document.querySelector(".loader-wraper"),btnLoadMore:document.querySelector(".button-wrapper"),show(){this.loader.classList.remove("hiden"),this.btnLoadMore.classList.add("hiden")},close(t,e){this.loader.classList.add("hiden"),t<e&&this.btnLoadMore.classList.remove("hiden")}},S="https://pixabay.com/api/?",q="37903725-9b007c08cd936d7b1a7a439ee",M=15,f=async(t,e,r=1)=>{const l={key:q,q:t,image_type:"photo",category:e,orientation:"horizontal",safesearch:"false",page:r,per_page:M};return await v.get(S,{params:l})},p=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),g={galleryEl:document.querySelector(".gallery"),clear(){this.galleryEl.innerHTML="",p.refresh()},addItems(t){this.galleryEl.insertAdjacentHTML("beforeend",t),p.refresh()}},b=document.querySelector(".search-form"),E=document.querySelector("#load-more");let i=1,n=1,c="",m="";b.addEventListener("submit",O);b.addEventListener("input",T);E.addEventListener("click",P);function T(t){if(t.currentTarget.elements.searchText.value.length>0){d.active();return}d.disable()}function O(t){if(t.preventDefault(),i=1,n=1,c=t.currentTarget.elements.searchText.value.trim(),m=t.currentTarget.elements.category.value,c.length<2){o("the search word must contain at least 2 letters","red"),t.currentTarget.reset(),d.disable();return}u.show(),g.clear(),f(c,m).then(e=>{if(e.data.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}n=Math.ceil(e.data.totalHits/15),g.addItems(y(e.data.hits)),i===n&&o("We're sorry, but you've reached the end of search results.","blue")}).catch(e=>{o("error "+e)}).finally(()=>{u.close(i,n),t.target.reset(),d.disable()})}function P(t){i+=1,u.show(),f(c,m,i).then(e=>{if(e.data.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}g.addItems(y(e.data.hits));const r=document.querySelector(".gallery-item").clientHeight;window.scrollBy({top:r*2,behavior:"smooth"})}).catch(e=>{o("error "+e)}).finally(()=>{u.close(i,n),i===n&&o("We're sorry, but you've reached the end of search results.","blue")})}
//# sourceMappingURL=commonHelpers.js.map
