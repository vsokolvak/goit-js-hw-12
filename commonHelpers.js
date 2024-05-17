import{i as w,a as S,s as q}from"./assets/vendor-b16ce8bc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const y={_button:document.querySelector(".form-button"),active(){this._button.disabled=!1,this._button.classList.add("active")},disable(){this._button.disabled=!0,this._button.classList.remove("active")}};function L(t){return t.reduce((e,r)=>e+=`
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
      `,"")}const o=(t,e="red")=>{w.show({message:t,messageColor:"white",messageSize:"26",messageLineHeight:"",backgroundColor:"",color:e,close:!0,closeOnEscape:!0,closeOnClick:!0,position:"topRight",timeout:4e3})},u={loader:document.querySelector(".loader-wraper"),show(){this.loader.classList.remove("hiden")},close(){this.loader.classList.add("hiden")}},E="https://pixabay.com/api/?",M="37903725-9b007c08cd936d7b1a7a439ee",T=15,b=async(t,e,r=1)=>{const l={key:M,q:t,image_type:"photo",category:e,orientation:"horizontal",safesearch:"false",page:r,per_page:T};return await S.get(E,{params:l})},f=new q(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),m={galleryEl:document.querySelector(".gallery"),clear(){this.galleryEl.innerHTML="",f.refresh()},addItems(t){this.galleryEl.insertAdjacentHTML("beforeend",t),f.refresh()}},v=document.querySelector(".search-form"),O=document.querySelector("#load-more"),h=document.querySelector(".button-wrapper"),c=document.querySelector(".end-colections-message");let n=1,i=0,d="",p="";v.addEventListener("submit",x);v.addEventListener("input",P);O.addEventListener("click",I);function P(t){if(t.currentTarget.elements.searchText.value.length>0){y.active();return}y.disable()}function x(t){if(t.preventDefault(),c.classList.add("hiden"),d=t.currentTarget.elements.searchText.value.trim(),p=t.currentTarget.elements.category.value,d.length<2){o("the search word must contain at least 2 letters","red"),t.currentTarget.reset();return}u.show(),m.clear(),b(d,p).then(e=>{if(e.data.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!"),i=0,h.classList.add("hiden"),c.classList.add("hiden");return}i=Math.ceil(e.data.totalHits/15),m.addItems(L(e.data.hits)),n===i&&c.classList.remove("hiden")}).catch(e=>{o("error "+e)}).finally(()=>{u.close(),n<i&&h.classList.remove("hiden"),t.target.reset()})}function I(t){n+=1,h.classList.add("hiden"),u.show(),b(d,p,n).then(e=>{if(e.data.hits.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}m.addItems(L(e.data.hits));const r=document.querySelector(".gallery-item").clientHeight;window.scrollBy({top:r*2,behavior:"smooth"})}).catch(e=>{o("error "+e)}).finally(()=>{u.close(),n<i?h.classList.remove("hiden"):c.classList.remove("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
