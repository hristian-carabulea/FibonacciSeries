function fibonacciGenerator (n) {
  
  var arrayOfFibonacciValues = [];
  var fibonacciNum = 0;

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      arrayOfFibonacciValues.push(0);
    }

    else if (i === 1) {
      arrayOfFibonacciValues.push(1);
    }

    else {
      fibonacciNum = arrayOfFibonacciValues[i-1] + arrayOfFibonacciValues[i-2];
      arrayOfFibonacciValues.push(fibonacciNum);
    } 

  }
  //var returnValue = values[n-1];
  alert("Here is the Fibonacci Series list of " + n + " items: " + arrayOfFibonacciValues) ;
  console.log(arrayOfFibonacciValues) ;
}

var fibonacciListLength = prompt("Enter how many numbers do you want to see in your Fibonacci list: ");
console.log(fibonacciGenerator(fibonacciListLength));

