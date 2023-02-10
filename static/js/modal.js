
function openModal(id) {
  console.log("clicked")
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

/* Test */

function fetchModalInfo(id) {
  fetch(baseUrl + id)
  .then((response) => response.json())
  .then((data) => console.log(data["title"]));

}

