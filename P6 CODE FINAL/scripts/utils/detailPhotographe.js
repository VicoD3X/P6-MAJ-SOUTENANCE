// Déploiement de la fonction centrale d'affichage
function afficherPhotographe(photographe) {
    let headerPhotographe = document.getElementById("photograph-header");

    // Création des éléments de la page
    let ph_card = document.createElement("div")
    let contentText = document.createElement("div")
    let contentButton = document.createElement("div")
    let contentPics = document.createElement("div")
    let img_ph = document.createElement("img")
    let buton_ph = document.getElementById("button_phd")
    let ph_title = document.createElement("h2")
    let ph_location = document.createElement("h3")
    let ph_para = document.createElement("p")

    // Édition et modification des éléments de la page
    ph_title.innerText = photographe.name;
    ph_title.setAttribute("aria-label", "Nom du photographe : " + photographe.name);

    img_ph.setAttribute("src", "images/" + photographe.portrait);
    img_ph.setAttribute("alt", photographe.name);
    img_ph.setAttribute("aria-label", "Portrait de " + photographe.name);

    ph_location.innerText = photographe.city + ", " + photographe.country;
    ph_location.setAttribute("aria-label", "Localisation du photographe : " + photographe.city + ", " + photographe.country);

    ph_para.innerText = " " + photographe.tagline + " ";
    ph_para.setAttribute("aria-label", "Tagline du photographe : " + photographe.tagline);


    // Ajout des classes CSS aux éléments de la page
    contentText.classList.add("contentText")
    contentButton.classList.add("contentButton")
    contentPics.classList.add("contentPics")
    ph_card.classList.add("phd_card")
    img_ph.classList.add("img_phd")
    buton_ph.classList.add("contact_button")
    ph_title.classList.add("phd_title")
    ph_location.classList.add("phd_location")
    ph_para.classList.add("phd_para")

    // Intégration des éléments dans la structure de la page
    ph_card.appendChild(contentText)
    ph_card.appendChild(contentButton)
    ph_card.appendChild(contentPics)
    contentButton.appendChild(buton_ph)
    contentPics.appendChild(img_ph)
    contentText.appendChild(ph_title)
    contentText.appendChild(ph_location)
    contentText.appendChild(ph_para)
    headerPhotographe.appendChild(ph_card)
}



