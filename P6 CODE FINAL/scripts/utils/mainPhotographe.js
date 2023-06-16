// Efface le contenu de l'élément "photographer_section" pour préparer l'ajout de nouveaux éléments.
var htmlMain = document.getElementById("photographer_section");
htmlMain.innerHTML = ''


function htmlConnect(photographersSector) {

    // Création des éléments de la page
    let ph_card = document.createElement("a");
    let content = document.createElement("div");
    let img_ph = document.createElement("img");
    let ph_title = document.createElement("h2");
    let ph_location = document.createElement("h3");
    let ph_para = document.createElement("p");
    let ph_price = document.createElement("p");


    // Édition et modification des éléments de la page
    ph_card.setAttribute("href", "photographer.html?id=" + photographersSector.id)
    ph_card.setAttribute("aria-label", "Voir le profil du photographe");
    img_ph.setAttribute("src", "images/" + photographersSector.portrait);
    img_ph.setAttribute("alt", photographersSector.name);
    img_ph.setAttribute("aria-label", "Portrait de " + photographersSector.name);

    ph_title.innerText = photographersSector.name;
    ph_title.setAttribute("aria-label", "Nom du photographe : " + photographersSector.name);

    ph_location.innerText = photographersSector.city + ", " + photographersSector.country;
    ph_location.setAttribute("aria-label", "Localisation du photographe : " + photographersSector.city + ", " + photographersSector.country);

    ph_para.innerText = " " + photographersSector.tagline + " ";
    ph_para.setAttribute("aria-label", "Tagline du photographe : " + photographersSector.tagline);

    ph_price.innerText = photographersSector.price + "$/ jour ";
    ph_price.setAttribute("aria-label", "Prix du photographe : " + photographersSector.price + "$ par jour");



    // Ajout des classes CSS aux éléments de la page
    ph_card.classList.add("ph_card")
    content.classList.add("content")
    img_ph.classList.add("img_ph")
    ph_title.classList.add("ph_title")
    ph_location.classList.add("ph_location")
    ph_para.classList.add("ph_para")
    ph_price.classList.add("ph_price")


    // Intégration des éléments dans la structure de la page
    ph_card.appendChild(content)
    ph_card.appendChild(img_ph)
    ph_card.appendChild(ph_title)
    ph_card.appendChild(ph_location)
    ph_card.appendChild(ph_para)
    ph_card.appendChild(ph_price)
    return ph_card
}

fetch("data.json").then(response => {
    // Récupération des données JSON à partir du fichier "data.json" en utilisant la méthode `fetch`.
    return response.json();
}).then(data => {
    // les données JSON sont traitées pour itérer à travers chaque photographe.

    for (let i = 0; i < data.photographers.length; i++) {
        let MyFunction = htmlConnect(data.photographers[i]);
        // Pour chaque photographe, la fonction `htmlConnect` est appelée pour créer un élément HTML correspondant.

        htmlMain.appendChild(MyFunction);
        // Enfin, cet élément est ajouté à l'élément "htmlMain" de la page.
    }
});
