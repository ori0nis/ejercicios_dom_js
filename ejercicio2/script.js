/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */



// 2.1

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 2.2 

const otherDiv = document.createElement("div")
document.body.appendChild(otherDiv);
const newP = document.createElement("p");
otherDiv.appendChild(newP);

// 2.3

const yetAnotherDiv = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const pInDiv = document.createElement("p");
    yetAnotherDiv.appendChild(pInDiv);
}

document.body.appendChild(yetAnotherDiv);

// 2.4

const yetAnotherP = document.createElement("p");
yetAnotherP.innerText = "¡Soy dinámico!";
document.body.appendChild(yetAnotherP);

// 2.5

const h2 = document.querySelector(".fn-insert-here");
const textH2 = document.createTextNode("Wubba Lubba dub dub");
h2.appendChild(textH2);
// h2.textContent = "Wubba Lubba dub dub" ---> más directo


// 2.6 

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    const li = document.createElement("li");
    li.textContent = apps[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7

const elements = document.querySelectorAll(".fn-remove-me"); // ---> recordar fijarse en "todos"

for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
}

// 2.8

const div = document.querySelector("div.fn-insert-here");

div.insertAdjacentHTML("afterend", '<p>¡Voy en medio!</p>');

// 2.9

const divs = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < divs.length; i++) {
    divs[i].insertAdjacentHTML("beforeend", '<p>¡Voy dentro!</p>');
}
