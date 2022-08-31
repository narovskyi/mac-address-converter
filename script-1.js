"use strict";

const refs = {
    inputString: document.querySelector('.input-string'),
    outputString: document.querySelector('.output-string'),
    outputEditedString: document.querySelector('.output-edited-string'),
    convertButton: document.querySelector('.convert-button')
};

const convertMac = (event) => {
    event.preventDefault();
    const correctSymbols = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    const symbArr = refs.inputString.value
    .split('')
    .map(symbol => symbol.toLowerCase())
    .filter(value => correctSymbols.includes(value));

    function incorrectMac(array) {

        if (array.length > 12) {
            refs.outputString.textContent = "Too many symbols";
            refs.outputEditedString.textContent = "";
        } else if (array.length < 12) {
            refs.outputString.textContent = "Not enough symbols";
            refs.outputEditedString.textContent = "";
        } else {
            refs.outputString.textContent = `${symbArr[0]}${symbArr[1]}:${symbArr[2]}${symbArr[3]}:${symbArr[4]}${symbArr[5]}:${symbArr[6]}${symbArr[7]}:${symbArr[8]}${symbArr[9]}:${symbArr[10]}${symbArr[11]}`;
            refs.outputEditedString.textContent = `grep ${symbArr[0]}${symbArr[1]}:${symbArr[2]}${symbArr[3]}:${symbArr[4]}${symbArr[5]}:${symbArr[6]}${symbArr[7]}:${symbArr[8]}${symbArr[9]}:${symbArr[10]}${symbArr[11]} /var/log/dhcpd.log`;
        }
    };

    incorrectMac(symbArr);
};

const result = refs.convertButton.addEventListener("click", convertMac);