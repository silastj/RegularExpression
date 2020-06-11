


//OBS=> BUSCA E SUBSTITUICOES DE PADROES EM STRINGS
// REPLACE => SUBSTITUIR
// SPLIT => QUEBRAR UMA ARRAY

const frase = 'Javascript';
const fraseNova = frase.replace(/a/, 'b');
console.log(fraseNova);

//METODO ANTIGO
const regexp = /\w+/gi;

//METODO NOVO
const regexp1 = new RegExp('\\w+', 'gi');

const texto = 'Ola Silas Santos 36 anos';
console.log(texto.replace(regexp, 'Novo'));

//PROPRIEDADES
regexp.flags; // GI
regexp.global; //true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // '\w+'

// FAZENDO UM LOOP
const novo = /Java/g;
const paragrafo = 'Javascript e Java Linguagem 101, Java';

let i = 1;
while(novo.test(paragrafo)){
    console.log(i++, novo.lastIndex)
}
// USANDO O EXEC

const titulo = "JavaScript, TypeScript, CoffeScript";
const newR = /\w+/g;
const newRR = /\w+/;
let regexpResult;
while((regexpResult = newR.exec(paragrafo)) !== null) {
    console.log(regexpResult)
}

const reSul = paragrafo.match(newR);
console.log(reSul);

const reSulRR = titulo.match(newRR);
console.log(reSulRR);


//TROCANDO O LI PARA DIV

const tags = `<ul><li>Item1</li><li>Item2</li></ul>`;

const tgs = /(?<=<\/?)\w+/g;

const tagsR = tags.replace(tgs, 'div');
console.log(tagsR);