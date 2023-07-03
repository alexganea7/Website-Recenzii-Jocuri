///------------ poze ------------///
var detaliiPozeIndie=[];
const containerIndie = document.querySelector(".container-indie");
var detaliiPozePopulare=[];
const containerPopulare = document.querySelector(".container-populare");
var detaliiSlideTrack=[];
const slideTrack = document.querySelector(".slide-track");
var img;

img = {"src":"../public/resurse/imagini/DMC5.jpg", "titlu":"Devil May Cry 5", "nota":"8.8"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/GOF5.jpg", "titlu":"God of War: Ragnarök", "nota":"8.7"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/EldenRing.jpg", "titlu":"Elden Ring", "nota":"9.6"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/NierAutomata.jpg", "titlu":"Nier: Automata", "nota":"8.7"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/acodyssey.png", "titlu":"AC: Odyssey", "nota":"7.6"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/rdd2.jpg", "titlu":"Red Dead Redemption", "nota":"8.8"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/witcher3.jpg", "titlu":"Witcher 3", "nota":"8.6"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/mg5.jpg", "titlu":"Metal Gear 5", "nota":"8.3"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/GOF4.jpg", "titlu":"God of War", "nota":"9.0"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/bloodborne.jpg", "titlu":"BloodBorne", "nota":"8.4"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/DMC3.jpg", "titlu":"Devil May Cry 3", "nota":"8.1"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/bayoneta2.png", "titlu":"Bayoneta 2", "nota":"8.2"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/lastofus.jpg", "titlu":"Last of Us", "nota":"8.9"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/DS3.jpg", "titlu":"Dark Souls 3", "nota":"9.0"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/ori.jpg", "titlu":"Ori and he Blind Forest", "nota":"9.3"}; detaliiSlideTrack.push(img);
img = {"src":"../public/resurse/imagini/cod.jpg", "titlu":"Call of Duty", "nota":"9.6"}; detaliiSlideTrack.push(img);


img = {"src":"../public/resurse/imagini/hades.jpg", "titlu":"Hades", "nota":"9.3"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/deadcells.jpg", "titlu":"Dead cells", "nota":"8.9"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/isaac.jpg", "titlu":"The Binding of Isaac", "nota":"8.6"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/hollowknight.jpg", "titlu":"Hollow Knight", "nota":"8.7"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/dontstarve.jpg", "titlu":"Don't Starve", "nota":"7.9"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/babaisyou.jpg", "titlu":"Baba Is You", "nota":"8.7"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/braid.jpg", "titlu":"Braid", "nota":"9.0"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/celeste.jpg", "titlu":"Celeste", "nota":"9.2"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/furi.jpg", "titlu":"Furi", "nota":"7.6"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/gris.jpg", "titlu":"Gris", "nota":"8.4"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/helltaker.jpg", "titlu":"Helltaker", "nota":"8.6"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/hotlinemiami.jpg", "titlu":"Hotline Miami", "nota":"8.5"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/inside.jpg", "titlu":"Inside", "nota":"8.7"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/noita.jpg", "titlu":"Noita", "nota":"7.6"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/omori.jpg", "titlu":"Omori", "nota":"8.7"}; detaliiPozeIndie.push(img);
img = {"src":"../public/resurse/imagini/supermeatboy.jpg", "titlu":"Super Meat Boy", "nota":"8.7"}; detaliiPozeIndie.push(img);

img = {"src":"../public/resurse/imagini/EldenRing.jpg", "titlu":"Elden Ring", "nota":"9.6"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/lol.jpg", "titlu":"League of legends", "nota":"7.8"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/tekken8.jpg", "titlu":"Tekken 8", "nota":"8.9"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/valorant.jpg", "titlu":"Valorant", "nota":"8.0"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/cod.jpg", "titlu":"Call of Duty", "nota":"7.6"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/deadcells.jpg", "titlu":"Dead Cells", "nota":"8.9"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/DMC5.jpg", "titlu":"Devil May Cry 5", "nota":"8.8"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/GOF5.jpg", "titlu":"God of War Ragnarök", "nota":"9.4"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/hollowknight.jpg", "titlu":"Hollow Knight", "nota":"8.7"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/lastofus.jpg", "titlu":"Last of Us", "nota":"8.4"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/ori.jpg", "titlu":"Ori and he Blind Forest", "nota":"9.3"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/portal2.jpg", "titlu":"Portal 2", "nota":"9.5"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/rdd2.jpg", "titlu":"Red Dead Redemption 2", "nota":"9.7"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/diablo3.jpg", "titlu":"Diablo III", "nota":"8.8"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/zelda.jpg", "titlu":"Zelda", "nota":"9.7"}; detaliiPozePopulare.push(img);
img = {"src":"../public/resurse/imagini/gow.jpg", "titlu":"God of War", "nota":"9.4"}; detaliiPozePopulare.push(img);


