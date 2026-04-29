// frutas.js

// 1. Criando o array de frutas
const frutas = ['Maçã', 'Banana', 'Morango', 'Manga', 'Uva'];

// 2. Exibindo a lista completa
console.log('Minha lista de frutas:', frutas);

// 3. Adicionando uma nova fruta ao final
frutas.push('Abacaxi');

// 4. Percorrendo a lista com um loop
console.log('\nPercorrendo a lista:');
frutas.forEach((fruta, index) => {
    console.log(`${index + 1}. ${fruta}`);
});

// 5. Filtrando frutas que começam com "M"
const frutasComM = frutas.filter(fruta => fruta.startsWith('M'));
console.log('\nFrutas que começam com M:', frutasComM);