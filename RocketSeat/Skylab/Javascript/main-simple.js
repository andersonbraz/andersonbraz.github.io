/*


//  STEP - 01

var minhaPromise = function(){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.github.com/users/andersonbraz");
        xhr.send(null);


        xhr.onreadystatechange =  function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("Erro na requisição");
                }
            }
        }

    });
}

minhaPromise()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});

*/

/*

//  STEP - 02

axios.get("https://api.github.com/users/andersonbraz")
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
})

*/

function buscar() {

  var inputElement = document.querySelector("#username");
  var username = inputElement.value;

  if (username.length > 0) {
    axios
      .get("https://api.github.com/users/" + username + "/repos")
      .then(function (response) {
          
        var repos = response.data;
        var listElement = document.querySelector(".card .list-group");

          for(repo of repos){
            var itemElement = document.createElement("li");
            itemElement.setAttribute("class", "list-group-item");
            itemElement.innerText = repo.name;
            listElement.appendChild(itemElement);
          }
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

}
