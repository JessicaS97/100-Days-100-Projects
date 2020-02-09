const body = document.body;
let endTime = new Date('May 31 2020 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const seasonText = document.getElementById('season-display');
let seasonForm = document.getElementById('seasons');
let currSeason = 'Winter';

setInterval(updateCountdown, 1000)
setInterval(createAnimation, 50);

seasonForm.addEventListener('change', () => {
  currSeason = seasonForm.value
  seasonText.innerText = `${currSeason} is coming`
  
  if (currSeason === 'Winter') {
    endTime = new Date('May 31 2020 23:59:59');  
  } else if (currSeason === 'Spring') {
    endTime = new Date('August 31 2020 23:59:59');
  } else if (currSeason === 'Summer') {
    endTime = new Date('November 30 2020 23:59:59');
  } else if (currSeason === 'Autumn') {
    endTime = new Date('February 29 2020 23:59:59');
  }
})


function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function createAnimation() {
	const snow_flake = document.createElement('i');
  if (currSeason === 'Autumn' || currSeason === 'Winter') {
    if (currSeason === 'Winter') {
      snow_flake.classList.add('fas');
      snow_flake.classList.add('fa-snowflake');
      document.body.style.backgroundColor = '#072b55'
    } else {
      snow_flake.classList.add('fab');
	    snow_flake.classList.add('fa-envira');  
      document.body.style.backgroundColor = '#bb6413'
    }
    removeSun()
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 5 + 3 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
	document.body.appendChild(snow_flake);
  } else if (currSeason === 'Summer') {
    document.body.style.backgroundColor = '#b4f0ff'
    showCircle(150,150,35)
  } else {
    removeSun()
    document.body.style.backgroundColor = '#b4f0ff'
  }
}

function removeSun() {
   [...document.getElementsByClassName("circle")].map(n => n && n.remove());
}

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
      });
    }, 1000);
    
    setTimeout(() => {
     div.style.border = 'solid 0.2px orange'
    }, 2000);
  } 