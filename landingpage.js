var currentPage = 1;

        function fetchUsers(page) {
            fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)
                .then(response => response.json())
                .then(data => {
                    populateUserGrid(data.data);
                    updatePagination(data.total_pages);
                })
                .catch(error => console.log(error));
        }

        function populateUserGrid(users) {
            var userGrid = document.getElementById("user-grid");
            userGrid.innerHTML = "";

            users.forEach(user => {
                var userCard = document.createElement("div");
                userCard.classList.add("card");
                userCard.innerHTML = `
      <img src="${user.avatar}" class="card-img-top" alt="User Avatar">
      <div class="card-body">
        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
        <p class="card-text">${user.email}</p>
      </div>
    `;
                userGrid.appendChild(userCard);
            });
        }

        function updatePagination(totalPages) {
            var pagination = document.getElementById("pagination");
            pagination.innerHTML = "";

            var previousButton = document.createElement("li");
            previousButton.classList.add("page-item");
            previousButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>`;
            pagination.appendChild(previousButton);

            for (var i = 1; i <= totalPages; i++) {
                var pageItem = document.createElement("li");
                pageItem.classList.add("page-item");
                if (i === currentPage) {
                    pageItem.classList.add("active");
                }
                pageItem.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
                pagination.appendChild(pageItem);
            }

            var nextButton = document.createElement("li");
            nextButton.classList.add("page-item");
            nextButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>`;
            pagination.appendChild(nextButton);

            var previousPageButton = document.querySelector(".page-item:first-child");
            var nextPageButton = document.querySelector(".page-item:last-child");

            if (currentPage === 1) {
                previousPageButton.classList.add("disabled");
            } else {
                previousPageButton.classList.remove("disabled");
            }

            if (currentPage === totalPages) {
                nextPageButton.classList.add("disabled");
            } else {
                nextPageButton.classList.remove("disabled");
            }
        }

        function changePage(page) {
            if (page < 1) {
                return;
            }
            currentPage = page;
            fetchUsers(currentPage);
        }
        fetchUsers(currentPage);