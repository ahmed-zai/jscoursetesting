function performOperation() {
    // get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = multiply(num1, num2);

        displayResult(result);

    }
    else {
        displayResult('Please enter valid numbers');
    }
}
function multiply(a ,b) {
      
     debugger; 
      c = a + b ;
      d = a - b ;
      f = a / b ;
      g = a * b;
      e = [c , d ,  f, g]
    return e ;


}
function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `the result is : ${result}`;
}
