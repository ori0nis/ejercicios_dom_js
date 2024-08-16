/* 1.1 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los países.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford Fiesta', 'Audi A4', 'Toyota Corolla'];

1.4 Crea dinámicamente en el html una serie de divs que contengan un elemento h4 para el título y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html. */


// 1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li");
    li.textContent = countries[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.2

const element = document.querySelector(".fn-remove-me");

element.remove();

// 1.3

const cars = ['Mazda 6', 'Ford Fiesta', 'Audi A4', 'Toyota Corolla'];

const newUl = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    const li = document.createElement("li");
    li.textContent = cars[i];
    newUl.appendChild(li);
}

const targetDiv = document.querySelector('[data-function="printHere"]');

targetDiv.appendChild(newUl);

// 1.4

const newCountries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for (let i = 0; i < newCountries.length; i++) {
    
    const divCountry = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = newCountries[i].title;

    const img = document.createElement("img");
    img.src = newCountries[i].imgUrl;

    divCountry.appendChild(h4);
    divCountry.appendChild(img);

    document.body.appendChild(divCountry);
}

// 1.5

const button = document.createElement("button");
button.textContent = "Eliminar último div";
document.body.appendChild(button);


function removeLastDiv() {
    const divs = document.querySelectorAll("div");
    if (divs.length > 0) {
        const lastDiv = divs[divs.length - 1];
        lastDiv.remove();
    }
}

button.addEventListener("click", removeLastDiv);

// 1.6




// 1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.