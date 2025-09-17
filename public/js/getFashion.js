


const outfitImages = [
  "outfit1.jpg", "outfit2.jpg", "outfit3.jpg",
  "outfit4.jpg", "outfit5.jpg", "outfit6.jpg",
  "outfit7.jpg", "outfit8.jpg", "outfit9.jpg",
  "outfit10.jpg", "outfit11.jpg", "outfit12.jpg"
];

const outfitList = document.getElementById("outfitList");

const callback = (responseStatus, responseData) => {
  console.log("responseStatus:", responseStatus);
  console.log("responseData:", responseData);

  responseData.forEach((fashionStyle, index) => {
    // Use the corresponding image from outfitImages array
    const imageSrc = outfitImages[index % outfitImages.length];

    const displayItem = document.createElement("div");
    displayItem.className = "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3";

    displayItem.innerHTML = `
        <div class="card">
          <img src="image/${imageSrc}" class="card-img-top" alt="Fashion Image">
          <div class="card-body">
              <h5 class="card-title">ID: ${fashionStyle.clothing_id}</h5>
              <p class="card-text">
                Style: ${fashionStyle.style} <br>
                Item: ${fashionStyle.item} <br>
                Skillpoints: ${fashionStyle.skillpoints} <br>
              </p>
              <button class="btn btn-primary buy-button" data-id="${fashionStyle.clothing_id}">
                Buy
              </button>
          </div>
        </div>
    `;

    outfitList.appendChild(displayItem);
  });

  // Add event listeners for all buy buttons
  document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", function () {
      const clothingId = this.getAttribute("data-id");
      buyFashionStyle(clothingId);
    });
  });
};

fetchMethod(currentUrl + "/game/styles", callback);


///////////////////for create player
document.getElementById('createPlayerButton').addEventListener('click', function() {
  const playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
  playerModal.show();
});

// Handle form submission
document.getElementById('createPlayerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const playerName = document.getElementById('playerName').value;
  const playerAge = document.getElementById('playerAge').value;

  // Send data to the server using axios
  axios.post('/api/createPlayer', {
    name: playerName,
    age: playerAge
  })
  .then(response => {
    console.log(response.data);
    alert('Player created successfully!');
    // Close the modal after successful creation
    const playerModal = bootstrap.Modal.getInstance(document.getElementById('playerModal'));
    playerModal.hide();
  })
  .catch(error => {
    console.error(error);
    alert('Error creating player');
  });
});
fetchMethod(currentUrl + "/game/player/${userId}", callback);