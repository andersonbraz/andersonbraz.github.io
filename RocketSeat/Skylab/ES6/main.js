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

document.querySelector("#button-02_1").onclick = function(){

    const resultado = usuarios.filter(function(usuario){
        return usuario.idade >= 18 && usuario.empresa == 'Rocketseat';
    });

    appendItem(JSON.stringify(resultado), "#list-02_1");

    console.log(resultado);

}

document.querySelector("#button-02_2").onclick = function(){

    const resultado = usuarios.filter(function(usuario){
        return usuario.idade >= 18 && usuario.empresa == 'Rocketseat';
    });

    appendItem(JSON.stringify(resultado), "#list-02_2");

    console.log(resultado);

}

document.querySelector("#button-02_3").onclick = function(){

    const resultado = usuarios.find(function(usuario){
        return usuario.empresa == 'Google';
    });

    appendItem(JSON.stringify(resultado), "#list-02_3");

    console.log(resultado);

}

document.querySelector("#button-02_4").onclick = function(){

    const resultado = usuarios.filter(function(usuario){
        return (usuario.idade * 2) < 50;
    });

    appendItem(JSON.stringify(resultado), "#list-02_4");

    console.log(resultado);

}