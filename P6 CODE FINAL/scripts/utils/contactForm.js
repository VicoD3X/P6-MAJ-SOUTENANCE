function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    modal.style.position = "absolute";
    modal.style.top = "50px";
    modal.style.left = "50px";
    modal.style.right = "50px";
    modal.style.bottom = "50px";

    let baliseTitleH2 = document.querySelector(".phd_title")
    let contactTitle = document.getElementById("contactTitleID");
    contactTitle.innerText = "Contactez-moi " + baliseTitleH2.textContent;
    contactTitle.setAttribute("aria-label", "Titre du formulaire de contact");

}

const regexInputPrenom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

const inputPrenom = document.getElementById("prenom");
const alertPrenom = document.getElementById("alertPrenom");

inputPrenom.addEventListener('change', function (event) {
    checkInputPrenom(event.target);
});

function checkInputPrenom(inputPrenom) {
    if (inputPrenom.value.match(regexInputPrenom)) {
        alertPrenom.style.display = "none";
        inputPrenom.style.border = "2px solid #0A2A5E";
        console.log("Prénom valide : " + inputPrenom.value);
        inputPrenom.setAttribute("aria-invalid", "false");
        return true;
    } else {
        alertPrenom.style.display = "inline";
        alertPrenom.innerHTML = "Veuillez entrer un prénom valide.";
        alertPrenom.style.fontSize = "14px";
        alertPrenom.style.fontWeight = "800"
        alertPrenom.style.color = "red";
        inputPrenom.style.border = "4px solid red";
        console.log("Prénom invalide : " + inputPrenom.value);
        inputPrenom.setAttribute("aria-invalid", "true");
        inputPrenom.setAttribute("aria-describedby", "alertPrenom");
        return false;
    }
}





const regexInputNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

const inputNom = document.getElementById("nom");
const alertNom = document.getElementById("alertNom");

inputNom.addEventListener('change', function (event) {
    checkInputNom(event.target);
});

function checkInputNom(inputNom) {
    if (inputNom.value.match(regexInputNom)) {
        alertNom.style.display = "none";
        inputNom.style.border = "2px solid #0A2A5E";
        console.log("Nom valide : " + inputNom.value);
        inputNom.setAttribute("aria-invalid", "false");
        return true;
    } else {
        alertNom.style.display = "inline";
        alertNom.innerHTML = "Veuillez entrer un nom valide.";
        alertNom.style.fontSize = "14px";
        alertNom.style.fontWeight = "800"
        alertNom.style.color = "red";
        inputNom.style.border = "4px solid red";
        console.log("Nom invalide : " + inputNom.value);
        inputNom.setAttribute("aria-invalid", "true");
        inputNom.setAttribute("aria-describedby", "alertNom");
        return false;
    }
}







const regexInputMail = /^[^@\s]+@(?!.*(?:\.eu|\.io)$)[a-zA-Z]+\.[a-zA-Z]{2,3}$/


const inputMail = document.getElementById("email");
const alertMail = document.getElementById("alertMail");

inputMail.addEventListener('change', function (event) {
    checkInputMail(event.target);
});

function checkInputMail(inputMail) {
    if (inputMail.value.match(regexInputMail)) {
        alertMail.style.display = "none";
        inputMail.style.border = "2px solid #0A2A5E";
        console.log("Adresse e-mail valide : " + inputMail.value);
        inputMail.setAttribute("aria-invalid", "false");
        return true;
    } else {
        alertMail.style.display = "inline";
        alertMail.innerHTML = "Veuillez entrer un mail valide.";
        alertMail.style.fontSize = "14px";
        alertMail.style.fontWeight = "800"
        alertMail.style.color = "red";
        inputMail.style.border = "4px solid red";
        console.log("Adresse e-mail invalide : " + inputMail.value);
        inputMail.setAttribute("aria-invalid", "true");
        inputMail.setAttribute("aria-describedby", "alertMail");
        return false;
    }
}






const regexMessage = /^[a-zA-Z0-9\s.,!?']{1,100}$/;

const inputMessage = document.getElementById("message");
const alertMessage = document.getElementById("alertMessagePerso");

inputMessage.addEventListener('change', function (event) {
    checkInputMessage(event.target);
});

function checkInputMessage(inputMessage) {
    if (regexMessage.test(inputMessage.value)) {
        alertMessage.style.display = "none";
        inputMessage.style.border = "2px solid #0A2A5E";
        console.log("Message valide : " + inputMessage.value);
        inputMessage.setAttribute("aria-invalid", "false");
        return true;
    } else {
        alertMessage.style.display = "inline";
        alertMessage.innerHTML = "Votre message ne doit contenir que des caractères alphanumériques et certains caractères spéciaux.";
        alertMessage.style.fontSize = "14px";
        alertMessage.style.fontWeight = "800"
        alertMessage.style.color = "red";
        inputMessage.style.border = "4px solid red";
        console.log("Message invalide : " + inputMessage.value);
        inputMessage.setAttribute("aria-invalid", "true");
        inputMessage.setAttribute("aria-describedby", "alertMessage");
        return false;
    }
}









let baliseForm = document.querySelector(".modal form")
baliseForm.addEventListener('submit', function (event) {
    const inputMessage = document.getElementById("message");
    const inputMail = document.getElementById("email");
    const inputNom = document.getElementById("nom");
    const inputPrenom = document.getElementById("prenom");
    event.preventDefault()
    checkInputMessage(inputMessage)
    checkInputMail(inputMail)
    checkInputNom(inputNom)
    checkInputPrenom(inputPrenom)
})



function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute("aria-label", "Fermer la fenêtre de contact");
}

