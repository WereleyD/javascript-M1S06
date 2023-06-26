let aluno1 = { nome: "Wesley", nota1: 2, nota2: 6 };

let aluno2 = { nome: "Josnei", nota1: 8, nota2: 7 };

let aluno3 = { nome: "Igor", nota1: 6, nota2: 9 };

let alunos = [ aluno1, aluno2, aluno3 ];

let mediaAluno = alunos.map((aluno) => {
    let media = (aluno.nota1 + aluno.nota2) / 2 /*calcula a media de cada aluno*/
    return { nome: aluno.nome, media }; /*retorna um array com nome e media*/
});

console.log(mediaAluno.sort((a, b) => b.media - a.media));
