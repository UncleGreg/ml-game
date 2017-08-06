import css from './index.styl';

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

function generateNumbers() {
  shuffle(numbers);
  for (var i = 0; i < 100; i++){
    var x = document.createElement("button");
    var t = document.createTextNode(numbers[i]);
    x.appendChild(t);
    x.setAttribute("id", "button-" + numbers[i]);
    document.getElementById('buttons-wrap').appendChild(x);}
};

document.getElementById('generate-numbers').addEventListener("click", generateNumbers)
