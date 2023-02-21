const baseUrl = "http://localhost:8000/api/v1/titles/";

window.addEventListener('load', () => {
    fetchBestFilm();

    buildCarousel("", "best-rated-films");
    buildCarousel("adventure", "adventure-films");
    buildCarousel("comedy", "comedy-films");
    buildCarousel("fantasy", "fantasy-films");
})
