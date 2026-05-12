async function login() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const matricula = document.getElementById('matricula').value;

  try {
    const resposta = await fetch('http://localhost:3000/alunos');
    const alunos = await resposta.json();

    const usuario = alunos.find(aluno => 
      aluno.nome == nome && aluno.email === email && aluno.matricula == matricula
    );

    if (usuario) {
      alert('Login realizado com sucesso!');
      window.location.href = 'Consulta.html'
    } else {
      alert('Usuário não encontrado');
    }

  } catch (erro) {
    alert('Erro ao fazer login');
    console.error(erro);
  }
}
    const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    login()})