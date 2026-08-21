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
 ["Owl","Tiere","1760696838974-23f040e35d4e"],
 ["Golden retriever","Tiere","1558788353-f76d92427f16"],
 ["Horse","Tiere","1553284965-83fd3e82fa5a"],
 ["Deer","Tiere","1484406566174-9da000fda645"],
 ["Penguin","Tiere","1739056656195-ba25ea0a7b93"],
 ["Polar bear","Tiere","1589656966895-2f33e7653819"],
 ["Koala","Tiere","1770442151353-f4e98a816ee5"],
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
 ["Red sports car","Autos","1770225671243-004c6188965a"],
 ["Road trip","Autos","1767777068793-3ec53eb104b3"],
 ["Vintage car","Autos","1503376780353-7e6692767b70"],
 ["Off-road","Autos","1519245659620-e859806a8d3b"],
 ["Racing","Autos","1493238792000-8113da705763"],
 ["Motorcycle","Autos","1558981806-ec527fa84c39"],
 ["Jeep adventure","Autos","1533473359331-0135ef1b58bf"],
 ["Electric car","Autos","1593941707882-a5bba14938c7"],
 ["Roadster","Autos","1542282088-72c9c27ed0cd"],
 ["Car detail","Autos","1754271714424-fdffc911b5f0"],
 ["Mountain drive","Autos","1729866466239-848816f3c453"],
 ["Neon car","Autos","1769265114300-ea4379c857be"],
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
 ["Cliff coast","Natur","1760210106630-244d2662fdf3"],
 ["Pine forest","Natur","1441974231531-c6227db76b6e"],
 ["Sunset field","Natur","1506744038136-46273834b3fb"],
 ["Green valley","Natur","1469474968028-56623f02e42e"],
 ["River","Natur","1722658192928-fe1bfaa609c6"],
 ["Flowers","Natur","1490750967868-88aa4486c946"],
 ["Lavender","Natur","1499002238440-d264edd596ec"],
 ["Bamboo","Natur","1528360983277-13d401cdc186"],
 ["Canyon","Natur","1470770841072-f978cf4d019e"],
 ["Water landscape","Natur","1758243488200-d0b43f504953"],
 ["Foggy mountains","Natur","1482192505345-5655af888cc4"],
 ["Starry night","Natur","1519681393784-d120267933ba"],
 ["Galaxy clouds","Space","1462331940025-496dfbfc7564"],
 ["Night sky","Space","1516339901601-2e1b62dc0c45"],
 ["Blue planet","Space","1446776811953-b23d57bd21aa"],
 ["Stars","Space","1766995596065-590702fcce47"],
 ["Nebula","Space","1451187580459-43490279c0fa"],
 ["Moon","Space","1772415912163-bd5fe16b8ff0"],
 ["Milky way","Space","1766044531659-a4798add094a"],
 ["Space station","Space","1446776877081-d282a0f896e2"],
 ["Astronaut","Space","1494022299300-899b96e49893"],
 ["Solar eclipse","Space","1712606192215-f1d0f6d4e410"],
 ["Red planet","Space","1614728263952-84ea256f9679"],
 ["Cosmos","Space","1769655102934-c3e0fc5924c3"],
 ["Deep space","Space","1771095436222-e20a8737fcd1"],
 ["Purple nebula","Space","1525215351243-2ba501f3442c"],
 ["Moonlight","Space","1532693322450-2cb5c511067d"],
 ["Galaxy","Space","1506318137071-a8e063b4bec0"],
 ["Aurora","Space","1769197446934-f3e08f877288"],
 ["Cosmic blue","Space","1778352890441-6f0aa52003e0"],
 ["Starscape","Space","1759134785730-1fa36e7d348f"],
 ["Planet horizon","Space","1770723965117-cffbc9e307a2"],
 ["Gaming setup","Gaming","1542751371-adc38448a05e"],
 ["Neon controller","Gaming","1593305841991-05c297ba4575"],
 ["RGB room","Gaming","1775410631936-7de96322df0b"],
 ["Keyboard","Gaming","1587202372775-e229f172b9d7"],
 ["PC gaming","Gaming","1603481546238-487240415921"],
 ["Arcade","Gaming","1741512612531-8aa48a93f272"],
 ["Console","Gaming","1605901309584-818e25960a8f"],
 ["Esports","Gaming","1542751110-97427bbecf20"],
 ["Headset","Gaming","1599669454699-248893623440"],
 ["Game room","Gaming","1598550476439-6847785fcea6"],
 ["RGB keyboard","Gaming","1612198188060-c7c2a3b66eae"],
 ["Controller","Gaming","1774105416309-088a6205c974"],
 ["Retro game","Gaming","1773053965530-0233fe630610"],
 ["Pixel art","Gaming","1759171052927-83f3b3a72b2b"],
 ["Streaming desk","Gaming","1611162617474-5b21e879e113"],
 ["Gaming laptop","Gaming","1593642702821-c8da6771f0c6"],
 ["Neon arcade","Gaming","1511512578047-dfb367046420"],
 ["VR gaming","Gaming","1759078634243-1d5325f49477"],
 ["Cyber setup","Gaming","1547394765-185e1e68f34e"],
 ["Game night","Gaming","1493711662062-fa541adb3fc8"],
 ["Purple waves","Abstrakt","1557683316-973673baf926"],
 ["Gradient dream","Abstrakt","1557682250-33bd709cbe85"],
 ["Color flow","Abstrakt","1557682224-5b8590cd9ec5"],
 ["Pastel shapes","Abstrakt","1549490349-8643362247b5"],
 ["Liquid color","Abstrakt","1541701494587-cb58502866ab"],
 ["Blue abstract","Abstrakt","1772048201818-846a94d2c776"],
 ["Orange gradient","Abstrakt","1760172287502-3c1cc1ccafbe"],
 ["Pink shapes","Abstrakt","1550853024-fae8cd4be47f"],
 ["Neon gradient","Abstrakt","1764258560191-d8f338c823a7"],
 ["Geometric","Abstrakt","1513364776144-60967b0f800f"],
 ["Fluid art","Abstrakt","1671159593357-ee577a598f71"],
 ["Minimal abstract","Abstrakt","1751738567808-6affa516fedc"],
 ["Violet texture","Abstrakt","1708167439095-612c6cc7bbcd"],
 ["Blue fluid","Abstrakt","1531058020387-3be344556be6"],
 ["Color spectrum","Abstrakt","1760972926243-b765348c6065"],
 ["Dark gradient","Abstrakt","1763386599808-276b60c4bc76"],
 ["Soft shapes","Abstrakt","1767473907132-9e52351d023a"],
 ["Modern art","Abstrakt","1768064144020-89a77a519dba"],
 ["Prism","Abstrakt","1766119714442-b95218a5cdfb"],
 ["Aurora abstract","Abstrakt","1439792675105-701e6a4ab6f0"]
];
const url = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=88`;
let active = "Alle", visible = 24, favorites = JSON.parse(localStorage.getItem("wall-favs") || "[]"), favOnly = false;

const categoryGrid = document.querySelector("#categoryGrid");
categoryGrid.innerHTML = categories.map(c => `<div class="category" data-cat="${c[0]}" style="background-image:url('${c[2]}')"><strong>${c[1]} ${c[0]}</strong><small>›</small></div>`).join("");
categoryGrid.onclick = e => { const el=e.target.closest(".category"); if(el){active=el.dataset.cat; favOnly=false; visible=12; render(); document.querySelector("#wallpapers").scrollIntoView({behavior:"smooth"}); } };

document.querySelector("#chips").innerHTML = ["Alle", ...categories.map(c=>c[0])].map(c=>`<button class="chip ${c==="Alle"?"active":""}" data-cat="${c}">${c}</button>`).join("");
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
function card(p,i){const on=favorites.includes(p[2]);return `<article class="card" data-id="${p[2]}"><img loading="lazy" src="${url(p[2])}" alt="${p[0]}" onerror="this.closest('.card').remove()"><div class="card-info"><div><div class="card-title">${p[0]}</div><div class="card-cat">${p[1]} · 4K</div></div><button class="heart ${on?"on":""}" data-id="${p[2]}" aria-label="Favorit">${on?"♥":"♡"}</button></div></article>`}
function toggleFav(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("wall-favs",JSON.stringify(favorites));render()}
function openModal(id){const p=photos.find(x=>x[2]===id);if(!p)return;document.querySelector("#modalImg").src=url(id);document.querySelector("#modalImg").alt=p[0];document.querySelector("#modalCat").textContent=p[1];document.querySelector("#modalTitle").textContent=p[0];document.querySelector("#modalMeta").textContent="4K Wallpaper · kostenlos für die Demo-Galerie";document.querySelector("#favModal").onclick=()=>toggleFav(id);document.querySelector("#downloadBtn").onclick=()=>downloadImage(id,p[0]);document.querySelector("#modal").classList.add("open");document.querySelector("#modal").setAttribute("aria-hidden","false")}
function closeModal(){document.querySelector("#modal").classList.remove("open");document.querySelector("#modal").setAttribute("aria-hidden","true")}
document.querySelector("#closeModal").onclick=closeModal;document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")closeModal()};document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
async function downloadImage(id,name){
  try{const r=await fetch(url(id));const blob=await r.blob();const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+".jpg";a.click();URL.revokeObjectURL(a.href)}
  catch{window.open(url(id),"_blank")}
}
render();