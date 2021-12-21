const usuarios = []

const contador = document.getElementById("contador")



function cadastrarUsuario() {
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const tel = document.getElementById("tel").value
  const CEP = document.getElementById("CEP").value
  const rua = document.getElementById("rua").value
  const n_casa = document.getElementById("n_casa").value
  const compl = document.getElementById("compl").value
  const bairro = document.getElementById("bairro").value
  const cidade = document.getElementById("cidade").value
  const estado = document.getElementById("estado").value


  let alerta = ""
  if (nome === "") {
    alerta += "Preencha o nome. \r\n"
  }
  if (email === "") {
    alerta += "Preencha o email. \r\n"
  }
  if (tel === "") {
    alerta += "Preencha o telefone. \r\n"
  }
  if (CEP === "") {
    alerta += "Preencha o CEP. \r\n"
  }
  if (rua === "") {
    alerta += "Preencha o rua. \r\n"
  }
  if (n_casa === "") {
    alerta += "Preencha o número da casa. \r\n"
  }
  if (compl === "") {
    alerta += "Preencha o complemento. \r\n"
  }
  if (bairro === "") {
    alerta += "Preencha o bairro. \r\n"
  }
  if (cidade === "") {
    alerta += "Preencha o cidade. \r\n"
  }
  if (estado === "") {
    alerta += "Preencha o estado. \r\n"
  }
  if (alerta !== "") {
    alert(alerta)
  }

  const usuario = {
    nome,
    email,
    tel,
    CEP,
    rua,
    n_casa,
    compl,
    bairro,
    cidade,
    estado,
    date: new Date(),
  }

  usuarios.push(usuario)

  cadastrarTabela()
}






function cadastrarTabela() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (let usuario of usuarios) {
    const position = usuarios.indexOf(usuario)
    const html = `
      <tr>
      <td>${usuarios.indexOf(usuario) + 1}</td>
      <td>${usuario.nome}</td>
      <td>${usuario.email}</td>
      <td>${usuario.tel}</td>
      <td>${usuario.CEP}</td>
      <td>${usuario.rua}</td>
      <td>${usuario.n_casa}</td>
      <td>${usuario.compl}</td>
      <td>${usuario.bairro}</td>
      <td>${usuario.cidade}</td>
      <td>${usuario.estado}</td>       
      <td>${usuario.date.getDate()}/${usuario.date.getMonth() + 1}/${usuario.date.getFullYear()}</td>
      <td><a><img onclick="removeUsuario(${position})"src="remove.png"></a></td>
      </tr>    
    `

    tbody.innerHTML += html
    contador.innerHTML = `Quantidade de Usuários Cadastrados: <b>${usuarios.length}</b>`
  }
}




function removeUsuario(position) {
  usuarios.splice(position, 1)
  cadastrarTabela()
}





contador.innerHTML = `Quantidade de Usuários Cadastrados: <b>${usuarios.length}</b>`



function only_number(e) {
  if (isNaN(parseInt(e.data))) {
    const valorDoCampo = e.target.value;
    const valor = valorDoCampo.substr(0, valorDoCampo.length - 1)
    e.target.value = valor
  }
}

document.getElementById("tel").addEventListener("input", only_number)
document.getElementById("CEP").addEventListener("input", only_number)
document.getElementById("n_casa").addEventListener("input", only_number)



// esconde e mostra o campo Complemento

function show() {
  const button = document.getElementById("esconder")
  const reaparecer = document.getElementById("compl")
  reaparecer.classList.remove('hide')
  reaparecer.style.cssText = "margin-top: 10px; -webkit-animation: fadeIn 1s; animation: fadeIn 1s;"
  button.innerHTML = `<button onclick="hide()" id="btn_hide">></button>`
}


function hide() {
  const button2 = document.getElementById("esconder")
  const reaparecer2 = document.getElementById("compl")
  reaparecer2.style.cssText = "margin-top: 10px; -webkit-animation: fadeOut 1s; animation: fadeOut 1s;"
  button2.innerHTML = `<button onclick="show()" id="btn_hide">></button>`
  setTimeout(function () { reaparecer2.classList.add("hide") }, 1000);
}




// Button Modo Noturno

var button = document.querySelector('#dark_mode')
button.style.cssText = "position: fixed; right: 32px;"


const body = document.querySelector('body')
const section_1 = document.querySelector('.box_1')
const section_2 = document.querySelector('.box_2')
const cont = document.querySelector('#contador')
const tab_1 = document.querySelector('thead tr')
const tab_2 = document.querySelector('#tbody')


function themedark_on() {
  body.style.backgroundColor = 'rgb(13, 39, 75)'
  section_1.style.cssText = 'background: rgba(255, 255, 255, 0.37); color: white'
  section_2.style.cssText = 'background: rgba(255, 255, 255, 0.37); color: white'
  cont.style.color = 'white'
  tab_1.style.backgroundColor = 'rgb(32, 31, 27)'
  tab_2.style.cssText = 'color: black;'
  button.innerHTML = '<button type="button" onclick="themedark_off()">Modo Diurno</button>'
}

function themedark_off() {

  body.style.backgroundColor = 'rgb(71, 144, 240)'
  section_1.style.cssText = 'white'
  section_2.style.cssText = 'white'
  cont.style.color = 'rgb(37, 131, 58)'
  tab_1.style.backgroundColor = 'rgb(255, 210, 128)'
  tab_2.style.cssText = 'color: black;'
  button.innerHTML = '<button type="button" onclick="themedark_on()">Modo Noturno</button>'
}