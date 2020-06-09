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


    

}