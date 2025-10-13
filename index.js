import { obtenerProducto, obtenerProductos, agregarProducto } from "./fakeStoreAPI.js";

const argumentos = process.argv.slice(2);
console.log(argumentos);

if (argumentos[0] === "GET" && argumentos[1] === "products") {
    obtenerProductos();
} else if (argumentos[0] === "GET" && argumentos[1].includes("products/")) {
    const id = argumentos[1].split("/")[1];
    obtenerProducto(id);
} else if (argumentos[0] == "POST" && argumentos.length == 4) {
    const producto = {
        title: argumentos[1],
        price: argumentos[2],
        category: argumentos[3],
        description: "Descripción genérica",
        image: "https://i.pravatar.cc"
    };

    agregarProducto(producto);
} else {
    console.log("Comando no reconocido");
}