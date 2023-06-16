/*************************************************
 * Fichier permettant de gérer les données
 *************************************************/

/**
 * Cette fonction retourne toutes les données. 
 * @returns Contenu du fichier data.json
 */
async function getContenuJson() {
    return await fetch("data.json").then(response => {
        return response.json()
    }).then(data => {
        return data
    })
}

/**
 * Cette fonction retourne la liste des photographes
 * @returns Liste des photographes
 */
async function getListePhotographe() {
    let data = await getContenuJson()
    return data.photographers
}

/**
 * Cette fonction retourne un photographe en fonction de son id
 * @param {int} id 
 * @returns un objet photographe (qui contient toutes les informations du photographe)
 */
async function getPhotographe(id) {
    let data = await getContenuJson()
    return data.photographers.find(photographer => photographer.id == id)
}

/**
 * Cette fonction retourne la liste des médias
 * @param {int} idPhotographe 
 * @returns la liste des medias
 */
async function getListeMedia(idPhotographe) {
    let data = await getContenuJson()
    return data.media.filter(media => media.photographerId == idPhotographe)
}


/**
 * Cette fonction prend une liste de media et additionne les likes pour savoir combien il en a au total
 * @param {array[media]} listeMedia 
 * @returns : le total de like
 */
function getTotalLikePhotographe(listeMedia) {
    let totalLikes = 0
    for (media of listeMedia) {
        totalLikes += parseInt(media.likes) // totalLikes = totalLikes + parseInt(media.likes)
    }
    return totalLikes
}