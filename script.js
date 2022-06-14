const binaryInput = document.querySelector('#binary');
const btnConvert = document.querySelector('#convert');
const spanDecimal = document.querySelector('#result');
const spanMessage = document.querySelector('#message');

//the event listener that get launched when the button is clicked
btnConvert.addEventListener('click', (event) => {
    event.preventDefault();
    let error = false;
    spanMessage.textContent = '';
    const binary = binaryInput.value;
    /*check the follwoing:
    * : if the input field is empty
    * : if the Binary number above 8 Digits, if not continue
    * : if the given value Contains Digits or Characters which are not Binary
    * : if there is no issue, continue to print out the Decimal value
    */
    if (binary === '') {
        spanDecimal.textContent = '';
        spanMessage.textContent = 'Input empty';
        spanMessage.style.color = 'red';
        error = true;
        return;
    }
    if (binary.split('').length > 8) {
        spanDecimal.textContent = '';
        spanMessage.textContent = 'The maximum digits is 8';
        spanMessage.style.color = 'red';
        binaryInput.value = '';
        error = true;
        return;
    }
    binary.split('').map((digit) => {
        if (digit !== '0' && digit !== '1') {
            spanDecimal.textContent = '';
            spanMessage.textContent = 'Enter a binary number';
            spanMessage.style.color = 'red';
            binaryInput.value = '';
            error = true;
        }
    });
    if (error === false) {
        const decimal = parseInt(binary, 2);
        binaryInput.value = '';
        spanDecimal.textContent = `Binary: ${binary} | Decimal: ${decimal}`;
        spanDecimal.style.color = 'green';
        binaryInput.value = '';
    }
});