// -------------- GESTION MENU DEROULANT ----------------------
function afficherMenuDeroulant(listeMedia, currentPhotographerName) {


    // Récupération du bouton et du contenu du menu déroulant
    let boutonActionDeroulant = document.querySelector(".BoutonActionDeroulant");
    let menuDeroulantContent = document.querySelector(".menuDeroulant-content");
    let flecheIconeMenu = document.getElementById("flecheIconeMenu")


    // Ajout d'un gestionnaire d'événement au clic sur le bouton
    boutonActionDeroulant.addEventListener("click", function () {
        menuDeroulantContent.classList.toggle("show");
    });

    // Récupération des liens dans le menu déroulant (data value)
    let populariteLien = menuDeroulantContent.querySelector("[data-value='popularite']");
    populariteLien.classList.add("selectionnee");

    // Récupération des autres liens via la valeur des données (data value)
    let dateLien = menuDeroulantContent.querySelector("[data-value='date']");
    let titreLien = menuDeroulantContent.querySelector("[data-value='titre']");


    /****************************************************************
     * Liste des fonctions pour faire le tri de la liste déourlante
     ****************************************************************/

    // Fonction de tri des médias par popularité
    function trierParPopularite() {
        let photosTrie = listeMedia
            .sort((a, b) => b.likes - a.likes);
        afficherListeMedia(photosTrie, currentPhotographerName);
    }

    // Fonction de tri des médias par titre
    function trierParTitre() {
        let photosTrie = listeMedia
            .sort((a, b) => a.title.localeCompare(b.title));
        afficherListeMedia(photosTrie, currentPhotographerName);
    }

    // Fonction de tri des médias par date
    function trierParDate() {
        let photosTrie = listeMedia
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        afficherListeMedia(photosTrie, currentPhotographerName);
    }



    // Ajout d'un gestionnaire d'événement à chaque lien du menu déroulant
    populariteLien.addEventListener("click", function () {
        menuDeroulantContent.classList.remove("show");

        // Variable essentielle est présente mais non utilisée
        let flecheHTML = flecheIconeMenu.outerHTML
        boutonActionDeroulant.innerHTML = "Popularité";
        trierParPopularite();

        // Cacher l'élément sélectionné
        populariteLien.classList.add("selectionnee");

        // Réafficher l'option sélectionnée dans le menu déroulant
        dateLien.classList.remove("selectionnee");
        titreLien.classList.remove("selectionnee");
    });

    // Tri par date
    dateLien.addEventListener("click", function () {
        menuDeroulantContent.classList.remove("show");
        boutonActionDeroulant.innerHTML = "Date"

        trierParDate();

        // Cacher l'élément sélectionné
        dateLien.classList.add("selectionnee")

        // Réafficher l'option sélectionnée dans le menu déroulant
        populariteLien.classList.remove("selectionnee");
        titreLien.classList.remove("selectionnee");

        // Réafficher l'option sélectionnée dans le menu déroulant
        populariteLien.classList.remove("selectionnee");
        dateLien.style.padding = "10px"
    });


    // Tri par titre
    titreLien.addEventListener("click", function () {
        menuDeroulantContent.classList.remove("show");
        boutonActionDeroulant.innerHTML = "Titre";
        trierParTitre();

        // Cacher l'élément sélectionné
        titreLien.classList.add("selectionnee")

        // Réafficher l'option sélectionnée dans le menu déroulant
        populariteLien.classList.remove("selectionnee");
        dateLien.classList.remove("selectionnee");

        // Réafficher l'option sélectionnée dans le menu déroulant
        populariteLien.classList.remove("selectionnee");
        titreLien.style.padding = "10px"
    });


    // Gestion de la flèche du menu déroulant
    boutonActionDeroulant.addEventListener("click", function () {
        menuDeroulantContent.classList.toggle("showMenuAvecFleche");
        flecheIconeMenu.classList.toggle("rotate");

        // Ajout de la classe "rotate" si le menu est déplié
        if (menuDeroulantContent.classList.contains("showMenuAvecFleche")) {
            flecheIconeMenu.classList.add("rotate");
        } else {
            flecheIconeMenu.classList.remove("rotate");
        }
    });


    // Gestionnaire d'événement pour la fermeture du menu déroulant lors d'un clic en dehors
    document.addEventListener("click", function (event) {
        // Obtient l'élément ciblé par l'événement
        const elementCible = event.target;

        // Vérifie si l'élément ciblé n'est pas un descendant de la classe "menuDeroulant"
        // et ne contient pas la classe "BoutonActionDeroulant"
        if (
            !elementCible.closest(".menuDeroulant") &&
            !elementCible.classList.contains("BoutonActionDeroulant")
        ) {
            // Retire la classe "showMenuAvecFleche" du contenu du menu déroulant
            menuDeroulantContent.classList.remove("showMenuAvecFleche");

            // Retire la classe "rotate" de l'icône de flèche du menu
            flecheIconeMenu.classList.remove("rotate");
        }

    });
}

// Affichage des photos via le menu déroulant après chaque tri effectué
function afficherListeMedia(listeMedia, currentPhotographerName) {
    let htmlPhoto = document.getElementById("phPhoto")
    htmlPhoto.innerHTML = ''
    for (let i = 0; i < listeMedia.length; i++) {
        let afficherPhotoTrier = afficherCartePhoto(listeMedia[i], currentPhotographerName, listeMedia)
        htmlPhoto.appendChild(afficherPhotoTrier)
    }
}

/**
 * Factory qui gere l'affichage des medias (photo ou video)
 * @param {media} media 
 * @param {string} nomPhotographe
 * @return HtmlElement : l'élement html (balise video ou balise image)
 */
