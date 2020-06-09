class Usuario{

    constructor(){
        this.email = null;
        this.senha = null;
        this.admin = false;
    }

}

class Admin extends Usuario{

    constructor(){
        super();
        this.admin = true;
    }

}

/* Example Create User and Admin */ 

document.querySelector("#button-test").onclick = function(){

    var usuario =  new Usuario();
    usuario.email = 'contato@andersonbraz.com';
    usuario.senha = 'Yml$Cs93GHt89!';
    console.log(usuario);

    var admin =  new Admin();
    admin.email = 'admin@andersonbraz.com';
    admin.senha = 'Net@CfTG#h67$';
    console.log(admin);

    var listElement = document.querySelector(".card .list-group");
    appendItem(JSON.stringify(usuario));
    appendItem(JSON.stringify(admin));

}

function appendItem(item){

    var itemElement = document.createElement("li");
  
    itemElement.setAttribute("class", "list-group-item");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
  
}