import css from './index.styl';


function generateNumbers() {
  for (var i = 1; i < 101; i++){
    var x = document.createElement("button");
    var t = document.createTextNode(i);
    x.appendChild(t).id = i;
    document.getElementById('buttons-wrap').appendChild(x);}
};

document.getElementById('generate-numbers').addEventListener("click", generateNumbers)
