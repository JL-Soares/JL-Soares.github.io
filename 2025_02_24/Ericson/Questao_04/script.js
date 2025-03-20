class Aluno {
  constructor(nota1, nota2) {
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
  calcularMedia() {
    let Media = (this.nota1 + this.nota2) / 2;
    if (Media >= 7) {
      alert(`Sua Média Foi: ${Media}, maior do que 7`);
    } else {
      alert(`Sua Média Foi: ${Media}, menor do que 7`);
    }
  }
}
const Aluno1 = new Aluno(10, 7);
const Aluno2 = new Aluno(6, 3);
Aluno1.calcularMedia();
Aluno2.calcularMedia();
