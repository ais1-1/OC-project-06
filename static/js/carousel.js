async function fetchInfo(url) {
    const response = await fetch(url);
    const results = await response.json();

    return results.results
}


async function fetchPaginatedCarouselInfo(categoryName, numberOfFilms=7) {
    
    const imdbSortEndpoint = "?sort_by=-imdb_score";
    const genreEndpoint = "&genre=";
    let filmData = new Array;
    let pageNumber = 1;

    while (filmData.length < numberOfFilms) {
        let fetchedFilmData = new Array;
        let pageEndpoint = "&page=" + pageNumber.toString();
        let url =  baseUrl + imdbSortEndpoint + pageEndpoint + genreEndpoint + categoryName;

        fetchedFilmData = await fetchInfo(url);
        filmData.push.apply(filmData, fetchedFilmData);
        pageNumber++;

    }
    if (categoryName === "") {
        filmData.shift();
    }

    filmData = filmData.slice(0, numberOfFilms);

    return filmData;


    /* resultsArray.forEach((result) => {
        Object.entries(result).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    }); */
    
}

async function buildCarousel(categoryName, className, numberOfFilms=7) {
    let carouselSection = document.querySelector(`.${className}`);

    const filmData = fetchPaginatedCarouselInfo(categoryName);

    (await filmData).forEach((film, i) => {
        let carousel = carouselSection.querySelector(".carousel-container");

        let filmBox = carousel.querySelector(".film-box");
        filmBox.setAttribute("id", `${categoryName}${i}`);
        carousel.appendChild(filmBox);

        let filmCover = document.createElement('img');
        filmCover.setAttribute("alt", film.title);
        filmCover.src = film.image_url;
        filmBox.appendChild(filmCover);


        let filmId = film.id;
        filmCover.setAttribute("onClick", `openModal("${filmId}")`);
    });

}

