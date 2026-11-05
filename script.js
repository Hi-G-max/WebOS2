setInterval ( function(){
    const timeElement = document.querySelector("#time");
    if (timeElement){
        const now = new Date ();
        const timestring = now.toLocaleTimeString();
        const datestring = now.toLocaleDateString();

        timeElement.innerHTML = `${datestring}<br>${timestring}`;
    }

},1000);

//calendar
document.querySelector("#calendar-popup").addEventListener("click",function(){
    const calendar = document.getElementById("#calendar-popup");
    if (calendar.style.display === "none") {
        calendar.style.display = "block";
    }else{
        calendar.style.display ="none"
    }        
});
