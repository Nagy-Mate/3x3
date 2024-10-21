window.onload  = function() {

    let button = document.getElementById("button");
    let container = document.getElementById("container");
    //container.innerHTML = "asdfasdfasdf";
    for(let i = 1; i < 10; i++)
    {
        container.innerHTML += `<div class="grid-item">${i} </div>`; 
    }
    button.onclick = function random(){
        container.innerHTML = "";
        const usedNumbers = [0];
        for(let i = 1; i < 10; i++)
        {
            let rnd = Math.floor(Math.random() * 9);
            while(usedNumbers.includes(rnd)){
                rnd = Math.floor(Math.random() * 9);
            }
            usedNumbers.pop(rnd);
            container.innerHTML += `<div class="grid-item">${rnd} </div>`;
        }
    }
}