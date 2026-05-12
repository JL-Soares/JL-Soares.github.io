async function consultar() {
    let mensagem = "";
    try {
        const resposta = await fetch('http://localhost:3000/alunos');
        if (!resposta.ok) throw new Error('Erro na rede');
        const alunos = await resposta.json();
        for (let i = 0; i < alunos.length; i++) {
            mensagem += alunos[i].id + ", " + alunos[i].nome + ", " + alunos[i].email + ", " + alunos[i].matricula + "\n";
        }
        document.getElementById("alunos").value = mensagem;
    } catch (erro) {
        alert('Erro ao listar nomes');
        console.error(erro);
    }
}

async function editar() {
    const idBusca = document.getElementById('id').value; 
    if (!idBusca) {
        alert("Por favor, digite um ID para buscar.");
        return;
    }
    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${idBusca}`);
        
        if (!resposta.ok) {
            throw new Error('Aluno não encontrado ou erro na rede');
        }
        const aluno = await resposta.json();
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('email').value = aluno.email;
        document.getElementById('matricula').value = aluno.matricula;
        document.getElementById('nome').disabled = false
        document.getElementById('email').disabled = false
        document.getElementById('matricula').disabled = false
        document.getElementById('cancelar').disabled = false
        document.getElementById('salvar').disabled = false
        document.getElementById('id').disabled = true
        document.getElementById('editar').disabled = true
        document.getElementById('excluir').disabled = true
    } catch (erro) {
        alert('Erro ao buscar dados do aluno');
        console.error(erro);
    }
}

async function salvar() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const matricula = document.getElementById('matricula').value;
    if (!id) {
        alert('Por favor, insira o ID do aluno para editar!');
        return;
    }
    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: 'PUT', // ou 'PATCH' dependendo do backend
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, nome, email, matricula })
        });
        if (resposta.ok) {
            alert('Aluno atualizado com sucesso!');
            consultar();
        document.getElementById('nome').disabled = true
        document.getElementById('email').disabled = true
        document.getElementById('matricula').disabled = true
        document.getElementById('salvar').disabled = true
        document.getElementById('cancelar').disabled = true
        document.getElementById('id').disabled = false
        document.getElementById('editar').disabled = false
        document.getElementById('excluir').disabled = false
        } else {
            const dados = await resposta.json();
            alert('Erro: ' + (dados.message || 'Falha na atualização'));
        }
    } catch (erro) {
        alert('Erro ao atualizar aluno');
        console.error(erro);
    }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const botaoSalvar = document.getElementById('salvar');
    if (!botaoSalvar.disabled) {
        salvar();
    } else {
        consultar();
    }
});


async function excluir() {
    const id = document.getElementById('id').value;
    if (!id) {
        alert('Por favor, insira o ID do aluno para excluir!');
        return;
    }
    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: 'DELETE'
        });
        if (resposta.ok) {
            alert('Aluno excluído com sucesso!');
            consultar();
        } else {
            const dados = await resposta.json();
            alert('Erro: ' + (dados.message || 'Falha na exclusão'));
        }
    } catch (erro) {
        alert('Erro ao excluir aluno');
        console.error(erro);
    }
}
document.querySelector('.cancelar').addEventListener('click', () => {
    consultar()
    document.getElementById('nome').disabled = true
    document.getElementById('email').disabled = true
    document.getElementById('matricula').disabled = true
    document.getElementById('salvar').disabled = true
    document.getElementById('cancelar').disabled = true
    document.getElementById('id').disabled = false
    document.getElementById('editar').disabled = false
    document.getElementById('excluir').disabled = false
});

window.onload = consultar