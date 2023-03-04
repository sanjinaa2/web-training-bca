const timeLeft = document.querySelector('.time-left');
const timerButtons = document.querySelectorAll('[data-time]');
let timerInterval;
const endTime = document.querySelector('.end-time');


function timer(seconds) {
    const now = Date.now();  //9:51
    const then = now + seconds * 1000;  //9:53
  
   displayTimeLeft(seconds);
   displayComebackTime(then);
   timerInterval = setInterval(function() {
       let secondsLeft= (then - Date.now()) / 1000 ;
       secondsLeft = Math.round(secondsLeft);
       if(secondsLeft <= 0) {
        clearInterval(timer);
       }
       displayTimeLeft(secondsLeft);
    }, 1000); 
}

function displayTimeLeft(secondsLeft){
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    console.log(minutes, seconds);
    timeLeft.textContent = minutes + ":" + seconds;
}

function displayComebackTime(timestamp) {
    const date = new Date(timestamp);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    let endTime= document.querySelector('.end-time');
    endTime.textContent = "Come back at " + hour + ":" + minutes;
    console.log( hour, minutes, endTime);
}




timerButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        clearInterval(timerInterval);
        const minutes = event.target.getAttribute('data-time');
        const seconds = minutes * 60;
        console.log(seconds);
        timer(seconds);
    });
});




