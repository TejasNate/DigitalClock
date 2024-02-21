let hrs = document.getElementById("hrs");
let min = document.getElementById("mins");
let secs = document.getElementById("sec");

setInterval(() => {
  let currTime = new Date(); // Get the current time inside setInterval
  hrs.innerHTML = (currTime.getHours() < 10 ? "0" : "") + currTime.getHours();
  min.innerHTML =
    (currTime.getMinutes() < 10 ? "0" : "") + currTime.getMinutes();
  secs.innerHTML =
    (currTime.getSeconds() < 10 ? "0" : "") + currTime.getSeconds();
}, 100);
