// alert('Javascript Loaded!')

// 00:00:00

var d3 = 1; //d3
var d2 = 0; //d2
var d1 = 0; //d1
var d0 = 0; //d0

timer();

function timer(){
    time = document.getElementById('time');
    var timer = setInterval(count,10);

        function count(){
          if(d3===0 && d2===0 && d1===0 && d0===0){
            clearTimeout(timer);
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
