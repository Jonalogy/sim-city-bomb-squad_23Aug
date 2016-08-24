// alert("Javascript Activated!");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

document.getElementById("0").addEventListener('click',cutBlue);
document.getElementById("1").addEventListener('click',cutGreen);
document.getElementById("2").addEventListener('click',cutRed);
document.getElementById("3").addEventListener('click',cutWhite);
document.getElementById("4").addEventListener('click',cutYellow);


var wireState = [1,1,1,1,1]; //Tracks which wires are cut
var trigger = [];//Tracks which are the trigger wires
// var idArr = [];//Tracks ID to in order to mobilise trigger{} object later
// var limit=0;//To sum Math.random() later, exceeding this number will trigger explosion
// var rdArr = [];//Tracks assigned Math.random for later summer() use

// setTrigger();
init();

function init(){
  var rdm, opp;
  var x=document.querySelectorAll('img');
  x.forEach(function(img){
    rdm = Math.floor(Math.random()*2);
    trigger.push(rdm);
    if(rdm===1){opp=0;}
      else{opp=1;}

    });
  }

function cutBlue(){
  el = document.getElementById("0");
  el.src = "img/cut-blue-wire.png";
  id = Number(el.id);
  destiny(id);

  }

function cutGreen(){
  el = document.getElementById("1");
  el.src = "img/cut-green-wire.png";
  id = el.id;
  destiny(id);
}

function cutRed(){
  el = document.getElementById("2");
  el.src = "img/cut-red-wire.png";
  id = el.id;
  destiny(id);
}

function cutWhite(){
  el = document.getElementById("3");
  el.src = "img/cut-white-wire.png";
  id = el.id;
  destiny(id);
}

function cutYellow(){
  el = document.getElementById("4");
  el.src = "img/cut-yellow-wire.png";
  id = el.id;
  destiny(id);
}

function destiny(id){
  if(wireState.join('')==='00000'){
    console.log('defused!');
    alert("Bomb has been defused!")
    // clearTimeout(boom);
  }
  else if(trigger[id]===0 && wireState[id]===1){
          console.log("Bomb is heating up! 750ms delay activated");
          wireState[id] = 0;
        }
        else if(trigger[id]===1 && wireState[id]===1){
              wireState[id] = 0;
              }
 }


// function summer(){ //Checks latest limit value
//   limit = 0
//   for(i=0; i<idArr.length; i++){
//     limit+=trigger[idArr[i]];
//   }
// }

//-----Experimental Codes----
// function setTrigger(){
//   var t;
//     for(i=0; i<5; i++){
//       t = (Math.floor(Math.random()*2));
//       console.log(t);
//       trigger.push(t);
//     }
// }




// function bombState(id){
//   cT = trigger[id]; //cT means checkTrigger
//   if(cT===0){
//     trigger[id] = 1;//sets trigger back to 1
//     summer();
//     console.log("Explode!");//Later to be replaced with delay750()
//     }
//   if(cT===1){
//     trigger[id] = 0
//     summer();
//   }
// }
