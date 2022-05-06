/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let weekdays = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let today = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let week = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();
    document.getElementById("target").innerHTML = weekdays[week] + " " + today + " " + months[month]
    + " " + year + " ," + hour + "h" + minute ;
})();
