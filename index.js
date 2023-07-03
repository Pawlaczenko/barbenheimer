const slider = document.getElementById('slider');
const container = document.querySelector('.container');
const image1 = document.querySelector('#barbie');
const timer = document.querySelector('.timer');

const oppenheimerScore = document.querySelector("#oppenheimer-score");
const barbieScore = document.querySelector("#barbie-score");

function countdownToJuly21() {
    var now = new Date();
  
    var target = new Date(now.getFullYear(), 6, 21);
  
    if (now > target) {
      target.setFullYear(target.getFullYear() + 1);
    }
  
    var remainingTime = target - now;
  
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    timer.innerText = `${days.toString().padStart(2, '0')}d : ${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
}

const applyStyles = () => {
    const value = slider.value;
    const width = `${value}%`;

    const gradient = `url("./assets/back1.svg"),linear-gradient(90deg,hsl(291deg 100% 57%) 0%,hsl(336deg 87% 50%) ${value}%,hsl(21deg 100% 44%) 100%)`;

    image1.style.width = width;
    container.style.background = gradient;
    timer.style.backgroundImage = gradient;

    barbieScore.innerText = `${value}%`;
    oppenheimerScore.innerText = `${100 - value}%`;
}

slider.addEventListener('input', function() {
    applyStyles();
});

const barbenheimerTimer = setInterval(countdownToJuly21,1000);

countdownToJuly21();
applyStyles();