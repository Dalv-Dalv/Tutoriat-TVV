const button = document.getElementById("creaza");
const divLista = document.getElementById("divLista");

button.addEventListener("click", () => {
    // elemetNou.innerHTML = "Salut";

    // elemetNou.addEventListener("mouseover", () => {
    //     console.log("hi");
    // })

    // elemetNou.addEventListener("click", () => {
    //     var a = 4;
    //     elemetNou.style.transitionDuration = `${a}s`;
    // })

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const elemetNou = document.createElement("div");
            divLista.appendChild(elemetNou);

            elemetNou.classList.add("cutie");

            elemetNou.addEventListener("click", (elem) => {
                elemetNou.remove();
            });

            elemetNou.style.animationDelay = `${(i * j) * 0.1}s`

            if(i < 5){
                elemetNou.style.backgroundColor = `rgb(${i * 40}, 0, 0)`;
            }else{
                elemetNou.style.backgroundColor = `rgb(0, ${i * 40}, 0)`;
            }
        }
    }
});