function mediaFactory(media, nomPhotographe) {

    if (media.image != undefined) {
        let photoImg = document.createElement("img")
        photoImg.setAttribute("src", "images/" + nomPhotographe + '/' + media.image);
        photoImg.setAttribute("alt", "Image de " + nomPhotographe);
        photoImg.setAttribute("aria-label", "Image de " + nomPhotographe);

        photoImg.classList.add("photoImg")
        return photoImg
    }
    else {
        let baliseVideo = document.createElement('video')
        baliseVideo.setAttribute("src", "images/" + nomPhotographe + '/' + media.video);
        baliseVideo.setAttribute("aria-label", "Vidéo de " + nomPhotographe);
        baliseVideo.setAttribute("controls", "");

        baliseVideo.classList.add("photoImg")
        return baliseVideo
    }
}


/**
 * Affichage d'une carte "photo" d'un photographe (c'est à dire photo + titre + likes)
 * @param {media} media 
 * @param {string} nomPhotographe 
 */
function afficherCartePhoto(media, nomPhotographe, listeMedia) {

    // Création des éléments de la page
    let photoCard = document.createElement("div")
    let textLikeDiv = document.createElement("div")
    let photoText = document.createElement("h3")
    let textIconeDiv = document.createElement("div")
    let textLike = document.createElement("p")
    let iconeLike = document.createElement("i")

    // Variable spécialement créée pour la factory
    let baliseMedia = mediaFactory(media, nomPhotographe)
    photoCard.appendChild(baliseMedia)

    // Quand on clique sur la popup, ça appelle la fonction "openPopup"
    baliseMedia.addEventListener("click", (event) => {
        window.scrollTo(0, 0)
        document.body.style.overflow = "hidden";
        openPopup(event.target.src, nomPhotographe, listeMedia);
    });

    // Gestion de la navigation clavier
    baliseMedia.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden";
            openPopup(event.target.src, nomPhotographe, listeMedia);
        }
    })
    iconeLike.addEventListener("click", replaceIcone)

    // Édition et modification des éléments de la page
    photoText.innerText = media.title
    textLike.innerText = media.likes

    // Gestion de la navigation clavier
    baliseMedia.tabIndex = 1;
    iconeLike.tabIndex = 1;
    iconeLike.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            console.log("je suis fonctionnel");
            replaceIcone()
        }
    })

    // Gestion des likes et des dislikes pour les images
    var clickCount = 0
    function replaceIcone() {
        if (clickCount == 1) {
            // cas ou on dislike
            iconeLike.classList.remove("fa-solid")
            iconeLike.classList.add("fa-regular")
            textLike.innerText = media.likes
            totalLikeText.innerText = Number(totalLikeText.innerText) - 1
            clickCount = 0

            // Ajout de l'attribut aria-label pour indiquer le statut actuel
            iconeLike.setAttribute("aria-label", "Dislike");
        }
        else {
            //cas ou on like
            iconeLike.classList.remove("fa-regular")
            iconeLike.classList.add("fa-solid")
            textLike.innerText = media.likes + 1
            let totalLikeText = document.getElementById("totalLikeText")
            totalLikeText.innerText = Number(totalLikeText.innerText) + 1
            clickCount++;

            // Ajout de l'attribut aria-label pour indiquer le statut actuel
            iconeLike.setAttribute("aria-label", "Like");
        }
    }

    // Ajout des classes CSS aux éléments de la page
    photoCard.classList.add("photoCard")
    textLikeDiv.classList.add("textLikeDiv")
    photoText.classList.add("photoText")
    textLike.classList.add("textLike")
    textIconeDiv.classList.add("textIconeDiv")
    iconeLike.className = " iconeLike fa-regular fa-heart"

    // Intégration des éléments dans la structure de la page
    photoCard.appendChild(textLikeDiv)
    textLikeDiv.appendChild(photoText)
    textLikeDiv.appendChild(textIconeDiv)
    textIconeDiv.appendChild(textLike)
    textIconeDiv.appendChild(iconeLike)
    return photoCard
}



