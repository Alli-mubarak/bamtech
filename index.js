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
const playingS = document.getElementById("playing-sound");
const correctS = document.getElementById("correct-sound");
const overS = document.getElementById("over-sound");
const setting = document.getElementById("settings");
const setter = document.getElementById("speed-setter");
const speedDisplay = document.querySelector(".speed");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-small");
const displayer = document.querySelector(".displayer");
const inputter = document.getElementById("input");
const score = document.querySelector("#score");
const control = document.getElementById("control");
const endScore = document.getElementById('end-score');
const startGame = document.querySelector(".start-game");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".game-over");
const starter =  document.getElementById("starter");
const restarter =  document.getElementById("restarter");
let isShowing = true;
function set(){
if(isShowing){
    setting.style.display = "none";
    isShowing = false;
}else{
    setting.style.display = "block";
    isShowing = true;
}
}
let speed = setter.value * 100 ;
speedDisplay.innerHTML = setter.value/10;
setter.oninput = () => {
    speed = setter.value * 100;
    speedDisplay.innerHTML = setter.value/10;
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

    function display(){
        var text = "" ;
function generateText() {
    var length= 1;
    var charset=  ["back-testing","girlhood","loopholes","ranger","safety","do-it-right","cook like a chef","weldone player!","bookworm","food for thought","torn shirt","judge me not",
    "enjoyable","sink or sip","your name identifies you","i must succeed","baked bread","song or music?","stay calm","nailed it!","open and free","no pranks","queen is beautiful","squat daily","blood run in veins",
    "file is uploading...","rain is falling","socks soaked","zealousness","tool or equipment?","keys open doors","stir well","water drainage","straws sip faster","cool game","day's bright","crave for pizza","don't go astray",
    "whales are buying","sway or swing","xerox means what?","oxen in zoo","maize flour","lemonade or lemon juice","trojan horse","queue for fuel","rhymes in music","joule measures what?"
    ]
    
    for (var i = 0 ; i < length; i ++){
        var charIndex = Math.floor(Math.random() * charset.length);
        text += charset[charIndex];
    }    
}
    generateText();
    const textBox = document.createElement("h4");
    const textToUse = document.createTextNode(text);

    displayer.appendChild(textBox);
    textBox.appendChild(textToUse);
    textBox.setAttribute("onclick","remove(this)");
}
 function start(mybtn){
    playingS.play()
    inputter.value = '';
    restarter.removeAttribute("disabled","true");
    setting.style.display = "none";
    mybtn.setAttribute("disabled","true");
    startGame.style.display = "none";
    game.style.display = "block";
    
if(displayer.children.length  < 11){
    let isRunning;
    let intervalID = setInterval(()=>{
        display();
        isRunning = true;
    if(displayer.children.length === 11){
        clearInterval(intervalID);
        endScore.innerHTML = score.innerHTML;
        game.style.display = "none";
        gameOver.style.display = "block";
        overS.play();
        playingS.pause();
        playingS.currentTime = 0; //resets the audio to zero
         }
    control.onclick =()=>{
        if(isRunning){
            clearInterval(intervalID);
            console.log('paused');
            control.innerHTML = "play";
            isRunning = false;
        }else{
            control.innerHTML = "pause";
            intervalID = setInterval(()=>{
                display();
                if(displayer.children.length === 11){
                    clearInterval(intervalID);
                    control.style.display = "none";
                    endScore.innerHTML = score.innerHTML;
                    overS.play();
                    game.style.display = "none";
                    playingS.pause();
                    playingS.currentTime = 0; //resets the audio to zero
                    gameOver.style.display = "block";
                     }
            },speed);
            console.log('played');
            isRunning = true;
        }
    }
},speed);
inputter.oninput = () =>{
    if(displayer.children.length >0 && inputter.value === displayer.children[0].innerHTML){
         displayer.children[0].click();
        inputter.value = "";
    }
    if(displayer.children.length > 1 && inputter.value === displayer.children[1].innerHTML){
        displayer.children[1].click();
       inputter.value = "";
   }
   if(displayer.children.length > 2 && inputter.value === displayer.children[2].innerHTML){
    displayer.children[2].click();
   inputter.value = "";
}
if(displayer.children.length > 3 && inputter.value === displayer.children[3].innerHTML){
    displayer.children[3].click();
   inputter.value = "";
}
if(displayer.children.length > 4 && inputter.value === displayer.children[4].innerHTML){
    displayer.children[4].click();
   inputter.value = "";
}
if(displayer.children.length > 5 && inputter.value === displayer.children[5].innerHTML){
    displayer.children[5].click();
   inputter.value = "";
}
if(displayer.children.length > 6 && inputter.value === displayer.children[6].innerHTML){
    displayer.children[6].click();
   inputter.value = "";
}
if(displayer.children.length > 7 && inputter.value === displayer.children[7].innerHTML){
    displayer.children[7].click();
   inputter.value = "";
}
if(displayer.children.length > 8 && inputter.value === displayer.children[8].innerHTML){
    displayer.children[8].click();
   inputter.value = "";
}
if(displayer.children.length > 9 && inputter.value === displayer.children[9].innerHTML){
    displayer.children[9].click();
   inputter.value = "";
}
if(displayer.children.length > 10 && inputter.value === displayer.children[10].innerHTML){
    displayer.children[10].click();
   inputter.value = "";
}
}
}
 }
function remove(me){
    if(inputter.value === me.innerHTML){
    myParent = me.parentElement;
    myParent.removeChild(me);
    score.innerHTML++;
    correctS.play()
    }
}
let isSoundOn = true;
const sInner = document.querySelector(".inner");
function sound(me){
    
    if(isSoundOn){
        playingS.muted = true;
        correctS.muted = true;
        overS.muted = true;
        isSoundOn = false;
        console.log("sounds off!");
        sInner.style.left = "0";
    }
    else{
        playingS.muted = false;
        correctS.muted = false;
        overS.muted = false;
        isSoundOn = true;
        console.log("sounds on!");
        sInner.style.left = "50%";
    }
    
}
function restart(me){
    me.setAttribute("disabled","true");
    gameOver.style.display = "none";
    startGame.style.display ="block";
    displayer.replaceChildren('');
    starter.removeAttribute("disabled","true");
    score.innerHTML = 0;
}
function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const devName = document.querySelector(".dev-name");
devName.innerHTML = "BAM-tech";
