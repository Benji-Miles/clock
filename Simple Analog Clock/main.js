const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const hour = document.querySelector('.hour');

setInterval(()=>{
    const date = new Date;
    const secDeg = date.getSeconds() / 60 * 360 - 90; // 60 = seconds | 360 = degree | 90 = to start the clock hand at 12
    const minDeg = date.getMinutes() / 60 * 360 - 90;
    const hourDeg = date.getHours() / 12 * 360 - 90;
    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
},1000)

