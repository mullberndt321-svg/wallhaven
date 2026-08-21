const categories = [
  ["Tiere","🐺", "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85"],
  ["Autos","🏎️", "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=85"],
  ["Natur","🏔️", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85"],
  ["Space","🌌", "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=85"],
  ["Gaming","🎮", "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"],
  ["Abstrakt","✨", "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=85"]
];
const photos = [
 ["Wolf in the wild","Tiere","1552053831-71594a27632d"],
 ["Red fox","Tiere","1516934024742-b461fba47600"],
 ["Lion portrait","Tiere","1546182990-dffeafbe841d"],
 ["Panda","Tiere","1540573133985-87b6da6d54a9"],
 ["Elephant","Tiere","1557050543-4d5f4e07ef46"],
 ["Tiger","Tiere","1561731216-c3a4d99437d5"],
 ["Owl","Tiere","1543549790-2b1b7e5e4b1f"],
 ["Golden retriever","Tiere","1558788353-f76d92427f16"],
 ["Horse","Tiere","1553284965-83fd3e82fa5a"],
 ["Deer","Tiere","1484406566174-9da000fda645"],
 ["Penguin","Tiere","1551986781-34e60edb7a4d"],
 ["Polar bear","Tiere","1589656966895-2f33e7653819"],
 ["Koala","Tiere","1459262838948-3e2de6c5c4e5"],
 ["Eagle","Tiere","1444464666168-49d633b86797"],
 ["Butterfly","Tiere","1473448912268-2022ce9509d8"],
 ["Cat","Tiere","1518791841217-8f162f1e1131"],
 ["Parrot","Tiere","1552728089-57bdde30beb3"],
 ["Rabbit","Tiere","1585110396000-c9ffd4e4b308"],
 ["Giraffe","Tiere","1547721064-da6cfb341d50"],
 ["Sea turtle","Tiere","1437622368342-7a3d73a34c8f"],
 ["Sports car","Autos","1503736334956-4c8f8e92946d"],
 ["Classic car","Autos","1492144534655-ae79c964c9d7"],
 ["City supercar","Autos","1494905998402-395d579af36f"],
 ["Luxury coupe","Autos","1504215680853-026ed2a45def"],
 ["Black supercar","Autos","1542362567-b07e54358753"],
 ["Red sports car","Autos","1553440569-b9c9c9d1f1f4"],
 ["Road trip","Autos","1511919884226-fd3b5a9f9a3b"],
 ["Vintage car","Autos","1503376780353-7e6692767b70"],
 ["Off-road","Autos","1519245659620-e859806a8d3b"],
 ["Racing","Autos","1493238792000-8113da705763"],
 ["Motorcycle","Autos","1558981806-ec527fa84c39"],
 ["Jeep adventure","Autos","1533473359331-0135ef1b58bf"],
 ["Electric car","Autos","1593941707882-a5bba14938c7"],
 ["Roadster","Autos","1542282088-72c9c27ed0cd"],
 ["Car detail","Autos","1504215680853-026ed2a45def"],
 ["Mountain drive","Autos","1517153295259-74eb0d5a2c3a"],
 ["Neon car","Autos","1517026575980-3e1e2d1c5b2f"],
 ["Supercar night","Autos","1518659526054-190340b32735"],
 ["Garage","Autos","1486006920555-c77dcf18193c"],
 ["Open road","Autos","1477959858617-67f85cf4f1df"],
 ["Mountain road","Natur","1464822759023-fed622ff2c3b"],
 ["Forest mist","Natur","1448375240586-882707db888b"],
 ["Lake mountains","Natur","1500534623283-312aade485b7"],
 ["Snow peaks","Natur","1454496522488-7a8e488e8606"],
 ["Waterfall","Natur","1433086966358-54859d0ed716"],
 ["Autumn forest","Natur","1509316785289-025f5b846b35"],
 ["Desert","Natur","1500530855697-b586d89ba3ee"],
 ["Ocean","Natur","1507525428034-b723cf961d3e"],
 ["Cliff coast","Natur","1500534623283-312aade485b7"],
 ["Pine forest","Natur","1441974231531-c6227db76b6e"],
 ["Sunset field","Natur","1506744038136-46273834b3fb"],
 ["Green valley","Natur","1469474968028-56623f02e42e"],
 ["River","Natur","14324059-2d0c3f4c8f4a"],
 ["Flowers","Natur","1490750967868-88aa4486c946"],
 ["Lavender","Natur","1499002238440-d264edd596ec"],
 ["Bamboo","Natur","1528360983277-13d401cdc186"],
 ["Canyon","Natur","1470770841072-f978cf4d019e"],
 ["Water landscape","Natur","1470770841072-f978cf4d019e"],
 ["Foggy mountains","Natur","1482192505345-5655af888cc4"],
 ["Starry night","Natur","1519681393784-d120267933ba"],
 ["Galaxy clouds","Space","1462331940025-496dfbfc7564"],
 ["Night sky","Space","1516339901601-2e1b62dc0c45"],
 ["Blue planet","Space","1446776811953-b23d57bd21aa"],
 ["Stars","Space","1475222976114-ec808994c4d3"],
 ["Nebula","Space","1451187580459-43490279c0fa"],
 ["Moon","Space","1534791547706-1f439d8a2b5a"],
 ["Milky way","Space","1500534623283-312aade485b7"],
 ["Space station","Space","1446776877081-d282a0f896e2"],
 ["Astronaut","Space","1446776811953-b23d57bd21aa"],
 ["Solar eclipse","Space","1500534623283-312aade485b7"],
 ["Red planet","Space","1614728263952-84ea256f9679"],
 ["Cosmos","Space","1462331940025-496dfbfc7564"],
 ["Deep space","Space","1519681393784-d120267933ba"],
 ["Purple nebula","Space","1462331940025-496dfbfc7564"],
 ["Moonlight","Space","1532693322450-2cb5c511067d"],
 ["Galaxy","Space","1506318137071-a8e063b4bec0"],
 ["Aurora","Space","1483347756197-ff35f4e2a8c0"],
 ["Cosmic blue","Space","1451187580459-43490279c0fa"],
 ["Starscape","Space","1516339901601-2e1b62dc0c45"],
 ["Planet horizon","Space","1614728263952-84ea256f9679"],
 ["Gaming setup","Gaming","1542751371-adc38448a05e"],
 ["Neon controller","Gaming","1593305841991-05c297ba4575"],
 ["RGB room","Gaming","1560419015-7c427e1ff1fa"],
 ["Keyboard","Gaming","1587202372775-e229f172b9d7"],
 ["PC gaming","Gaming","1603481546238-487240415921"],
 ["Arcade","Gaming","1578895101408-1d0f7f6a1e5b"],
 ["Console","Gaming","1605901309584-818e25960a8f"],
 ["Esports","Gaming","1542751110-97427bbecf20"],
 ["Headset","Gaming","1599669454699-248893623440"],
 ["Game room","Gaming","1598550476439-6847785fcea6"],
 ["RGB keyboard","Gaming","1612198188060-c7c2a3b66eae"],
 ["Controller","Gaming","1597840904098-7f5f8c8f0e1a"],
 ["Retro game","Gaming","1550745165-9d1a4c1a4b3d"],
 ["Pixel art","Gaming","1614680376408-81e6503b1eaa"],
 ["Streaming desk","Gaming","1611162617474-5b21e879e113"],
 ["Gaming laptop","Gaming","1593642702821-c8da6771f0c6"],
 ["Neon arcade","Gaming","1511512578047-dfb367046420"],
 ["VR gaming","Gaming","1622979135225-d2ba269cf1f3"],
 ["Cyber setup","Gaming","1547394765-185e1e68f34e"],
 ["Game night","Gaming","1493711662062-fa541adb3fc8"],
 ["Purple waves","Abstrakt","1557683316-973673baf926"],
 ["Gradient dream","Abstrakt","1557682250-33bd709cbe85"],
 ["Color flow","Abstrakt","1557682224-5b8590cd9ec5"],
 ["Pastel shapes","Abstrakt","1549490349-8643362247b5"],
 ["Liquid color","Abstrakt","1541701494587-cb58502866ab"],
 ["Blue abstract","Abstrakt","1557682260-3c6b5f0f4b5d"],
 ["Orange gradient","Abstrakt","1557682250-33bd709cbe85"],
 ["Pink shapes","Abstrakt","1550853024-fae8cd4be47f"],
 ["Neon gradient","Abstrakt","1557682250-33bd709cbe85"],
 ["Geometric","Abstrakt","1513364776144-60967b0f800f"],
 ["Fluid art","Abstrakt","1549490349-8643362247b5"],
 ["Minimal abstract","Abstrakt","1550745165-9d1a4c1a4b3d"],
 ["Violet texture","Abstrakt","1557683316-973673baf926"],
 ["Blue fluid","Abstrakt","1531058020387-3be344556be6"],
 ["Color spectrum","Abstrakt","1500534623283-312aade485b7"],
 ["Dark gradient","Abstrakt","1557682260-3c6b5f0f4b5d"],
 ["Soft shapes","Abstrakt","1557682250-33bd709cbe85"],
 ["Modern art","Abstrakt","1549490349-8643362247b5"],
 ["Prism","Abstrakt","1531058020387-3be344556be6"],
 ["Aurora abstract","Abstrakt","1483347756197-ff35f4e2a8c0"]
];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const url = id => `https://images.unsplash.com/photo-${encodeURIComponent(id)}?auto=format&fit=crop&w=1000&q=88`;
function loadFavorites(){
  try{const v=JSON.parse(localStorage.getItem("wall-favs")||"[]");return Array.isArray(v)?v.filter(x=>typeof x==="string"):[]}
  catch{return []}
}
let active = "Alle", visible = 24, favorites = loadFavorites(), favOnly = false;

const categoryGrid = document.querySelector("#categoryGrid");
categoryGrid.innerHTML = categories.map(c => `<div class="category" data-cat="${esc(c[0])}" style="background-image:url('${encodeURI(c[2])}')"><strong>${esc(c[1])} ${esc(c[0])}</strong><small>›</small></div>`).join("");
categoryGrid.onclick = e => { const el=e.target.closest(".category"); if(el){active=el.dataset.cat; favOnly=false; visible=12; render(); document.querySelector("#wallpapers").scrollIntoView({behavior:"smooth"}); } };

document.querySelector("#chips").innerHTML = ["Alle", ...categories.map(c=>c[0])].map(c=>`<button class="chip ${c==="Alle"?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
document.querySelector("#chips").onclick=e=>{if(e.target.classList.contains("chip")){active=e.target.dataset.cat;favOnly=false;visible=24;render()}};
document.querySelector("#allBtn").onclick=()=>{active="Alle";favOnly=false;render();document.querySelector("#wallpapers").scrollIntoView({behavior:"smooth"})};
document.querySelector("#clearBtn").onclick=()=>{active="Alle";favOnly=false;document.querySelector("#search").value="";render()};
document.querySelector("#showFavs").onclick=()=>{favOnly=true;active="Alle";visible=100;render();document.querySelector("#wallpapers").scrollIntoView({behavior:"smooth"})};
document.querySelector("#loadMore").onclick=()=>{visible+=12;render()};

document.querySelector("#search").oninput=render;
document.querySelector("#sort").onchange=render;
document.querySelector("#themeBtn").onclick=()=>{document.body.classList.toggle("light");document.querySelector("#themeBtn").textContent=document.body.classList.contains("light")?"☀":"☾"};

document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.querySelector("#search").focus()}});
function render(){
  const q=document.querySelector("#search").value.toLowerCase().trim();
  let list=photos.filter(p=>(active==="Alle"||p[1]===active)&&(!q||p[0].toLowerCase().includes(q)||p[1].toLowerCase().includes(q))&&(!favOnly||favorites.includes(p[2])));
  const sort=document.querySelector("#sort").value;
  if(sort==="random") list=[...list].sort(()=>Math.random()-.5);
  const shown=list.slice(0,visible);
  document.querySelector("#galleryTitle").textContent=favOnly?"Meine Favoriten":active==="Alle"?"Alle Wallpapers":active;
  document.querySelector("#wallGrid").innerHTML=shown.length?shown.map((p,i)=>card(p,i)).join(""):`<p style="color:var(--muted)">Keine Wallpapers gefunden.</p>`;
  document.querySelector("#loadMore").style.display=list.length>visible?"block":"none";
  document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.cat===active));
  document.querySelectorAll(".heart").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(b.dataset.id)});
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>openModal(c.dataset.id));
}
function card(p,i){const on=favorites.includes(p[2]);return `<article class="card" data-id="${esc(p[2])}"><img loading="lazy" referrerpolicy="no-referrer" src="${esc(url(p[2]))}" alt="${esc(p[0])}"><div class="card-info"><div><div class="card-title">${esc(p[0])}</div><div class="card-cat">${esc(p[1])} · 4K</div></div><button class="heart ${on?"on":""}" data-id="${esc(p[2])}" aria-label="Favorit">${on?"♥":"♡"}</button></div></article>`}
function toggleFav(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("wall-favs",JSON.stringify(favorites));render()}
function openModal(id){const p=photos.find(x=>x[2]===id);if(!p)return;document.querySelector("#modalImg").src=url(id);document.querySelector("#modalImg").alt=p[0];document.querySelector("#modalCat").textContent=p[1];document.querySelector("#modalTitle").textContent=p[0];document.querySelector("#modalMeta").textContent="4K Wallpaper · kostenlos für die Demo-Galerie";document.querySelector("#favModal").onclick=()=>toggleFav(id);document.querySelector("#downloadBtn").onclick=()=>downloadImage(id,p[0]);document.querySelector("#modal").classList.add("open");document.querySelector("#modal").setAttribute("aria-hidden","false")}
function closeModal(){document.querySelector("#modal").classList.remove("open");document.querySelector("#modal").setAttribute("aria-hidden","true")}
document.querySelector("#closeModal").onclick=closeModal;document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")closeModal()};document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
async function downloadImage(id,name){
  try{const r=await fetch(url(id));const blob=await r.blob();const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+".jpg";a.click();URL.revokeObjectURL(a.href)}
  catch{window.open(url(id),"_blank","noopener,noreferrer")}
}
render();