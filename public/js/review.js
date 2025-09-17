
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reviewForm");
    const reviewsContainer = document.getElementById("reviewsContainer");
    const stars = document.querySelectorAll(".star");
    let selectedRating = 0;

    // Handle star selection
    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            document.getElementById("review_amt").value = selectedRating;
            updateStars(selectedRating);
        });
    });

    // Function to update star visuals
    function updateStars(rating) {
        stars.forEach(star => {
            star.classList.remove("active");
            if (star.getAttribute("data-value") <= rating) {
                star.classList.add("active");
            }
        });
    }
    

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const review_amt = document.getElementById("review_amt").value;
        const user_id = document.getElementById("user_id").value;

        if (review_amt === "0") {
            alert("Please select a star rating.");
            return;
        }

        console.log("Form submitted!");
        console.log("User ID:", user_id);
        console.log("Review Amount:", review_amt);

        // Reset form and stars
        form.reset();
        selectedRating = 0;
        updateStars(0); 

        // Show success pop-up
        alert("Submission Successful! ⭐");
    });

    reviewsContainer.appendChild(reviewElement);

   
});

