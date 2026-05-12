// Importa o framework Express para criar o servidor web
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());
app.use(cors());

// Rota POST - Criar aluno
app.post('/alunos', async (req, res) => {
    try {
        const novoAluno = await prisma.aluno.create({
            data: {
                email: req.body.email,
                nome: req.body.nome,
                matricula: req.body.matricula
            }
        });
        res.json({ message: "Cadastrado com sucesso", aluno: novoAluno });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar aluno' });
    }
});

// Rota GET - Listar todos os alunos
app.get('/alunos', async (req, res) => {
    try {
        const todosAlunos = await prisma.aluno.findMany();
        res.json(todosAlunos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
});

// Rota GET - Buscar aluno por ID
app.get('/alunos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const alunoSelecionado = await prisma.aluno.findUnique({ where: { id } });
        if (!alunoSelecionado) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.json(alunoSelecionado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar aluno' });
    }
});

// Rota PUT - Atualizar aluno
app.put('/alunos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const alunoAtualizado = await prisma.aluno.update({
            where: { id },
            data: {
                nome: req.body.nome,
                email: req.body.email,
                matricula: req.body.matricula
            }
        });
        res.json({ message: "Aluno atualizado com sucesso", aluno: alunoAtualizado });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
});

// Rota DELETE - Deletar aluno
app.delete('/alunos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.aluno.delete({ where: { id } });
        res.json({ message: "Aluno deletado com sucesso" });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(500).json({ error: 'Erro ao deletar aluno' });
    }
});

// Encerramento seguro
const gracefulShutdown = async () => {
    await prisma.$disconnect();
    process.exit(0);
};
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
