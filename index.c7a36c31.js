const e=document.querySelector(".loader"),t=document.querySelector(".error"),n=document.querySelector(".cat-info");t.style.display="none",document.addEventListener("DOMContentLoaded",(()=>{fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_JsN6r1FxxYTYJD5FiAycR2AgBeRInhCIqXuLzV1LCMjPijnKU2rVJJpDOjTfhmVg"}}).then((e=>e.json())).catch((e=>{throw e})).then((t=>{const n=new SlimSelect({select:".breed-select",placeholder:"Select a breed"});t.forEach((e=>{n.addData({text:e.name,value:e.id})})),e.style.display="none"})).catch((s=>{console.error("Error fetching breed list:",s),e.style.display="none",n.style.display="none",t.style.display="block"}));document.querySelector(".breed-select").addEventListener("change",(function(){const s=this.value;var r;e.style.display="block",n.style.display="none",t.style.display="none",(r=s,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`,{headers:{"x-api-key":"live_JsN6r1FxxYTYJD5FiAycR2AgBeRInhCIqXuLzV1LCMjPijnKU2rVJJpDOjTfhmVg"}}).then((e=>e.json())).then((e=>({...e[0],name:e[0].breeds[0].name,description:e[0].breeds[0].description,temperament:e[0].breeds[0].temperament}))).catch((e=>{throw e}))).then((t=>{const s=t.url,r=t.description,a=t.temperament,i=t.name;n.innerHTML=`\n          <div style="display: flex; align-items: center;">\n            <img src="${s}" alt="Cat" style="max-width: 400px; max-height: 400px; margin-top: 40px; margin-right: 20px;">\n            <div>\n              <h2>${i}</h2>\n              <p>${r}</p>\n              <p><strong>Temperament:</strong> ${a}</p>\n            </div>\n          </div>\n        `,e.style.display="none",n.style.display="block"})).catch((s=>{console.error("Error fetching cat info:",s),e.style.display="none",n.style.display="none",t.style.display="block"}))}))}));
//# sourceMappingURL=index.c7a36c31.js.map
