const baseUrl = "http://localhost:8000/api/v1/titles/"

/* Get the button that opens the modal */
var btn = document.getElementById("openModalButton");

/* When the user clicks on the button, open the modal */
/* btn.setAttribute("onClick", 'openModal("9")') */

fetchBestFilm()

var imdbSortEndpoint = "?sort_by=-imdb_score"
var pageEndpoint = "&page=1"
var genreEndpoint = "&genre="

var url = baseUrl + imdbSortEndpoint + pageEndpoint + genreEndpoint
buildCarousel(baseUrl, "adventure", "best-rated-films")