let boxes = document.querySelectorAll(".box");
let reset= document.querySelector(".restb");
let winer =document.querySelector("h2");
// console.log(reset);
let trun0=true;
const restbn=()=>{
    trun0=true
    for (let i of boxes) {
        i.disabled=false;
        i.innerText="";
    }
    winer.classList.replace("win","hide")
}
let winningpatten=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (trun0==true){
            trun0=false;
            box.style.color="red";
            box.innerText="X";
            
        }else{
            box.innerText="O";
            box.style.color="pink";
            trun0=true;
        }
        box.disabled=true;
        // box.disabled=true;
        checkwinner()
    })

});
const wiNner = (a) => {
    winer.classList.replace("hide","win")
    winer.innerText=`Congratulations, Winner is ${a}`
    for(let i of boxes) {
        i.disabled=true;
    }
}
const checkwinner=()=> {
    for(let para of winningpatten){
        let a=boxes[para[0]].innerText;
        let b=boxes[para[1]].innerText;
        let c=boxes[para[2]].innerText;
        if( a!="" && b!="" && c!=""){
            if(a===b && b===c){
                console.log("winner",a);
                wiNner(a)
            }
        }
    }
}
reset.addEventListener("click",restbn)
