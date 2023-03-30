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

const containerList = document.getElementById('list')

let i=0;

while( i<arrayList.length ){

    const shoppingList = arrayList[i];

    const itemList = document.createElement('li')

    itemList.innerText = shoppingList

    containerList.append(itemList)

    i++
}



