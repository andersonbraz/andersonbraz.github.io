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

document.querySelector("#button-01").onclick = function(){

    var usuario =  new Usuario();
    usuario.email = 'contato@andersonbraz.com';
    usuario.senha = 'Yml$Cs93GHt89!';
    console.log(usuario);

    var admin =  new Admin();
    admin.email = 'admin@andersonbraz.com';
    admin.senha = 'Net@CfTG#h67$';
    console.log(admin);

    appendItem(JSON.stringify(usuario), "#list-01");
    appendItem(JSON.stringify(admin), "#list-01");

}

function appendItem(item, idList){

    var listElement = document.querySelector(idList);
    var itemElement = document.createElement("li");
  
    itemElement.setAttribute("class", "list-group-item");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
  
}

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

document.querySelector("#button-02").onclick = function(){

    const idades = usuarios.map(function(usuario){
        return usuario.idade;
    });

    appendItem(JSON.stringify(usuarios), "#list-02");
    appendItem(JSON.stringify(idades), "#list-02");

    console.log(idades);

}