/**
  * Cette fonction ouvre la popup quand on a cliqué sur une image
  * @param {string} urlImage : l'url de l'image sur laquelle on a cliqué pour ouvrir la popup
  * @param {string} nomPhotographe : le nom du photographe courant
  * @param {array[media]} listeMedia : la liste des médias du photographe courant
  */
function openPopup(urlImage, nomPhotographe, listeMedia) {
    let numeroImageDisplay = 0
    const myPopup = document.getElementById("popup");
    myPopup.style.display = "flex";

    // Création des éléments de la page
    let iconeFlech = document.createElement("i");
    let iconeFlechG = document.createElement("i");
    let iconeFlechCroix = document.createElement("div");
    let whiteElementFlech = document.createElement("span");
    let iconeCroix = document.createElement("i");

    // Intégration des éléments dans la structure de la page
    myPopup.appendChild(iconeFlech);
    iconeFlechCroix.appendChild(whiteElementFlech);
    iconeFlechCroix.appendChild(iconeFlechG);
    iconeFlechCroix.appendChild(iconeCroix);

    // Ajout des classes CSS aux éléments de la page
    iconeFlechCroix.classList.add("iconeFlechCroix");
    iconeFlech.className = " iconeFlech fa-solid fa-chevron-left";
    iconeFlechG.className = ' iconeFlech fa-solid fa-chevron-right';
    iconeCroix.className = 'iconeCroix fa-solid fa-xmark';
    whiteElementFlech.classList.add("whiteElementFlech");


    // Gestion de la navigation clavier (esc)
    document.addEventListener("keyup", function (event) {
        if (event.key === "Escape") {
            document.body.style.overflow = "auto";
            closePopup()
        }
    })



    // fleche gauche
    // Fonction pour passer à l'image suivante
    function passerImageSuivante() {
        let PhotoDePopup = document.querySelectorAll(".photoPopup");

        // On ajoute le numéro de l'image affichée pour passer à la suivante
        numeroImageDisplay++;

        // Si on est arrivé à la fin de la liste, on revient au début
        if (numeroImageDisplay >= PhotoDePopup.length) {
            numeroImageDisplay = 0;
        }

        // Boucle pour ajouter/enlever la classe photoPopupDisplay en fonction de l'image affichée
        for (let i = 0; i < PhotoDePopup.length; i++) {
            if (i === numeroImageDisplay) {
                PhotoDePopup[i].classList.add("photoPopupDisplay");
            } else {
                PhotoDePopup[i].classList.remove("photoPopupDisplay");
            }
        }
    }

    // Écouteur d'événement pour le clic sur la flèche
    iconeFlech.addEventListener("click", passerImagePrecedente);
    iconeFlech.setAttribute("aria-label", "Passer à l'image suivante");


    // Écouteur d'événement pour la touche "Flèche gauche"
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            iconeFlech.setAttribute("aria-label", "Passer à l'image précédente");
            passerImagePrecedente();
        }
    });




    // fleche droite
    // Fonction pour passer à l'image précédente
    function passerImagePrecedente() {
        let PhotoDePopup = document.querySelectorAll(".photoPopup");

        // On diminue le numéro de l'image affichée pour passer à la précédente
        numeroImageDisplay--;

        // Si on est arrivé au début de la liste, on revient à la fin
        if (numeroImageDisplay < 0) {
            numeroImageDisplay = PhotoDePopup.length - 1;
        }

        // Boucle pour ajouter/enlever la classe photoPopupDisplay en fonction de l'image affichée
        for (let i = 0; i < PhotoDePopup.length; i++) {
            if (i === numeroImageDisplay) {
                PhotoDePopup[i].classList.add("photoPopupDisplay");
            } else {
                PhotoDePopup[i].classList.remove("photoPopupDisplay");
            }
        }
    }

    // Écouteur d'événement pour le clic sur la flèche droite
    iconeFlechG.addEventListener("click", passerImageSuivante);
    iconeFlechG.setAttribute("aria-label", "Passer à l'image suivante");

    // Écouteur d'événement pour la touche "Flèche droite"
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            iconeFlechG.setAttribute("aria-label", "Passer à l'image suivante");
            passerImageSuivante();
        }
    });




    // Factory qui gère l'affichage des medias de la popup (photo ou video)
    function popupMediaFactory(nomPhotographe, urlImage, listeMedia) {
        let photoPopup;
        let videoPopup;

        for (let i = 0; i < listeMedia.length; i++) {
            if (listeMedia[i].image !== undefined) {
                photoPopup = document.createElement("img");
                myPopup.appendChild(photoPopup);
                photoPopup.classList.add("photoPopup");
                photoPopup.setAttribute("src", "images/" + nomPhotographe + '/' + listeMedia[i].image);
                photoPopup.setAttribute("alt", "Image dans la popup de " + nomPhotographe);
                photoPopup.setAttribute("aria-label", "Image de " + nomPhotographe);
            } else {
                videoPopup = document.createElement("video");
                myPopup.appendChild(videoPopup);
                videoPopup.classList.add("photoPopup");
                videoPopup.setAttribute("src", "images/" + nomPhotographe + '/' + listeMedia[i].video);
                videoPopup.setAttribute("alt", "Vidéo de " + nomPhotographe);
                videoPopup.setAttribute("aria-label", "Vidéo dans la popup de " + nomPhotographe);
                videoPopup.setAttribute('controls', '');
            }

            if (urlImage.indexOf(listeMedia[i].image) !== -1) {
                photoPopup.classList.add("photoPopupDisplay");
                numeroImageDisplay = i;
            }

            if (urlImage.indexOf(listeMedia[i].video) !== -1) {
                videoPopup.classList.add("photoPopupDisplay");
                numeroImageDisplay = i
            }

        }
    }
    popupMediaFactory(nomPhotographe, urlImage, listeMedia);

    // Gestion de l'icône de fermeture de la popup
    myPopup.appendChild(iconeFlechCroix);
    iconeCroix.addEventListener("click", (event) => {
        document.body.style.overflow = "auto"
        iconeFlechCroix.setAttribute("aria-label", "Fermer la popup");
        closePopup(event.target.src);
    });

    // Gestion efficace de la fermeture de la popup
    function closePopup() {
        myPopup.style.display = '';
        myPopup.innerHTML = '';
    }

}


