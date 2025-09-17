
const callback = (responseStatus, responseData) => {
  console.log("responseStatus:", responseStatus);
  console.log("responseData:", responseData);

  const pokemonList = document.getElementById("challengeList");
  responseData.forEach((challenge) => {
    const displayItem = document.createElement("div");
    displayItem.className =
      "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3";
    displayItem.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">ID: ${challenge.challenge_id}</h5>
                <p class="card-text">
                   creator_id: ${challenge.creator_id} <br>
                   skillpoints: ${challenge.skillpoints} <br>
                   challenge: ${challenge.challenge} <br>
                </p>
                <button class="btn btn-secondary update-button" data-id="${challenge.challenge_id}" data-challenge="${challenge.challenge}" data-skillpoints="${challenge.skillpoints}">
                  Update
                </button>
                 <button class="btn btn-danger delete-button" 
                  data-id="${challenge.challenge_id}">
                  Delete
                </button>
            </div>
        </div>
        `;
    pokemonList.appendChild(displayItem);
  });

  // Add event listeners to all update buttons
  document.querySelectorAll(".update-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const challengeId = e.target.getAttribute("data-id");
      const challengeText = e.target.getAttribute("data-challenge");
      const skillpoints = e.target.getAttribute("data-skillpoints");

      // Populate modal inputs
      document.getElementById("challengeName").value = challengeText;
      document.getElementById("skillpoints").value = skillpoints;

      // Set modal save behavior
      document.getElementById("challengeForm").onsubmit = (event) => {
        event.preventDefault();
        const updatedChallenge = document.getElementById("challengeName").value;
        const updatedSkillpoints = document.getElementById("skillpoints").value;

        // Implement your update logic here (e.g., send an API request to update the challenge)
        console.log(`Updating challenge ${challengeId} with:`, updatedChallenge, updatedSkillpoints);

        // Close modal after updating
        const modalElement = document.querySelector("#challengeModal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
      };

      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById("challengeModal"));
      modal.show();
    });
  });
  // Add event listeners to all delete buttons
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const challengeId = e.target.getAttribute("data-id");

      // Confirmation before deletion
      if (confirm("Are you sure you want to delete this challenge?")) {
        // Your delete logic here (e.g., API request to delete the challenge)
        console.log(`Deleting challenge ID: ${challengeId}`);

        // Optionally remove the card immediately (if server response isn't needed)
        e.target.closest(".col-xl-2").remove();
      }
    });
  });
};

 fetchMethod(currentUrl + "/challenges", callback);