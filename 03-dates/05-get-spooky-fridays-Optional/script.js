/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", ()=> {
        let date = new Date();
        let inputyear = document.getElementById("year").value;
        date.setFullYear(inputyear);
        date.setDate(13);
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let outputmonths = [];
        for (let i = 0 ; i < 12 ; i++ ){
            date.setMonth(i);
            let weekday = date.getDay();
            if (weekday == "5"){
                outputmonths.push(months[i]);
            }
        }
        console.log(outputmonths);
        window.alert(outputmonths);
    });

})();
