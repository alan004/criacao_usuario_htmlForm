import { usuarios } from "../../app.js";
import { Usuario } from "./usuario.js";
export function logar(emailLogin, senhaLogin){
    emailLogin = document.getElementById('email').value
    senhaLogin = document.getElementById('senha').value
    
for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].email == emailLogin && usuarios[index]._senha == senhaLogin) {
        alert("Verdadeiro")
        window.location.href = "../../home.html"
        break
    }
    else if (usuarios[index].email == emailLogin && usuarios[index]._senha != senhaLogin) {
        alert("Senha digitada está errada")
        break
    }
    else if (index == (usuarios.length)-1) {
        alert("Usuario não encontrado")
    }
}
}


