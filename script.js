const endDate = "1 January 2023";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");     

function clock() {

    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;  //dividing diff with sec
    console.log(end);
    console.log(now); 
    console.log(diff); // in mili sec

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600/ 24);  //days remianning ka formula
    inputs[1].value = Math.floor((diff / 3600) % 24);  //hours remaning 
    inputs[2].value = Math.floor((diff / 60) % 60);  //min remaning 
    inputs[3].value = Math.floor((diff) % 60);  //sec remaning 

}

// clock();

setInterval(() => {
    clock();
}, 1000);