window.onload = async () => {

  // Accesam continutul fisierului JSON
  const data = await fetch('/test.json');

  // Retinem datele primite din fisierul JSON
  const result = await data.json();

  // Cream un titlu nou
  const titlu = document.createElement("h1");
  titlu.innerHTML = result.titlu;

  // Selectam sectiunea cu id-ul "ziua_libertatii"
  const ziua_libertatii = document.getElementById("ziua_libertatii");

  // Sectiune in care vrem sa bagam noul <h1>
  ziua_libertatii.appendChild(titlu);

  // Vrem sa cream toate cele 3 paragrafe
  // Incarcam datele cu eticheta "paragrafe"
  var paragrafe_data = result.paragrafe;

  // Varianta I - for
  for(var i = 0; i < paragrafe_data.length; i++){
    const paragraf_nou = document.createElement("p");
    paragraf_nou.innerHTML = paragrafe_data[i];
    ziua_libertatii.appendChild(paragraf_nou);
  }

  // Varianta III - map
  // Iti si modifica datele din paragrafe_data (aplica o lambda functie pe fiecare element)
  paragrafe_data = paragrafe_data.map(element => {
    const paragraf_nou = document.createElement("p");
    paragraf_nou.innerHTML = element;
    ziua_libertatii.appendChild(paragraf_nou);
    return "haha";
  });

  // Varianta II - forEach
  // Doar itereaza, nu aplica nicio functie asupra elementului
  paragrafe_data.forEach(element => {
    const paragraf_nou = document.createElement("p");
    paragraf_nou.innerHTML = element;
    paragraf_nou.classList.add("paragraf");

    const durata = Math.random() * 4;
    const delay = Math.random() * 2;
    paragraf_nou.style.animationDuration = `${durata}s`;
    paragraf_nou.style.animationDelay = `${delay}s`;

    console.log(durata, delay);

    // Imi creez un nou atribut care nu e definit by default in JS
    paragraf_nou.clicked = false;    
    ziua_libertatii.appendChild(paragraf_nou);

    paragraf_nou.onclick = () => {
        // Daca in CSS se scrie background-color (cu liniuta si litere mici)
        // Atributul echivalent din JS este backgroundColor (legat, cu litera mare la inceput de cuvant)

        if (!paragraf_nou.clicked){
            paragraf_nou.style.backgroundColor = "green";
            paragraf_nou.innerHTML = "Am apasat";
            paragraf_nou.clicked = true;
        } else {
            paragraf_nou.style.backgroundColor = "red";
            paragraf_nou.innerHTML = element;
            paragraf_nou.clicked = false;
        }

    }
  });



};