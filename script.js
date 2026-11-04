setInterval ( function(){
    const timeElement = document.querySelector("#time");
    if (timeElement){
        const now = new Date ();
        const timestring = now.toLocaleTimeString();
        const datestring = now.toLocaleDateString();

        timeElement.innerHTML = `${timestring}<br>${datestring}`;
    }

},1000);