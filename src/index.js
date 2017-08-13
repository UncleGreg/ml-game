import css from './index.styl';



//{{{
function Stopwatch(elem){
  var time = 0;
  var interval;
  var offset;

  function update(){
    if(this.isOn){
    time += delta();
    }
    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }
  function delta(){
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
  function timeFormatter(timeInMilliseconds){
    var time = new Date(timeInMilliseconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if(minutes.length < 2){
      minutes = '0' + minutes;
    } 

    if(seconds.length < 2){
      seconds = '0' + seconds;
    } 

    while(milliseconds.length < 3){
      milliseconds = '0' + milliseconds;      
    }

    if(time.getMinutes() == 2){
      watch.stop()
      timer.style.display ="none"
      alert('czas sie skonczyl! Twój wynik to ' + (numberCount - 1))
    }

    return minutes + ' : ' + seconds + ' . ' + milliseconds;
     
  }

  this.isOn = false;
  this.start = function(){
    if(!this.isOn){
      interval = setInterval(update.bind(this), 100);
      offset = Date.now();
      this.isOn = true;     
    }
  };
  this.stop = function(){
    if(this.isOn){
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
    };
  this.reset = function(){
    time = 0;
    update();
  };
}
//}}}

var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('generate-numbers')
//var resetBtn = document.getElementById('reset')

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click',function(){
  if(watch.isOn){
    watch.stop();
  }else{
    watch.start();
  }
});

//resetBtn.addEventListener('click',function(){
//  watch.stop();
//})

const numbers = Array.from({length: 100}, (v, k) => k+1); 

function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
};
var numberCount = 1;


function generateNumbers() {
  document.getElementById('instructions').style.display ="none";
  shuffle(numbers);
  for (var i = 0; i < 100; i++){
    var x = document.createElement("button");
    var t = document.createTextNode(numbers[i]);
    x.appendChild(t);
    x.setAttribute("class", "number");
    x.setAttribute("id", "button-" + numbers[i]);
    document.getElementById('buttons-wrap').appendChild(x);}
};

$(document).on('click', '.number', function ()
  {
    var value= $(this).text();
    if(value == numberCount){
      $(this).addClass('correct');
      numberCount++;
      if(numberCount == 101){
        watch.stop();
        alert('Wow! Udało Ci się! Twój czas to: ' + timer.textContent )
      }
    } 
  }
)

document.getElementById('generate-numbers').addEventListener("click", generateNumbers)



