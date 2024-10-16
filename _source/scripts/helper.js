export const helper = {
  doSomething() {
    console.log('Helper is doing something');
  },

  formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date);
  },

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};