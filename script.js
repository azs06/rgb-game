var boxes = document.querySelectorAll('.box');
var rgbHolder = document.querySelector('#rgbHolder');
var resultContainer = document.querySelector('.resultBlock');
var colorButton = document.querySelector('.colorButton');
var gameContainer = document.querySelector('#container');
var colors = [];
var selectedColor = null;

function initGame(){
	resetGame();
  boxes.forEach(function(box, index){
	  colors[index] = makeColor();
	  box.style.backgroundColor = colors[index];
  });
  selectedColor = colors[Math.floor(Math.random() *   colors.length)];
    rgbHolder.innerText = selectedColor;
	startGame();
}

function checkBox(){
	resultContainer.classList.add('animated','tada');
	removeAnimation();
	if(this.style.backgroundColor === selectedColor){
		resultContainer.innerText = 'Correct!';
		colorButton.innerText = 'Play again';
		removeListeners();
		gameContainer.classList.add('done');
		boxes.forEach(function(box){
			box.style.backgroundColor = selectedColor;
		});
	}else{
		resultContainer.innerText = 'Try again!';
	}
}

function makeColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb('+ r +', ' + g + ', ' + b + ')';
}

function resetGame(){
	resultContainer.innerHTML = "No result";
	colorButton.innerText = 'New Colors';
	gameContainer.classList.remove('done');
}

function startGame(){
  boxes.forEach(function(box){
	  box.addEventListener('click', checkBox);
  });
}
function removeListeners(){
  boxes.forEach(function(box){
	  box.removeEventListener('click', checkBox);
  });
}
function removeAnimation(){
	resultContainer.addEventListener('animationend', function(){
resultContainer.classList.remove('animated','tada');
	});
}
colorButton.addEventListener('click', initGame);
initGame();
