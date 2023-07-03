window.onload=function(){
    var url = new URLSearchParams(window.location.search);
    var joc = url.get('joc');

    document.getElementById("reviews").style.display="none";
    document.getElementById("titluId").value=joc;
    document.getElementById("trimiteReview").onclick=function(){
        if(document.querySelector("#reviewId").value!="" && document.querySelector("#review").value!="")
           location.reload();
    };
    var indice = -1;
    var slide = document.querySelector('.slide');
    fetch("jocuri.json")
        .then(response => response.json())
        .then(json => {
                    for(let i = 0; i<=json.length; i++)
                    {
                        if(joc==json[i].titlu){
                            indice=i; 
                            break;
                        }
                    }
                    slide.querySelector('img').src=json[indice].src;
                    slide.querySelector('.slide-info>h3').innerHTML=json[indice].titlu;
                    slide.querySelector('.slide-info>h3').innerHTML=json[indice].titlu;
                    slide.querySelector('span').innerHTML=json[indice].nota;
                    slide.querySelector('span').classList.add(culoareSpan(json[indice].nota));
                    document.querySelector('.descriere>h2:nth-child(1)').innerHTML=json[indice].titlu;
                    document.querySelector('.descriere>h2:nth-child(2)').innerHTML=json[indice].descriere;

                    });         


    fetch("jocuri.json")
        .then(response => response.json())
        .then(json => {
            var butonRandom = document.querySelector(".buton-random");
            butonRandom.onclick= function(){
                var numar = Math.floor(Math.random()*json.length);
                window.location.href = "joc?joc=" + json[numar].titlu;           
            }
        });
    
    
        var inputCautare = document.getElementById("search");
        inputCautare.addEventListener("keydown",function(event){
            event.stopPropagation();
            var indice = -1;
            if(event.key==='Enter'){
                var deCautat=inputCautare.value;
                fetch("jocuri.json")
                .then(response => response.json())
                .then(json => {
                    for(let i = 0; i<json.length; i++)
                    {
                        if(deCautat==json[i].titlu){
                            indice=i; 
                            break;
                        }
                    }
                    if(indice!=-1)
                        {
                            window.location.href = "joc?joc=" + json[indice].titlu;  
                        }
                    else{
                        alert("Jocul nu exista");
                    }
                });
            }
        });
    
    

    const rel = document.getElementById("logo-div");
    rel.onclick = refresh;

    function refresh(){
        window.location.href = "index.html";
    }

    const searchSvg = document.querySelector(".search-svg");
    searchSvg.onclick=refresh;


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




    var meniu = document.querySelectorAll(".submeniu>li");
   
    for(let m of meniu){
        m.addEventListener("click",redirect);
    }

    function redirect(){
        window.location.href = "categorii.html?categorie=" + this.textContent;
    }
    //-----------------------LIGHTMODE--------------------------//
    if(localStorage.getItem('lightMode'))
        var lightMode = localStorage.getItem('lightMode');

    const butonLightMode = document.querySelector('.buton-lightmode');
    const enable = function(){
        document.body.classList.add("lightmode");
        localStorage.setItem('lightMode', 'enabled');
        document.querySelector("#user").style.filter = "invert(0%)";
        document.querySelector(".buton-lightmode").style.filter = "invert(0%)";
        document.querySelector(".buton-random").style.filter = "invert(0%)";
        document.querySelector("#logo").style.filter = "brightness(0)";
        document.querySelector(".search-svg").style.filter = "invert(0%)";
    }
    const disable = function(){
        document.body.classList.remove("lightmode");
        document.querySelector("#user").style.filter = "invert(100%)";
        document.querySelector(".buton-lightmode").style.filter = "invert(100%)";
        document.querySelector(".buton-random").style.filter = "invert(100%)";
        document.querySelector("#logo").style.filter = "brightness(5)";
        document.querySelector(".search-svg").style.filter = "invert(100%)";
        localStorage.setItem('lightMode', 'disabled');
    }
    if (lightMode == 'enabled')
        enable();
    
    butonLightMode.addEventListener('click', function(){
        lightMode=localStorage.getItem("lightMode");
        if (lightMode !== 'enabled')
            enable();
        else if(lightMode ==='enabled')
            disable();
    })

    function culoareSpan(nota){
        if(nota>=9){
            return 'green';
        }
        else if(nota<=7.5)
            return 'red';
        else
            return 'yellow';
    }
    user = document.getElementById('user');
        user.onclick=function(){window.location.href = "login"};

    
}

