/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let op1 = document.getElementById("op-one").value;
        parseInt(op1);
        let op2 = document.getElementById("op-two").value;
        parseInt(op2);
        let output = 0;
        output = parseFloat(op1) + parseFloat(op2) ;
        window.alert(output);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let op1 = document.getElementById("op-one").value;
        parseInt(op1);
        let op2 = document.getElementById("op-two").value;
        parseInt(op2);
        let output = 0;
        output = op1 - op2 ;
        window.alert(output);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let op1 = document.getElementById("op-one").value;
        parseInt(op1);
        let op2 = document.getElementById("op-two").value;
        parseInt(op2);
        let output = 0;
        output = op1 * op2 ;
        window.alert(output);
    });

    document.getElementById("division").addEventListener("click", function() {
        let op1 = document.getElementById("op-one").value;
        parseInt(op1);
        let op2 = document.getElementById("op-two").value;
        parseInt(op2);
        let output = 0;
        output = op1 / op2 ;
        window.alert(output);
    });
})();
