const callback = (responseStatus, responseData) => {
    console.log("responseStatus:", responseStatus);
    console.log("responseData:", responseData);
  
    const reviewList = document.getElementById("reviewList");
    responseData.forEach((review) => {
      const displayItem = document.createElement("div");
      displayItem.className =
        "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3";
      displayItem.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">ID: ${review.id}</h5>
                  <p class="card-text">
                    rating: ${review.review_amt} <br>
                    user_id: ${review.user_id} <br>
                  </p>
              </div>
          </div>
          `;
      reviewList.appendChild(displayItem);
    });
  };
  
  fetchMethod(currentUrl + "/review", callback);