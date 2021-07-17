class Data {
    dia: number;
    mês: number;
    ano: number;

    constructor(dia: number, mês: number, ano: number) {
        this.dia = dia;
        this.mês = mês;
        this.ano = ano;
    }
}

const data = new Data (21,1,1999);
console.log(data.dia);

// se eu quiser imprimir só o mes e o ano eu eu coloco default no ano, 1970 é bastante utilizado

// class Data {
//      dia: number;
//    'mês: number;
//    ano: number;
//
//    constructor(dia: number, mês: number, ano: number = 1970) {
//       this.dia = dia;
//        this.mês = mês;
//        this.ano = ano;
//    }
//}

//const data = new Data (21,1);
//console.log(data.dia);


// para resumir tudo isso e definir as propriedades de acesso pode se resumir o public e private, segue exemplo

//class Data{
//
//    constructor( public dia: number, public mês: number, public ano: number = 1970)
//
//}

//exemplo mais ligado à orientação de objetos e modificadores de acesso 

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
            public marca: string,
            public modelo: string,
            private velocidadeMáxima: number = 220
    ) { }
    private alterarVelocidade(delta: number) {
        //validações de acelaração e frenagem
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMáxima){
            
            } else {
                this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0
        }
    
    
    }
    acelerar () {
        this.alterarVelocidade(5);
    }
    frenagem () {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro ('Jeep', 'Renegade', 240);
carro.acelerar();

//herança 

class Camaro extends Carro {
    private turbo = false; 
    constructor () {
        super('Chevrolet', 'Camaro', 350);
    }
    ligarTurbo () {
        this.turbo = true;
    }
}
const camaro = new Camaro();
camaro.acelerar();
camaro.frenagem();
camaro.ligarTurbo(); 

