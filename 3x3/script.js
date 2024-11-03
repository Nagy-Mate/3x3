window.onload = function(){

    let button = document.getElementById("button");
    let container = document.getElementById("container");
    for(let i = 1; i < 10; i++)
    {
        container.innerHTML += `<div class="grid-item">${i} </div>`; 
    }
    button.onclick = function random(){
        container.innerHTML = "";
        const usedNumbers = [];
        for(let i = 0; i < 9; i++)
        {
            let rnd = Math.floor(Math.random() * 9 + 1);
            while(usedNumbers.includes(rnd)){
                rnd = Math.floor(Math.random() * 9 + 1);
            }
            usedNumbers.push(rnd);
            container.innerHTML += `<div class="grid-item">${rnd} </div>`;
        }
    }
}