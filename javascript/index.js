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
  printMilliseconds();
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
  milUni.innerHTML = chronometer.splitClick()[7];
  milDec.innerHTML = chronometer.splitClick()[6];
}

function printSplit() {
  // ... your code goes here
  let liTag = document.createElement('li');  
  liTag.innerHTML = chronometer.splitClick();
  splits.appendChild(liTag);
}

function clearSplits() {
  // ... your code goes here
  while(splits.hasChildNodes()){
    splits.removeChild(splits.childNodes[0]);
  }
}

function setStopBtn() {
  // ... your code goes here
   
  btnLeft.setAttribute('class','btn stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.setAttribute('class','btn split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.setAttribute('class','btn start');
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.setAttribute('class','btn reset');
  btnRight.innerHTML = "RESET"; 
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  let btnLeftStatus = btnLeft.innerHTML;

  if (btnLeftStatus === "START"){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();   
  }
  if (btnLeftStatus === "STOP"){
    chronometer.stopClick();
    setStartBtn(); 
    setResetBtn();    
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  let btnRightStatus = btnRight.innerHTML;

  if (btnRightStatus === "RESET"){
    chronometer.resetClick();
    clearSplits();
    printTime(); 
  }
  if (btnRightStatus === "SPLIT"){
    printSplit();
  } 
});

