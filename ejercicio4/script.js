/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. 

1.4 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];*/


// 1.1

const button = document.createElement("button");
button.setAttribute("id", "btnToClick");
button.textContent = "Clícame";
document.body.appendChild(button);

button.addEventListener("click", (event) => {
    console.log(event);
})

// 1.2

const input = document.querySelector(".focus");

input.addEventListener("focus", () => {
    console.log(input.value);
});

// 1.3

input.addEventListener("input", () => {
    console.log(input.value);
});

// 1.4

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

const ul = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
    const li = document.createElement("li");
    li.textContent = albums[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

