const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.splitClick()[1];
  minDec.innerHTML = chronometer.splitClick()[0];
  
}

function printSeconds() {
  // ... your code goes here  
  secUni.innerHTML = chronometer.splitClick()[4];
  secDec.innerHTML = chronometer.splitClick()[3];  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.setAttribute('class','btn start');
  btnLeft.innerHTML = "START";
  btnRight.setAttribute('class','btn reset');
  btnRight.innerHTML = "RESET";  
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.setAttribute('class','btn stop');
  btnLeft.innerHTML = "STOP";
  btnRight.setAttribute('class','btn split');
  btnRight.innerHTML = "SPLIT";
  chronometer.startClick(printTime);
}

function setResetBtn() {
  // ... your code goes here
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  let btnLeftStatus = btnLeft.innerHTML;

  if (btnLeftStatus === "START"){
    setStartBtn();    
  }
  if (btnLeftStatus === "STOP"){
    setStopBtn();      
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  let btnRightStatus = btnRight.innerHTML;

  if (btnRightStatus === "RESET"){
    setResetBtn();  
  }
  if (btnRightStatus === "SPLIT"){
         
  } 
});

