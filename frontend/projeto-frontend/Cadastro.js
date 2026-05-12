async function cadastrar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const matricula = document.getElementById('matricula').value;

  try {
    const resposta = await fetch('http://localhost:3000/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, matricula })
    });

    const dados = await resposta.json();

    alert(dados.message);

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('matricula').value = '';

  } catch (erro) {
    alert('Erro ao cadastrar');
    console.error(erro);
  }
}
    const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    cadastrar()})