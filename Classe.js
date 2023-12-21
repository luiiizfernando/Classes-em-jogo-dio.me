class informacao_heroi
{
	constructor(nome, idade, tipo)
    {
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    ataca()
    {	
        if(this.tipo.toLowerCase() === "mago")
        {
        	console.log(`O ${this.tipo} atacou usando magia`)
        }
        if(this.tipo.toLowerCase() === "guerreiro")
        {
        	console.log(`O ${this.tipo} atacou usando espada`)
        }
        if(this.tipo.toLowerCase() === "monge")
        {
        	console.log(`O ${this.tipo} atacou usando artes marciais`)
        }
        if(this.tipo.toLowerCase() === "ninja")
        {
        	console.log(`O ${this.tipo} atacou usando shuriken`)
        }
        
    }
}

let fernando = new informacao_heroi("Luiz Fernando", 30, "mago")
fernando.ataca()
let fulano = new informacao_heroi("Fulano", 28, "guerreiro")
fulano.ataca()
let ciclano = new informacao_heroi("Ciclano", 26, "monge")
ciclano.ataca()
let beltrano = new informacao_heroi("Beltrano", 27, "ninja")
beltrano.ataca()