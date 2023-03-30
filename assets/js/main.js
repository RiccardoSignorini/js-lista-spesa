/*
--PROBLEMA--
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

const arrayList = [
    `pomodori`,
    `insalata`,
    `mele`,
    `avocado`,
    `uova`,
    `latte`,
]

let i=0;

while( i<arrayList.length ){
    const shoppingList = arrayList[i];
    console.log(shoppingList)
    i++
}



