const baseUrl = "http://localhost:8000/api/v1/titles/"

var imdbSortEndpoint = "?sort_by=-imdb_score"
var pageEndpoint = "&page=1"
var genreEndpoint = "&genre="

window.addEventListener('load', () => {
    buildCarousel("", "best-rated-films");
    buildCarousel("adventure", "adventure-films");
    buildCarousel("comedy", "comedy-films");
    buildCarousel("fantasy", "fantasy-films");
    
    fetchBestFilm();
})
