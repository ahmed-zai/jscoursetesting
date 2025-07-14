let length ;
let width ;
let grocery ;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    grocery = parseFloat(document.getElementById('grocery').value);

    let area  = length + width + grocery ;
    document.getElementById('result').innerText = `The total amout is: ${area}`;
}
