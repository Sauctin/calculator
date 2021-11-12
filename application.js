class Calculator {
  constructor() {
    this.numbersSelected = [];
    this.totals = 0;
    this.lastValue = 0;

    $('[data-clear]').click(this.clear.bind(this));

    $('[data-number]').click(this.numberPress.bind(this));

    $('[data-operator-plus], [data-operator-equals]').click(
      this.calculate.bind(this)
    );
  }

  clear() {
    // change the text to 0
    $('[data-display]').text(0);
    // empty the array to start over
    this.numbersSelected = [];
    this.lastValue = 0;
    this.totals = 0;
  }

  calculate() {
    this.totals = this.totals + this.lastValue;
    this.lastValue = 0;
    this.numbersSelected = [];
    $('[data-display]').text(this.totals);
  }

  toNumber(n) {
    return parseInt(n);
  }

  numberPress(e) {
    // turn the text inside the button into an integer
    const num = this.toNumber($(e.target).text());
    // // add each clicked on number to the end of the array
    this.numbersSelected.push(num);
    // // combining the array to a single integer
    this.lastValue = this.toNumber(this.numbersSelected.join(''));
    // // show the combined integer in the display area
    $('[data-display]').text(this.lastValue);
  }
}

$(document).ready(() => {
  new Calculator();
});
