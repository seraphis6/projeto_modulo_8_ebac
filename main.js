const form = document.getElementById('form-atividade')
const contatos = []
const nums = []
const foto = '<img src="contato.png" alt="Foto do contato"/>'

let linhas = ''

form.addEventListener('submit', function (e) {
  e.preventDefault()

  addLinha()
  atualizaTab()
})

function addLinha() {
  const contatoinput = document.getElementById('contato')
  const telefoneinput = document.getElementById('telefone')

  if (contatos.includes(contatoinput.value)) {
    alert('erro: este contato já existe')
  } else {
    if (nums.includes(telefoneinput.value)) {
      alert('erro: este telefone já existe')
    } else {
      contatos.push(contatoinput.value)
      nums.push(telefoneinput.value)

      let linha = ''
      linha += '<td>' + contatoinput.value + '</td>'
      linha += '<td>' + telefoneinput.value + '</td>'
      linha += '<td id="contato">' + foto + '</td>'
      linha += '<tr>'

      linhas += linha
    }
  }

  contatoinput.value = ''
  telefoneinput.value = ''
}

function atualizaTab() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}
