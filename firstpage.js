let k=document.getElementById("lgin");
console.log(k);
k.addEventListener('click',()=>{
    
window.open("login.html");//in next new tab
// var url="login.html";
//  window.location="login.html";
// win.focus();
});

let a=Math.floor(Math.random()*10);
let b=["It is often the small steps, not the giant leaps, that bring about the most lasting change.","Education is the most powerful weapon which you can use to change the world.","There is always light. If only we're brave enough to see it. If only we're brave enough to be it.","If you want to lift yourself up, lift up someone else.","I have learned not to allow rejection to move me.","I scorched the earth with my talent and I let my light shine.","You’re braver than you believe, stronger than you seem, and smarter than you think.","It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.","You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.","Attitude is the 'little' thing that makes a big difference."];
document.getElementById("para").innerHTML=b[a];

// console.log(document.querySelector("#ab"));
setTimeout(async function(){
    document.querySelector("#ab").classList.toggle("change")
},200);
setTimeout(async function(){
    document.querySelector("#bc").classList.toggle("change")
},400);
setTimeout(async function(){
    document.querySelector("#cd").classList.toggle("change")
},600);
setTimeout(async function(){
    document.querySelector("#de").classList.toggle("change")
},1600);
setTimeout(async function(){
    document.querySelector("#ef").classList.toggle("change")
},800);
setTimeout(async function(){
    document.querySelector("#fg").classList.toggle("change")
},1400);
setTimeout(async function(){
    document.querySelector("#gh").classList.toggle("change")
},1200);
setTimeout(async function(){
    document.querySelector("#hi").classList.toggle("change")
},1000);


