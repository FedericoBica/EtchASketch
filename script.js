
const container = document.getElementById("container");

let user = prompt("Ingrese numero de cuadrados por lado: ");

if (user >= 50 || isNaN(user) || user <= 0){
   user = 16;
}

const containerSizeW = 600;
const containerSizeH = 490;
const boxSize = containerSizeH / user;

container.style.width = `${containerSizeW}px`;
container.style.height = `${containerSizeH}px`;


for (let i=0;i<user;i++){
    for (let j=0;j<user;j++){
        const box = document.createElement("div");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.classList.add("box");
        container.appendChild(box);
    }
}

const boxCol = document.querySelectorAll(".box");


boxCol.forEach((box) => {
    box.addEventListener("mouseover", () => {
        if (!box.classList.contains("clicked")){
            box.style.backgroundColor = "gray";
            setTimeout(() => {
                if (!box.classList.contains("clicked")){
                    box.style.backgroundColor = "lightgray";
                };
            }, 800);
        }
    });
    box.addEventListener("mousedown", () => {
        box.classList.add("clicked");
        box.style.backgroundColor = "yellow";
    })
});

const buttons = document.getElementById("clean");

buttons.addEventListener("click", () => {
    boxCol.forEach((box) => {
        box.style.backgroundColor = "lightgray";
    });
})