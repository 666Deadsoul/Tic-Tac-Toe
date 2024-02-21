const boxes = document.querySelectorAll('.box');

const reset_btn = document.querySelector(".rst_btn");
const circle= 'O'; //player1
const cross ='X'; //player2

let current =circle; //player1
let ClickedBox = [];  //array for storing the clicked box id

document.addEventListener('DOMContentLoaded', function () { //highlight added to p1 as soon as it loads
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    p1.classList.add("Highlight1");
});


const Box_click=(box)=>{
    const p1 =document.getElementById("p1");
    const p2 = document.getElementById("p2");
    var disp_sts = document.querySelector(".sts");
    const boxId= box.id;  //For storing clicked Box id
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
        ClickedBox[boxId]=current;
        box.innerHTML= current; //for displaying O or X
        
        console.log(`${boxId}: ${ClickedBox[boxId]}`);

    //     // ClickedBox[boxId]=current;
    //     ClickedBox.push(current);
    //     if(ClickedBox.length == 9){
    //         p2.classList.remove("Highlight2");
    //         Disp_Status();
    //     }
    //     for(let i=0;i<ClickedBox.length;i++){
    //         console.log(`[${i}]:${ClickedBox[i]}`);
    //     }
    //     Winner();

        if(Winner()){
            if(current== 'O'){
                disp_sts.innerHTML=`Player 1 is the winner`;
            }
            else{
                disp_sts.innerHTML=`Player 2 is the winner`;
            }
        }
       
        if(Draw()){
            disp_sts.innerHTML="Draw";
        }
    }
    
}   

function Winner(){
    if(ClickedBox[0]=== current){ //first box
        if(ClickedBox[1]===current && ClickedBox[2]===current){ //top
            return true;
        }
        if(ClickedBox[4]===current && ClickedBox[8]===current){ //diagonal
            return true;
        }
        if(ClickedBox[3]===current && ClickedBox[6]===current){ //left
            return true;
        }
    }
    if(ClickedBox[4]=== current){  //mid box
        if(ClickedBox[1]===current && ClickedBox[7]===current){ //mid
            return true;
        }
        if(ClickedBox[2]===current && ClickedBox[6]===current){ //diagonal
            return true;
        }
        if(ClickedBox[3]===current && ClickedBox[5]===current){ //midd
            return true;
        }
    }
    if(ClickedBox[8]=== current){  //last
        if(ClickedBox[5]===current && ClickedBox[2]===current){ //right
            return true;
        }
        if(ClickedBox[6]===current && ClickedBox[7]===current){ //bottom
            return true;
        }
    }
}
function Draw(){
    let count = 0;  //to count filledup space
    ClickedBox.forEach((item, i)=>{
        if(ClickedBox[i] !== null){
            count++;
        }
    });
    if(count === 9){
        return true;
    }
}

function reset(){
    const boxes = document.querySelectorAll('.box');
    var disp_sts = document.querySelector(".sts");
    boxes.forEach((box)=>{
        box.innerText='';
        
    });
    ClickedBox.forEach((item, i)=>{
    ClickedBox[i]=null;
    });
    p1.classList.add("Highlight1");
    p2.classList.remove("Highlight2");
    disp_sts.innerHTML='';
}