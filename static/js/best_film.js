/* Fetch info of the best film and fill the index page fields. */
function bestFilmInfo(id) {
    let bestFilmTitle = document.getElementById("bestFilmTitle");
    let bestFilmCover = document.getElementById("bestFilmCover");
    let bestFilmSynopsis = document.getElementById("bestFilmSynopsis");

    fetch(baseUrl + id)
        .then(response => response.json())
        .then(data => {
            bestFilmTitle.innerHTML = data["title"];
            bestFilmCover.src = data["image_url"];
            bestFilmSynopsis.innerHTML = data["description"];
        })

}


/* Fetch the best film id and set the modal button. */
function fetchBestFilm() {
    let filmId = 0;
    let btn = document.getElementById("openModalButton");

    fetch(baseUrl + "?sort_by=-imdb_score")
        .then(response => response.json())
        .then(data => {
            filmId = data["results"][0]["id"];
            bestFilmInfo(filmId);
            btn.setAttribute("onClick", `openModal("${filmId}")`);
        })

}