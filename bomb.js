// alert("Javascript Activated!");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

document.getElementById("0").addEventListener('click',cutBlue);
document.getElementById("1").addEventListener('click',cutGreen);
document.getElementById("2").addEventListener('click',cutRed);
document.getElementById("3").addEventListener('click',cutWhite);
document.getElementById("4").addEventListener('click',cutYellow);
document.getElementById("reset").addEventListener('click',init);

var wireState = [1,1,1,1,1]; //Tracks which wires are cut
var trigger = [];//Tracks which are the trigger wires
var start = false;
var interval;

init();

function init(){
  console.log("Game initialised");
  var rdm, opp;
  wireState = [1,1,1,1,1];
  trigger = [];
  var d3 = 3; //d3
  var d2 = 0; //d2
  var d1 = 0; //d1
  var d0 = 0; //d0
  var x=document.querySelectorAll('img');
  x.forEach(function(img){
      rdm = Math.floor(Math.random()*2);
      trigger.push(rdm);
      }
    )
 if(start === false){
  timer(d3,d2,d1,d0);
  start = true;
  }
  else if(start===true){
    clearInterval(interval);
    start = false;
  }
    }

function timer(d3,d2,d1,d0){

       time = document.getElementById('status');
      interval = setInterval(count,10);

           function count(){
             if((d3===0 && d2===0 && d1===0 && d0===0)){
               clearInterval(interval);
               document.body.style.backgroundImage="url('img/explosion.jpg')";
               }
               else{
                  if(d0>0){
                    d0--;
                  }
                  else{//Encasing else
                    d0 = 9;
                    if(d1>0){
                     d1--;
                    }
                    else{
                      d1=9;
                      if(d2>0){
                        d2--;
                      }
                      else{
                        d2=9;
                        if(d3>0){
                          d3--;
                        }
                      }
                    }
                  }//end of encasing else
                }
               time.textContent = d3.toString() + d2.toString()+":"+d1.toString() + d0.toString();
             }//end of count()
       }//end of timer()

function destiny(id){
    /*This is the brain of this game, it decides whether the cut wire triggers the explosion*/
    if(wireState.join('')==='00000'){
      console.log('defused!');
      alert("Bomb has been defused!")
      init();
    }
    else if(trigger[id]===0 && wireState[id]===1){
            console.log("Bomb is heating up! 750ms delay activated");
            explode();
            init();
            wireState[id] = 0;
          }
          else if(trigger[id]===1 && wireState[id]===1){
                wireState[id] = 0;
                }
   }

function explode(){
  document.body.style.backgroundImage="url('img/explosion.jpg')";
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
