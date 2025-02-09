// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Funcion para agregar amigos.
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturar el valor del input
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Verifica que el campo no este vacío y muestra un mensaje.
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista en la interfaz
    const lista = document.getElementById("listaAmigos"); //Donde se listarán los nombres.
    const li = document.createElement("li");// Crea un nuevo elementa para agregar a la lista.
    li.textContent = nombre;// Asigna el nombre del elemento agregado.
    lista.appendChild(li);// Agregar el "li" 

    // Limpiar el campo de entrada
    input.value = "";
}

//Actualizar la lista.
actualizarLista();


//Funcion para actualizar la lista de amigos.

function actualizarLista(){
   const listaAmigos = document.getElementById("listaAmigos");//Obtiene la referencia.
   listaAmigos.innerHTML = ""; //Borra todo el contenido para evitar duplicados.

   for(let i = 0; i <amigos.length; i++){// Recorre el array "amigos" para agregarlos.
    const li = document.createElement("li"); // Crea un elemento "li" para cada amigo.
    li.textContent = amigos[i]; // Asigna el nombre.
    listaAmigos.appendChild(li); //  Agrega el "li" a la lista en el DOM.

   }
}


//Funcion para escoger un amigo aleatorio

function sortearAmigo() {
    const lista = document.querySelectorAll("#listaAmigos li");//Obtiene todos los elementos "li" de la lista.
    const resultado = document.getElementById("resultado");// Obtiene el elemento que se mostrará en el resultado.

    if (lista.length < 2) {//Verifica que haya al menos dos elementos en la lista y muestra un mensaje.
        alert("Necesitas al menos dos amigos para hacer el sorteo.");
        return;
    

   
    }
    const amigos = [...lista].map(li => li.textContent); //Convierte los elementos "li" en un array con los nombres.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);//Genera un número aleatorio entre 0 y la cantidad de nombres.
    const amigoSorteado = amigos[indiceAleatorio]; //Obtiene el nombre del amigo.
    resultado.innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`; //Muestra el nombre del amigo sorteado.
 }
   
 //Reiniciar 
 function reiniciar() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; //Limpia la lista de nombres.
    document.getElementById("resultado").innerHTML = ""; //Limpia el resultado del sorteo
    document.getElementById("amigo").value = ""; //Limpia el campo de entrada.
}