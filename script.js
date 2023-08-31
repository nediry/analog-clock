const clock = () => {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
    const span = document.querySelector('.clock>span');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = (time) => String(time.toString().length === 1 ? 0 : "") + time;
    span.innerHTML = `${timeString(hours)}:${timeString(minutes)}:${timeString(seconds)}`;
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg - 180}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg - 180}deg)`;
    secondHand.style.transform = `rotate(${secondDeg - 180}deg)`;
}

setInterval(clock, 1000);