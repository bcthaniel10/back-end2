// 🔴Declarar 5 variáveis para representar o cadastro de um aluno
// 🔴 2. Crie duas variáveis númericas e exiba uma soma
// 🔴 3. Calcular a média final. Declarar nota de prova e nota de trabalho. Calcular também a difrença da maior nota e menor
// Fazer uma saída de forma interpolada (´${}´) 

const nomeCompleto = "Luana Coutto";
const idade = 20;
const curso = "Mídias Sociais Digitais";
const matricula = 20052024;
const estaAtivo = false; 
console.log(`--- Ficha do Aluno ---
Nome: ${nomeCompleto}
Idade: ${idade} anos
Curso: ${curso}
Matrícula: ${matricula}
Status: ${estaAtivo ? "Ativo" : "Inativo"}`);

// Criando as duas variáveis numéricas
let numero1 = 45;
let numero2 = 55;

// Calculando a soma
let soma = numero1 + numero2;

// Exibindo o resultado no console
console.log(`A soma de ${numero1} e ${numero2} é igual a ${soma}`);

// 1. Declarando as notas da prova e do trabalho
let notaProva = 8.5;
let notaTrabalho = 7.0;

// 2. Calculando a média final
let mediaFinal = (notaProva + notaTrabalho) / 2;

// 3. Descobrindo a maior e a menor nota usando funções nativas do JavaScript (Math)
let maiorNota = Math.max(notaProva, notaTrabalho);
let menorNota = Math.min(notaProva, notaTrabalho);

// 4. Calculando a diferença entre a maior e a menor nota
let diferenca = maiorNota - menorNota;

// 5. Exibindo os resultados no console
console.log(`Nota da Prova: ${notaProva}`);
console.log(`Nota do Trabalho: ${notaTrabalho}`);
console.log("-----------------------");
console.log(`Média Final: ${mediaFinal.toFixed(1)}`);
console.log(`Maior Nota: ${maiorNota}`);
console.log(`Menor Nota: ${menorNota}`);
console.log(`Diferença entre as notas: ${diferenca.toFixed(1)}`);