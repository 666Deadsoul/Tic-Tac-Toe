const boxes = document.querySelectorAll('.box');

const reset_btn = document.querySelector(".rst_btn");
const circle= "O";
const cross ="X";
let current =circle;
let ClickedBox = [];

document.addEventListener('DOMContentLoaded', function () {
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    p1.classList.add("Highlight1");
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', Box_click(box));
});

const Box_click=(box)=>{
    const p1 =document.getElementById("p1");
    const p2 = document.getElementById("p2");
    if(!box.innerHTML){
        if(current == circle && p2.classList.contains("Highlight2")){
            // p2.style.color ="green";
            p1.classList.add("Highlight1");
            p2.classList.remove("Highlight2");
            current= cross;
        }else{
            p2.classList.add("Highlight2");
            p1.classList.remove("Highlight1");
            current=circle;
        }
        box.innerHTML= current;
        const boxId= box.id;
        ClickedBox.push(boxId);
        if(ClickedBox.length == 9){
            p2.classList.remove("Highlight2");
            Disp_Status();
        }
        for(let i=0;i<ClickedBox.length;i++){
            console.log(ClickedBox[i]);
        }
    }
    
}

function Disp_Status(){
    var disp_sts = document.querySelector(".sts");
    //    disp_sts.innerHTML="hi";

}

function reset(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box)=>{
        box.innerText='';
        
    });
    ClickedBox =[];
}

