var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date();
var secondDate = new Date("2015-04-10");

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

document.getElementById('days').innerText = diffDays;