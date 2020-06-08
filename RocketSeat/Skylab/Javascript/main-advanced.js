
var listElement = document.querySelector(".card .list-group");

function buscar() {

  var inputElement = document.querySelector("#username");
  var username = inputElement.value;

  if (username.length > 0) {

    listElement.innerHTML = "<li class='list-group-item'>Carregando...</li>";

    axios
      .get("https://api.github.com/users/" + username + "/repos")
      .then(function (response) {
        
        var repos = response.data;
        listElement.innerHTML = "";

        for (repo of repos) {
          appendItem(repo.name);
        }

      })
      .catch(function (error) {
        listElement.innerHTML = "";
        listElement.innerHTML = "<li class='list-group-item'>Not Found</li>";
      });
  }
}


function appendItem(item){

  var itemElement = document.createElement("li");

  itemElement.setAttribute("class", "list-group-item");
  itemElement.innerText = repo.name;
  listElement.appendChild(itemElement);

}

