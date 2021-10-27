class Calculator {
  constructor() {
    console.log('hello');
    $('[data-clear]').click(this.clear);
  }

  clear() {
    // change the text to 0
    // $('[data-display]').text(00);
    // empty the array to start over
    // numbersSelected = [];
    console.log('clear');
  }
}

$(document).ready(() => {
  new Calculator();
});
