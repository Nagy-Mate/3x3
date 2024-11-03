window.onload = function() {

    let button = document.getElementById("button");
    let container = document.getElementById("container");
    for(let i = 1; i < 10; i++)
    {
        container.innerHTML += `<div class="grid-item">${i} </div>`; 
    }
    button.onclick = function random(){
        container.innerHTML = "";
        const usedNumbers = [];
        console.log(usedNumbers);
        for(let i = 1; i < 10; i++)
        {
            let rnd = Math.floor(Math.random() * 9);
            console.log("első random: ", rnd);
            while(usedNumbers.includes(rnd)){
                rnd = Math.floor(Math.random() * 9);
                console.log("while random: ", rnd);
            }
            usedNumbers.push(rnd);
            console.log(usedNumbers);
            container.innerHTML += `<div class="grid-item">${rnd} </div>`;
        }
    }
}