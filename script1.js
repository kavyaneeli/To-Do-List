let is24Hour = false;
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggleBtn = document.getElementById('toggle-btn')

function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let ampm = '';

    if (!is24Hour){
        ampm = hours >= 12? 'PM' :'AM';
        hours = hours % 12;
        if (hours === 0) hours = 12;
    }
hours = String(hours).padStart(2, '0');
    minutes= String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    timeEl.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    dateEl.textContent = `${day}-${month}-${year}`;

    toggleBtn.addEventListener('click' , ()=>{
        
        toggleBtn.textContent = is24Hour ? 'Switch to 12-hour format' : 'Switch to 24-hour format'
        updateClock();
    });

    setInterval(updateClock,1000);
    updateClock();
    
    
}