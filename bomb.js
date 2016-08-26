// alert("Javascript Activated!");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

document.getElementById("0").addEventListener('click',cutBlue);
document.getElementById("1").addEventListener('click',cutGreen);
document.getElementById("2").addEventListener('click',cutRed);
document.getElementById("3").addEventListener('click',cutWhite);
document.getElementById("4").addEventListener('click',cutYellow);
document.getElementById("reset").addEventListener('click',reset);

var wireTray = [1,1,1,1,1]; //Tracks which wires are cut
var trigger;//Tracks which are the trigger wires
var start = false;
var bombStarted = false;
var interval, bombCountDown;

init();

function init(){
  console.log("Game initialised");
  var rdm, opp;
  wireTray = [1,1,1,1,1];
  trigger = [];
  var check = 0;
  document.getElementById('status').style.color="Red"
  var d3 = 3; //d3
  var d2 = 0; //d2
  var d1 = 0; //d1
  var d0 = 0; //d0
  var x=document.querySelectorAll('img');

  do{
    x.forEach(function(img){
        rdm = Math.floor(Math.random()*2);
        trigger.push(rdm);
        }
      )
    if(trigger.join('')==='00000'){
      check = 1;
    }
  }while(check=0)
  console.log(trigger);
 if(start === false){
  timer(d3,d2,d1,d0);
  start = true;
  }
  else if(start===true){
    clearInterval(interval);
    start = false;
  }
    }

function destiny(id){
    /*This is the brain of this game, it decides whether the cut wire triggers the explosion*/

    if(wireTray[id]===1){
        if(trigger[id]===1){ //if player cuts good-wire
          trigger[id]=0;
          wireTray[id]=0;
          }
          else if(trigger[id]===0){
            heatup();//
          }
      }

    if(trigger.join('') === '00000'){
      console.log('Bomb defused!');
      document.getElementById('status').style.color="Green";
      clearInterval(interval);
      clearTimeout(bombCountDown);
    }

   }

function reset(){
    clearInterval(interval);
    start = false;
    document.getElementById("0").src="img/uncut-blue-wire.png";
    document.getElementById("1").src="img/uncut-green-wire.png";
    document.getElementById("2").src="img/uncut-red-wire.png";
    document.getElementById("3").src="img/uncut-white-wire.png";
    document.getElementById("4").src="img/uncut-yellow-wire.png";
    document.body.style.backgroundImage="url('img/simcity.jpg')";
    init();

}

function timer(d3,d2,d1,d0){

        // var d3 = 3; //d3
        // var d2 = 0; //d2
        // var d1 = 0; //d1
        // var d0 = 0; //d0

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

function heatup(){
    bombStarted = true
    var bombCountDown = setTimeout(explode,2000);
    }//end of timer()

function explode(){
  document.body.style.backgroundImage="url('img/explosion.jpg')";
  clearInterval(interval);
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
