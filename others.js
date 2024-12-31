const all = document.querySelector("*");
const siteDate = new Date()
let siteHour = siteDate.getHours();
// site mode setting
    if(siteHour >= 19 ){
        all.classList.add("dark");
    }
    else if(siteHour < 7){
        all.classList.add("dark");
    }
    else{
        all.classList.remove("dark");
    }
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-small");
const moder = document.querySelector(".mode");
let webMode = true;
function mode(){
    if(webMode){
        moder.innerHTML = "light";
        webMode = false;
    }else{
        moder.innerHTML = "dark";
        webMode = true;
    }
    const all = document.querySelector("*");
    all.classList.toggle("dark");
}
let isNotopen = true;
menuBtn.onclick=()=>{
    if(isNotopen){
        menu.style.width ="50%";
        menuBtn.innerHTML ="&times;";
        menuBtn.style.fontWeight = "100";
        menuBtn.style.fontSize ="22px";
        isNotopen = false;
    }else{
        menu.style.width ="0";
        menuBtn.style.fontWeight = "bold";
        menuBtn.style.fontSize ="17px";
        menuBtn.innerHTML = "&#9776;";
        isNotopen = true;
    }
    }
    function goToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
const devName = document.querySelector(".dev-name");
devName.innerHTML = "BAM-tech";