for(let ob of detaliiPozeIndie){
    let sursa=ob["src"];
    let titlu=ob["titlu"];
    let nota=ob["nota"];
    let culoareNota=culoareSpan(nota);
    const jocIndie = document.createElement("div");
    jocIndie.className="slide";
    jocIndie.innerHTML= `
        <img src="${sursa}" draggable="false" alt="${titlu}">
        <div class="slide-info">
            <h3>${titlu}</h3>
            <span class="${culoareNota}">${nota}</span>
        </div>
    `;
    jocIndie.onclick=function(){window.location.href = "joc?joc=" + titlu;};
    containerIndie.appendChild(jocIndie);
}

for(let ob of detaliiPozePopulare){
    let sursa=ob["src"];
    let titlu=ob["titlu"];
    let nota=ob["nota"];
    let culoareNota=culoareSpan(nota);
    const jocPopulare = document.createElement("div");
    jocPopulare.className="slide";
    jocPopulare.innerHTML= `
        <img src="${sursa}" draggable="false" alt="${titlu}">
        <div class="slide-info">
            <h3>${titlu}</h3>
            <span class="${culoareNota}">${nota}</span>
        </div>
    `;

    jocPopulare.onclick=function(){window.location.href = "joc?joc=" + titlu;};
    containerPopulare.appendChild(jocPopulare);
}

for(let ob of detaliiSlideTrack){
    let sursa=ob["src"];
    let titlu=ob["titlu"];
    let nota=ob["nota"];
    let culoareNota=culoareSpan(nota);
    const jocSlider = document.createElement("div");
    jocSlider.className="slide";
    jocSlider.innerHTML= `
        <img src="${sursa}" draggable="false" alt="${titlu}">
        <div class="slide-info" >
            <h3>${titlu}</h3>
            <span class="${culoareNota}">${nota}</span>
        </div>
    `;
    
    jocSlider.onclick=function(){window.location.href = "joc?joc=" + titlu;};
    slideTrack.appendChild(jocSlider);
}

function culoareSpan(nota){
    if(nota>=9){
        return 'green';
    }
    else if(nota<=7.5)
        return 'red';
    else
        return 'yellow';
}

///------------ show-more populare/indie ------------///

var butonPopulare = document.querySelector('#show-more-populare');
var currentItemPopulare = 4;
butonPopulare.onclick = loadMorePopulare;


function loadMorePopulare(){
    let pozePopulare = document.querySelectorAll('.populare .container-populare .slide');
    if(currentItemPopulare>=pozePopulare.length-4)
        butonPopulare.style.display="none";
    for(var i = currentItemPopulare; i <= currentItemPopulare+3; i++){
        pozePopulare[i].style.display = 'inline-block';
    }
    currentItemPopulare=currentItemPopulare+4;
}

var butonIndie = document.querySelector('#show-more-indie');
var currentItemIndie = 4;
butonIndie.onclick = loadMoreIndie;


function loadMoreIndie() {
    let pozeIndie = document.querySelectorAll('.indie .container-indie .slide');
    if (currentItemIndie >= pozeIndie.length - 4)
        butonIndie.style.display = "none";
    for (var i = currentItemIndie; i <= currentItemIndie + 3; i++) {
        pozeIndie[i].style.display = 'inline-block';
    }
    currentItemIndie = currentItemIndie + 4;
}


/// --------------refresh--------------- ///

const rel = document.getElementById("logo-div");
rel.onclick = refresh;

function refresh(){
    window.location.href = "index.html";
}

const searchSvg = document.querySelector(".search-svg");
searchSvg.onclick=refresh;


/// --------------nav--------------- ///

const butonMeniu = document.getElementById("buton-meniu");
const butonX = document.getElementById("buton-x");

butonMeniu.onclick = openNav;
butonX.onclick = closeNav;


function openNav(){
    document.querySelector("nav > ul.meniu").style.width = "300px";
}

function closeNav() {
    document.querySelector("nav > ul.meniu").style.width = "0";
  }


/// -------------redirect---------------- ///
var meniu = document.querySelectorAll(".submeniu>li");
var categorii = document.querySelectorAll(".categorie");

for(let m of meniu){
    m.addEventListener("click",redirect);
}

for(let c of categorii){
    c.addEventListener("click",redirect);
}

function redirect(){
    window.location.href = "categorii.html?categorie=" + this.textContent;
}

