class Veiculo {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }
    obterDetalhes(){
        return `\nMarca: ${this.marca}\nAno: ${this.ano}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, portas){
        super(marca, ano);
        this.portas = portas;
    }
    obterDetalhes(){
        return `\nMarca: ${this.marca}\nAno: ${this.ano}\nPortas: ${this.portas}`;
    }
}

let moto = new Veiculo("Honda", 2006);
console.log(moto.obterDetalhes());

let carro = new Carro("Chevrolet", 2021, 4);
console.log(carro.obterDetalhes());