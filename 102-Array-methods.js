console.log ( 'Bienvenidx a los Métodos de Array');


const numberList = [1, 2, 3, 4, 5];
console.log('numberList: '+ numberList);


const doubledList = numberList.map(n => n * 2);
console.log('.map(n*2): '+ doubledList); 


const filterList = numberList.filter(n => n === 2);
console.log ('filter(): ' + filterList);


const findList = numberList.find(n => n === 3);
console.log ('find(): ' + findList);



const findIndexList = numberList.findIndex(n => n === 2);
console.log ('findIndex(): ' + findIndexList); // Devolverá la posición 

// es útil para rellenar un array con un valor específico, y puede modificar todos los elementos
// del array o solo un rango específico dependiendo de los parámetros que se proporcionen.
const fillList = numberList.fill(':money');
console.log ('fil(): ' + fillList);


const everyList = numberList.every(n => n === 2); // Verifica si todos los elementos cumplen la condición
console.log ('every() : ' + everyList)

const numberList2 = [1, 2, 3, 4, 5];
const someList = numberList2.some(n => n === 2);
console.log ('.some(): ' + someList);