
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggleBtn = document.getElementById('toggle-btn')
let is24Hour = true;
function updateTime(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = '';

    if (!is24Hour){
        ampm = hours >= 12? 'PM' :'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
    }
hours = String(hours).padStart(2, '0');
    minutes= String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    timeEl.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    dateEl.textContent = `${day}/${month}/${year}`;

    toggleBtn.addEventListener('click' , ()=>{
        is24Hour = !is24Hour;
        if (is24Hour){
        toggleBtn.textContent ='Switch to 12-hour format';
        }else{ 
            toggleBtn.textContent =  'Switch to 24-hour format';
        
        }
        updateTime();
    });
    
    
}
updateTime();
setInterval(updateTime, 1000);