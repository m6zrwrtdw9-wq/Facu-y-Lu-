const opening = document.getElementById("opening");
const page = document.getElementById("page");
const openGift = document.getElementById("openGift");
const openGift2 = document.getElementById("openGift2");
const letter = document.getElementById("letter");
const vouchers = document.getElementById("vouchers");
const toast = document.getElementById("toast");
const relationshipStart = new Date("2025-11-02T00:00:00"); // CAMBIAR por su fecha real

function openPage(){
  opening.animate([
    {opacity:1,transform:"scale(1)"},
    {opacity:0,transform:"scale(1.04)"}
  ],{duration:650,easing:"ease-in",fill:"forwards"}).onfinish=()=>{
    opening.classList.add("hidden");
    page.classList.remove("hidden");
    window.scrollTo(0,0);
  };
}
openGift.onclick=openPage;
openGift2.onclick=openPage;

document.getElementById("letterButton").onclick=()=>{
  letter.classList.remove("hidden");
  letter.scrollIntoView({behavior:"smooth",block:"center"});
};
document.getElementById("closeLetter").onclick=()=>letter.classList.add("hidden");

const voucherNames=[
  "Vale por un beso (cualquier cantidad)",
  "Vale por dormir abrazados",
  "Vale por una tarde de mimos",
  "Vale por una cita sin motivo",
  "Vale por una salida sorpresa",
  "Vale por una peli juntos",
  "Vale por un desayuno",
  "Vale por cocinar juntos",
  "Vale por un abrazo",
  "Vale por elegir la cena",
  "Vale por un día especial",
  "Vale por hacer lo que quieras"
];
voucherNames.forEach((name,i)=>{
  const key="voucher-"+i;
  const used=localStorage.getItem(key)==="1";
  const el=document.createElement("div");
  el.className="voucher";
  el.innerHTML=`<div class="voucher-icon">♥</div><div class="voucher-text"><small>VALE</small><span>${name}</span></div><button class="redeem ${used?"used":""}">${used?"USADO":"CANJEAR"}</button>`;
  el.querySelector("button").onclick=()=>{
    if(localStorage.getItem(key)==="1") return;
    localStorage.setItem(key,"1");
    el.querySelector("button").textContent="USADO";
    el.querySelector("button").classList.add("used");
    showToast("Vale canjeado ❤️");
  };
  vouchers.appendChild(el);
});

function showToast(text){
  toast.textContent=text;toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
}

function updateRelationship(){
  const now=new Date();
  let ms=Math.max(0,now-relationshipStart);
  const days=Math.floor(ms/86400000);
  const months=Math.floor(days/30.4375);
  const remainingDays=Math.floor(days-months*30.4375);
  const h=Math.floor(ms/3600000)%24;
  const m=Math.floor(ms/60000)%60;
  const s=Math.floor(ms/1000)%60;
  const text=`${months} meses y ${remainingDays} días`;
  document.getElementById("relationship").textContent=text;
  document.getElementById("relationship2").textContent=text;
  document.getElementById("relationshipTime").textContent=`${h}h ${m}m ${s}s`;
}
setInterval(updateRelationship,1000); updateRelationship();

