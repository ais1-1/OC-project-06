function fetchModalInfo(id) {
  let cover = document.getElementById("modalCover");

  let title = document.getElementById("modalFilmTitle");
  let genre = document.getElementById("modalGenre");
  let year = document.getElementById("modalDate");
  let duration = document.getElementById("modalDuration");
  let rated = document.getElementById("modalRated");
  let imdb_score = document.getElementById("modalImdb");

  let dircetor = document.getElementById("modalDirector");
  let cast = document.getElementById("modalCast");
  let country = document.getElementById("modalCountry");
  let boxOffice = document.getElementById("modalBoxOffice");
  let synopsis = document.getElementById("modalSynopsis");

  fetch(baseUrl + id)
  .then((response) => response.json())
  .then((data => {
    cover.src = data["image_url"];
    
    title.innerHTML = data["title"];
    genre.innerHTML = data["genres"];
    year.innerHTML = data["year"];
    duration.innerHTML = data["duration"] + "min";
    imdb_score.innerHTML = data["imdb_score"] + "/10";

    /* If rated is a number show "+" in the end */
    if (isNaN(data["rated"])) {
      rated.innerHTML = data["rated"];
    } else {
      rated.innerHTML = data["rated"] + "+";
    }
    

    dircetor.innerHTML = data["directors"];
    cast.innerHTML = data["actors"] + "...";
    country.innerHTML = data["countries"];

    /* If box office and synopsis values are null add placeholder: "Info manquante" */
    if (data["worldwide_gross_income"] == null) {
      boxOffice.innerHTML = "Info manquante";
    } else {
      boxOffice.innerHTML = data["worldwide_gross_income"] + " " + data["budget_currency"];
    }

    if (data["long_description"]) {
      synopsis.innerHTML = data["long_description"];
    } else {
      synopsis.innerHTML = "Info manquante"
    }
    
  }));

}


function openModal(id) {
  /* Get the modal */
  let modal = document.getElementById("filmModal");
  /* Get the <span> that closes the modal */
  let span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  fetchModalInfo(id);

  /* When the user clicks on <span> (x), close the modal */
  span.onclick = function() {
    modal.style.display = "none";
  }

  /* When the user clicks anywhere outside of the modal, close it */
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 

}




