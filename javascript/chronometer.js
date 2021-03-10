class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime ++;
      if (callback){callback()};
    },10);
  }
  getMinutes() {
    // ... your code goes here
    return Number(Math.trunc((this.currentTime/100)/60));
  }
  getSeconds() {
    // ... your code goes here
    return Number(Math.trunc(this.currentTime/100) % 60);
  }
  getMilliseconds(){
    // ... your code goes here
    return Number(this.currentTime % 100);
  }
  twoDigitsNumber(myTime) {
    // ... your code goes here
    return myTime.toString().length === 2 ? myTime.toString() : "0" + myTime.toString();
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
