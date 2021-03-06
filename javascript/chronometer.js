class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime ++
      if (callback){callback()};
    },1000);
  }
  getMinutes() {
    // ... your code goes here
    return Number(Math.trunc(this.currentTime/60));
  }
  getSeconds() {
    // ... your code goes here
    return Number(this.currentTime % 60);
  }
  twoDigitsNumber() {
    // ... your code goes here
    return this.currentTime.toString().length === 2 ? this.currentTime.toString() : "0" + this.currentTime.toString();
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
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
