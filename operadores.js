const idade = 18;
const maiorDeIdade = idade > 18;
const possuiCNH = true; 
 
//operador E
const podeDirigir = maiorDeIdade && possuiCNH;
console.log("pode dirigir? " + podeDirigir);

//OPERADOR OU
const podeViajarSozinho =  maiorDeIdade || possuiCNH;
console.log("pode viajar sozinho? " + podeViajarSozinho);

//operador NOT  
const precisaDeAcompanhante = !maiorDeIdade;
console.log("precisa de acompanhate? " + precisaDeAcompanhante);