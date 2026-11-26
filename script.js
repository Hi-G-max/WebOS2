//caches elements
const timeBtn = document.getElementById("time");
const calendar = document.getElementById("calendar");
const clockBtn = document.getElementById("clockbtn");

//clock
 function updateClock(){
    if (timeBtn){
        const now = new Date ();
        const timestring = now.toLocaleTimeString();
        const datestring = now.toLocaleDateString();

        timeBtn.innerHTML = `${datestring}<br>${timestring}`;
    }

}
updateClock();
setInterval(updateClock,1000);

//calendar toggle
timeBtn.addEventListener("click",function(){
    calendar.classList.toggle("hidden");
});

clockBtn.addEventListener("click",function(){
    clockBtn.classList.toggle("hidden");
});