let seconds=12*60+17;
setInterval(()=>{
  seconds=Math.max(0,seconds-1);
  document.getElementById("countdown").textContent=`${String(Math.floor(seconds/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;
},1000);

document.getElementById("finalButton").onclick=()=>{
  for(let i=0;i<35;i++){
    const x=(Math.random()-.5)*window.innerWidth;
    const y=-(Math.random()*window.innerHeight*.9+80);
    const heart=document.createElement("i");
    heart.textContent=Math.random()>.25?"♥":"✦";
    heart.style.left=(window.innerWidth/2)+"px";
    heart.style.setProperty("--x",x+"px");
    heart.style.setProperty("--y",y+"px");
    document.getElementById("confetti").appendChild(heart);
    setTimeout(()=>heart.remove(),1700);
  }
  showToast("Para siempre, Lu ❤️");
};

// Música: se inicia después de una acción explícita del usuario.
const musicButton = document.getElementById("musicButton");
const musicFrame = document.getElementById("musicFrame");
if (musicButton) {
  musicButton.onclick = () => {
    musicFrame.classList.remove("hidden");
    musicButton.textContent = "♪ NUESTRA CANCIÓN";
    musicFrame.scrollIntoView({behavior:"smooth",block:"center"});
  };
}

// Mapa real de nuestros lugares en Bariloche.
// Las coordenadas conocidas se fijan para que los pines aparezcan inmediatamente.
// Para Otto Goedecke 76 y Suipacha 3759 se intenta geocodificación pública de OpenStreetMap.
const lovePlaces = [
  {
    n:1, title:"Cervecería Ogham Bariloche", address:"San Martín 490",
    coords:[-41.13360,-71.31595],
    text:"Donde nos conocimos. Un lugar que para cualquiera puede ser un bar, pero para nosotros es el punto exacto donde empezó todo."
  },
  {
    n:2, title:"Galería del Sol", address:"Mitre 340",
    coords:[-41.13398,-71.30490],
    text:"Nuestro punto de encuentro. El lugar que tantas veces nos sirvió de referencia para encontrarnos y empezar otro momento juntos."
  },
  {
    n:3, title:"Mostaza", address:"Mitre 31",
    coords:[-41.13380,-71.30740],
    text:"Mostaza. Una palabra que quedó con significado propio para nosotros y que inevitablemente trae recuerdos."
  },
  {
    n:4, title:"Nuestra primera cita", address:"Av. 12 de Octubre 114–198",
    coords:[-41.132242,-71.306948],
    text:"Nuestra primera cita. El comienzo de esos nervios lindos y de una historia que todavía seguimos escribiendo.",
    external:"https://maps.apple.com/place?coordinate=-41.132242,-71.306948&name=Avenida%2012%20de%20Octubre%20114%E2%80%93198"
  },
  {
    n:5, title:"Otto Goedecke 76", address:"Otto Goedecke 76",
    text:"Nuestro lugar actual. El lugar que hoy forma parte de nuestra rutina, nuestros días y de esta etapa que estamos construyendo juntos."
  },
  {
    n:6, title:"Suipacha 3759", address:"Suipacha 3759",
    text:"La propuesta y el inicio formal de lo nuestro. Un lugar que quedó marcado para siempre porque ahí nuestra historia tomó otro nombre."
  },
  {
    n:7, title:"Aeropuerto Bariloche", address:"Ruta Provincial 80",
    coords:[-41.150319,-71.159308],
    text:"Donde más me cuesta despedirme, pero también donde más disfruto volver a verte. Un lugar de despedidas que siempre termina significando reencuentros."
  }
];

function mapIcon(){
  return L.divIcon({
    className:"",
    html:'<div class="map-heart"><span>♥</span></div>',
    iconSize:[34,34], iconAnchor:[17,34], popupAnchor:[0,-30]
  });
}

async function geocodePlace(place){
  if(place.coords) return place.coords;
  try{
    const q=encodeURIComponent(place.address+", San Carlos de Bariloche, Río Negro, Argentina");
    const res=await fetch("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q="+q,{
      headers:{"Accept":"application/json"}
    });
    const data=await res.json();
    if(data[0]) return [Number(data[0].lat),Number(data[0].lon)];
  }catch(e){}
  // Fallbacks close to the city center if public geocoding is unavailable.
  if(place.n===5) return [-41.1362,-71.3008];
  if(place.n===6) return [-41.1460,-71.3180];
  return [-41.134,-71.307];
}

async function initLoveMap(){
  const mapEl=document.getElementById("loveMap");
  if(!mapEl || typeof L==="undefined") return;

  const map=L.map(mapEl,{zoomControl:true,scrollWheelZoom:false}).setView([-41.137,-71.302],13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(map);

  const bounds=[];
  for(const place of lovePlaces){
    const coords=await geocodePlace(place);
    place.coords=coords;
    bounds.push(coords);
    const marker=L.marker(coords,{icon:mapIcon()}).addTo(map);
    const external=place.external ? `<br><a href="${place.external}" target="_blank" rel="noopener">Abrir en Apple Maps →</a>` : "";
    marker.bindPopup(`<strong>${place.n}. ${place.title}</strong><br><span>${place.address}</span>${external}`);
    marker.on("click",()=>{
      const story=document.getElementById("mapStory");
      story.innerHTML=`<div class="eyebrow">LUGAR ${place.n}</div><h3>${place.title}</h3><p>${place.text}</p>`;
      story.animate([{transform:"scale(.98)",opacity:.6},{transform:"scale(1)",opacity:1}],{duration:250});
    });
  }
  if(bounds.length) map.fitBounds(bounds,{padding:[25,25],maxZoom:14});
}
initLoveMap();
