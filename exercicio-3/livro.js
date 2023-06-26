class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    obterInformacoes(){
        return `\nTítulo: ${this.titulo}\nAutor: ${this.autor}\nAno de Lançamento: ${this.ano}`;
    }
}

let senhorDosAneis = new Livro( "O Senhor dos Anéis", "Tolkien", 1954);

let crepusculo = new Livro("Crepúsculo", "Stephenie Meyer", 2005);

let voltaAoMundo = new Livro("Volta ao Mundo em 80 Dias", "Julio Verne", 1872);

console.log(senhorDosAneis.obterInformacoes());
console.log(crepusculo.obterInformacoes());
console.log(voltaAoMundo.obterInformacoes());

