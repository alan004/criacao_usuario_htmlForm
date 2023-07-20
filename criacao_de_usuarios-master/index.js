import {Usuario} from "./usuario.js";
// import { autenticaLogin } from "./login.js";
const usuarios = [];

// const newUser = new Usuario("Alan", "alan.abilio@gmail.com", "4")
// const newUser1 = new Usuario("Raquel", "raquel.gomexs@gmail.com", "21")
//usuarios.push(newUser, newUser1)
// for (let index = 0; index < usuarios.length; index++) {
//     console.log(usuarios[index].email)
// }


function criarUsuario (nome, email, senha){
    const newUser = new Usuario(nome, email, senha)
    usuarios.push(newUser)
}



function logar(email, senha){
    const emailLogin = email
    const senhaLogin = senha

for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].email == emailLogin && usuarios[index]._senha == senhaLogin) {
        console.log("Usuario existe")
        break
    }
    else {
        console.log("Usuario não encontrado")
    }
}
}

criarUsuario ("Alan", "alan.abilio@gmail.com", "1234")
criarUsuario ("Raquel", "raquel.gomxz@gmail.com", "2424")
console.log(usuarios)
logar("alan.abilio@gmail.com", "1234")

