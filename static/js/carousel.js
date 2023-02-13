async function fetchInfo(url) {
    const response = await fetch(url);
    const results = await response.json();

    return results.results
}


async function fetchPaginatedCarouselInfo(baseUrl, categoryName, numberOfFilms=7) {
    
    const imdbSortEndpoint = "?sort_by=-imdb_score";
    const genreEndpoint = "&genre=";
    let filmData = new Array;
    let pageNumber = 1;

    while (filmData.length < numberOfFilms) {
        let fetchedFilmData = new Array;
        let pageEndpoint = "&page=" + pageNumber.toString();
        let url =  baseUrl + imdbSortEndpoint + pageEndpoint + genreEndpoint + categoryName;
        console.log(url);
        fetchedFilmData = await fetchInfo(url);
        filmData.push.apply(filmData, fetchedFilmData);
        console.log(filmData.length, " filmData: ",fetchedFilmData, " final : ", filmData );
        pageNumber++;

    }

    filmData = filmData.slice(0, numberOfFilms);

    return filmData;


    /* resultsArray.forEach((result) => {
        Object.entries(result).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    }); */
    
}

async function buildCarousel(baseUrl, categoryName, className, numberOfFilms=7) {

    const filmData = fetchPaginatedCarouselInfo(baseUrl, categoryName);

    (await filmData).forEach((film) => {
        console.log(film["id"])
    });

}

