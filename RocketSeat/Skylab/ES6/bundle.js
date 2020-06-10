"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Usuario = function Usuario() {
  _classCallCheck(this, Usuario);

  this.email = null;
  this.senha = null;
  this.admin = false;
};

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

document.querySelector("#button-01").onclick = function () {
  var usuario = new Usuario();
  usuario.email = "contato@andersonbraz.com";
  usuario.senha = "Yml$Cs93GHt89!";
  console.log(usuario);
  var admin = new Admin();
  admin.email = "admin@andersonbraz.com";
  admin.senha = "Net@CfTG#h67$";
  console.log(admin);
  appendItem(JSON.stringify(usuario), "#list-01");
  appendItem(JSON.stringify(admin), "#list-01");
};

function appendItem(item, idList) {
  var listElement = document.querySelector(idList);
  var itemElement = document.createElement("li");
  itemElement.setAttribute("class", "list-group-item");
  itemElement.innerText = item;
  listElement.appendChild(itemElement);
}

var usuarios = [{
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}];

document.querySelector("#button-02_1").onclick = function () {
  var resultado = usuarios.filter(function (usuario) {
    return usuario.idade >= 18 && usuario.empresa == "Rocketseat";
  });
  appendItem(JSON.stringify(resultado), "#list-02_1");
  console.log(resultado);
};

document.querySelector("#button-02_2").onclick = function () {
  var resultado = usuarios.filter(function (usuario) {
    return usuario.idade >= 18 && usuario.empresa == "Rocketseat";
  });
  appendItem(JSON.stringify(resultado), "#list-02_2");
  console.log(resultado);
};

document.querySelector("#button-02_3").onclick = function () {
  var resultado = usuarios.find(function (usuario) {
    return usuario.empresa == "Google";
  });
  appendItem(JSON.stringify(resultado), "#list-02_3");
  console.log(resultado);
};

document.querySelector("#button-02_4").onclick = function () {
  var resultado = usuarios.filter(function (usuario) {
    return usuario.idade * 2 < 50;
  });
  appendItem(JSON.stringify(resultado), "#list-02_4");
  console.log(resultado);
};
/*
    Exercicío - 3.1

    const arr = [1, 2, 3, 4, 5];

    arr.map(function(item) {
        return item + 10;
    });

    Solved:

*/


var arr = [1, 2, 3, 4, 5];
var resultado = arr.map(function (item) {
  return item + 10;
});
console.log(resultado);
appendItem(JSON.stringify(resultado), "#list-03");
/*
    Exercicío - 3.2
    Dica: Utilize uma constante pra function

    const usuario = { nome: 'Diego', idade: 23 };

    function mostraIdade(usuario) {
        return usuario.idade;
    }

    mostraIdade(usuario);

*/

var usuario = {
  nome: 'Diego',
  idade: 23
};
var mostraIdade = usuario.idade;
console.log(mostraIdade);
appendItem(JSON.stringify(mostraIdade), "#list-03");
/*
    Exercicío - 3.3
    Dica: Utilize uma constante pra function

    const nome = "Diego";
    const idade = 23;

    function mostraUsuario(nome = 'Diego', idade = 18) {
        return { nome, idade };
    }

    mostraUsuario(nome, idade);
    mostraUsuario(nome);

*/

/*
    Exercicío - 3.4

    const promise = function() {
        return new Promise(function(resolve, reject) {
            return resolve();
        })
    }
    
*/

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
