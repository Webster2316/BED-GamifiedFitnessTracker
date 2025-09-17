document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("challengeForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from reloading page
  
      const challengeName = document.getElementById("challengeName").value;
      const skillpoints = document.getElementById("skillpoints").value;
      const userId = 1; // Replace with actual logged-in user ID
  
      if (!challengeName || !skillpoints) {
        alert("Please fill in all fields.");
        return;
      }
  
      const data = {
        challenge: challengeName,
        skillpoints: skillpoints,
        user_id: userId
      };
  
      // Use currentUrl + "/challenges"
      fetchMethod(currentUrl + "/challenges", handleResponse, "POST", data);
  
      function handleResponse(status, response) {
        if (status === 201) {
          alert("Challenge Created Successfully!");
          form.reset(); // Clear form fields
          closeModal(); // Close modal after submission
        } else {
          alert("Error creating challenge.");
        }
      }
    });
  
    function closeModal() {
      const challengeModal = bootstrap.Modal.getInstance(document.getElementById("challengeModal"));
     challengeModal.hide();
    }
  });