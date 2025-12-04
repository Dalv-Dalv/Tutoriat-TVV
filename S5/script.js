window.onload = async () => {

  // Accesăm conținutul fișierului JSON
  // Datele și alte detalii despre rezultatul fetch-ului sunt reținute în DATA când folosim fetch pentru API-uri
  // În cazul lucrului cu JSON, este suficient să folosim metoda .json() ca mai jos
  const data = await fetch('/test.json');

  // În result stocăm datele primite în format .json()
  const result = await data.json();

  // Creăm un titlu nou
  const titlu = document.createElement("h1");
  titlu.innerHTML = result.titlu;

  // Selectăm secțiunea cu ID-ul 'ziua_libertatii'
  const ziua_libertatii = document.getElementById("ziua_libertatii");

  // Adăugăm drept copil titlul în secțiunea selectată
  ziua_libertatii.appendChild(titlu);

  // Vrem să creăm toate cele 3 paragrafe din rezultat
  // Încărcăm doar datele de la eticheta "paragraf"
  var paragrafe_data = result.paragrafe;

  // Varianta I - for
  for(var i = 0; i < paragrafe_data.length; i++){
    const paragraf_nou = document.createElement("p");
    paragraf_nou.innerHTML = paragrafe_data[i];
    ziua_libertatii.appendChild(paragraf_nou);
  }

  // Varianta III - map
  // Modifică datele din paragrafe_data, aplicând o lambda-funcție pe fiecare element
  paragrafe_data = paragrafe_data.map(element => {
    const paragraf_nou = document.createElement("p");
    paragraf_nou.innerHTML = element;
    ziua_libertatii.appendChild(paragraf_nou);
    return "haha";
  });

  // Varianta II - forEach
  // Doar iterează prin fiecare element al listei
  // Nu aduce modificări asupra elementelor listei
  paragrafe_data.forEach(element => {
    const paragraf_nou = document.createElement("p");
    paragraf_nou.innerHTML = element;
    paragraf_nou.classList.add("paragraf");

    const durata = Math.random() * 4;
    const delay = Math.random() * 2;
    paragraf_nou.style.animationDuration = `${durata}s`;
    paragraf_nou.style.animationDelay = `${delay}s`;

    console.log(durata, delay);

    // Îmi creez un nou atribut / o etichetă care nu e definit în JS
    paragraf_nou.clicked = false;    
    ziua_libertatii.appendChild(paragraf_nou);

    paragraf_nou.onclick = () => {
        // Atenție la convențiile de denumire! 
        // CSS: background-color (liniuță, litere mici)
        // JS: backgroundColor (legat, cu majusculă la început de cuvânt începând cu al doilea)

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