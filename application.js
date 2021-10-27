// create variable for the parseInt function
const toNumber = (n) => {
    return parseInt(n)
  }
  
  // wait for full page to load before running
  $(document).ready (() => {
    // turn selected numbers into an array
    let numbersSelected = []
    let totals = 0
    let lastValue = 0
    
    // buttons w/ "this" data field are clicked, do this funtion
    $("[data-number]").click(function(){
      // turn the text inside the button into an integer
      const num = toNumber($(this).text())
      // add each clicked on number to the end of the array
      numbersSelected.push(num)
      // combining the array to a single integer
      lastValue = toNumber(numbersSelected.join(''))
      // show the combined integer in the display area
      $("[data-display]").text(lastValue)
    })
    
    $("[data-operator-plus]").click(function(){
      totals = totals + lastValue
      lastValue = 0
      numbersSelected = []
      $("[data-display]").text(totals)
    })
    
    $("[data-operator-equals]").click(function(){
      totals = totals + lastValue
      lastValue = 0
      numbersSelected = []
      $("[data-display]").text(totals) 
    })  
    
    
    // target the clear button
    $("[data-clear]").click(function(){
      // change the text to 0
      $("[data-display]").text(00)
      // empty the array to start over
      numbersSelected = []
    })
    
  })
  
  