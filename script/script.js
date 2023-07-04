var toggle = document.querySelector(".toggle-button");
var navBar = document.querySelector(".nav-bar");
var aside = document.querySelector("aside");
var setToggle = false;

toggle.addEventListener('click' , function(){
    if(setToggle === false){
        aside.classList.add("aside-bar");
        setToggle = true;
    }else{
        aside.classList.remove("aside-bar");
        setToggle = false;
    }
    
});