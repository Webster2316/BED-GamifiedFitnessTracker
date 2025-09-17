
document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModalBtn");
  const userInputModal = new bootstrap.Modal(document.getElementById("userInputModal"));
  const completionForm = document.getElementById("completionForm");
  const userInfo = document.getElementById("userInfo");

  openModalBtn.addEventListener("click", () => userInputModal.show());

  completionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user input
    const challengeId = document.getElementById("challenge_id").value;
    const userId = document.getElementById("user_id").value;
    const completed = document.getElementById("completed").value;
    const creationDate = document.getElementById("creation_date").value;
    const notes = document.getElementById("notes").value;

    // Create card element
    const card = document.createElement("div");
    card.className = "card mb-3";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">
          <a href="index.html?challenge_id=${challengeId}" class="text-primary">
            Challenge ID: ${challengeId}
          </a>
        </h5>
        <p class="card-text"><strong>User ID:</strong> ${userId}</p>
        <p class="card-text"><strong>Completed:</strong> ${completed}</p>
        <p class="card-text"><strong>Date:</strong> ${creationDate}</p>
        <p class="card-text"><strong>Notes:</strong> ${notes}</p>
        <button class="btn btn-danger delete-btn">Delete</button>
      </div>
    `;

    // Append card to userInfo section
    userInfo.appendChild(card);

    // Close modal
    userInputModal.hide();

    // Clear form fields
    completionForm.reset();

    // Add delete functionality
    card.querySelector(".delete-btn").addEventListener("click", () => {
      card.remove();
    });
  });
});

