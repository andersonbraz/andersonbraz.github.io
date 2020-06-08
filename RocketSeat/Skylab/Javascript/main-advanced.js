function buscar() {
  var inputElement = document.querySelector("#username");
  var listElement = document.querySelector(".card .list-group");
  var username = inputElement.value;

  if (username.length > 0) {
    listElement.innerHTML = "";

    axios
      .get("https://api.github.com/users/" + username + "/repos")
      .then(function (response) {
        
        var repos = response.data;

        for (repo of repos) {
          
            var itemElement = document.createElement("li");

            itemElement.setAttribute("class", "list-group-item");
            itemElement.innerText = repo.name;
            listElement.appendChild(itemElement);

        }

      })
      .catch(function (error) {

            var itemElement = document.createElement("li");

            itemElement.setAttribute("class", "list-group-item");
            itemElement.innerText = "Not Found";
            listElement.appendChild(itemElement);

      });
  }
}
