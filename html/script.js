window.onload=function(){
    //------------- LIGHT MODE ------------------ //
    if(localStorage.getItem('lightMode'))
        var lightMode = localStorage.getItem('lightMode');

    const butonLightMode = document.querySelector('.buton-lightmode');
    const enable = function(){
        document.body.classList.add("lightmode");
        document.querySelector("#user").style.filter = "invert(0%)";
        document.querySelector(".buton-lightmode").style.filter = "invert(0%)";
        document.querySelector(".buton-random").style.filter = "invert(0%)";
        document.querySelector("#logo").style.filter = "brightness(0)";
        document.querySelector(".search-svg").style.filter = "invert(0%)";
        localStorage.setItem('lightMode', 'enabled');
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
        enable() ;
    
    butonLightMode.addEventListener('click', function(){
        lightMode=localStorage.getItem("lightMode");
        if (lightMode !== 'enabled')
            enable();
        else
            disable();
    })
    var butonRandom = document.querySelector(".buton-random");

    //---------------JOC RANDOM ----------------//
    fetch("jocuri.json")
        .then(response => response.json())
        .then(json => {
            var butonRandom = document.querySelector(".buton-random");
            butonRandom.onclick= function(){
                var numar = Math.floor(Math.random()*json.length);
                window.location.href = "joc?joc=" + json[numar].titlu;           
            }
        });         

    user = document.getElementById('user');
        user.onclick=function(){window.location.href = "login"};

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

}