/**
 * Affichage du nombre total de likes et du prix du photographe
 * @param {int} nbTotalLikes 
 * @param {int} pricePhotographe 
 */
function dataGlobalPhotographe(nbTotalLikes, pricePhotographe) {
    let totalLikeText = document.getElementById("totalLikeText")
    let priceDayPhoto = document.getElementById("priceDayPhoto")

    totalLikeText.innerText = nbTotalLikes
    priceDayPhoto.innerText = pricePhotographe + "$ / Jours"
}



// Optimisation de l'affichage global de la page du photographe via une fonction globale
async function afficherPage() {

    //Lecture des param de l'url
    let searchParams = new URLSearchParams(window.location.search)
    let idPhotographe = searchParams.get("id")

    /**********************************************
     * Affichage du header
     *********************************************/

    // On recupère le photographe courant : 
    let photographeCourant = await getPhotographe(idPhotographe)

    // On affiche le photographe courant dans le html
    afficherPhotographe(photographeCourant)


    /************************************************
     * Affichage de la liste des medias
     **********************************************/


    // On recupère la liste des medias du photographe courant
    let listeMedia = await getListeMedia(idPhotographe)
    let listeMediaTriee = listeMedia.sort((a, b) => b.likes - a.likes);

    // On affiche la liste des medias du photographe courant dans le html
    afficherListeMedia(listeMediaTriee, photographeCourant.name)

    /************************************************
     * Affichage de la liste des likes
     **********************************************/

    // On affiche le nombre total de likes et le prix du photographe courant
    // Recupération du nombre total de likes
    let totalLikesPhotographe = getTotalLikePhotographe(listeMedia)
    dataGlobalPhotographe(totalLikesPhotographe, photographeCourant.price)

    /************************************************
     * Affichage de la liste de la liste deroulante
     **********************************************/
    afficherMenuDeroulant(listeMedia, photographeCourant.name)

}
// Déploiement de la fonction specifique
afficherPage()
