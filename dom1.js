// var p1=document.createElement("p");
// var p2=document.createElement("div");
// var p3=document.createElement("span");
// var res=p3.appendChild(p2,p1);
// console.log(res);

let colorChange= (message,color) => {
    let cTag=document.querySelector(".msg-1");
    cTag.innerText=message;
    cTag.style.backgroundcolor=color;
    cTag.style.padding="10px";
    cTag.style.boxShadow="1px pink";
    cTag.style.color="orange";
}
let hello=document.querySelector(".hello");
hello.addEventListener("click",function(){ 
    var res=prompt("enter data");
    var span=document.createElement("span");
    span.innerHTML=res;
    document.body.append(span);
});
let hello1=document.querySelector(".hello1");
hello1.addEventListener("mouseover",function(){
    colorChange("yah how are you",'color:green');

});
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}