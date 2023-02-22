import { criarUsuario } from "./js/Usuario/cadastro.js";
import { logar } from "./js/Usuario/logar.js";
import { Usuario } from "./js/Usuario/usuario.js";
export const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    if (window.location.pathname == '/cadastro.html'){
  criarUsuario();
    }
    else {
        logar();
    }
});

