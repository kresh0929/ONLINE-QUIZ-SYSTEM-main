let k=document.querySelectorAll("#d");
let g=document.getElementById("texta");
let count=0;

    k.addEventListener('click',()=>{
        k.style.backgroundColor="green";
        count=count+1;
        console.log(count);
        g.innerHTML=count;
    });
    let q=document.getElementById("a");

    q.addEventListener('click',()=>{
        q.style.backgroundColor="red";
    });
    let p=document.getElementById("b");

    p.addEventListener('click',()=>{
        p.style.backgroundColor="red";
    });
    let r=document.getElementById("c");

    r.addEventListener('click',()=>{
        r.style.backgroundColor="red";
    }); 





// let a=document.querySelectorAll("button");
// console.log(a);
// function Press(btnvalue){
//     if(btnvalue===1){
//         button.style.backgroundColor="green";
//     }
//     else{
//         button.style.backgroundColor="red";
//     }
// }
// a.forEach((button) => {
    

// button.addEventListener('click',(e)=>Press(e.target.value));
// });

