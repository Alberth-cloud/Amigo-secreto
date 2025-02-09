## Amigo Secreto

Este es un sencillo proyecto en JavaScript que permite agregar nombres de amigos a una lista, sortear un "amigo secreto" de manera aleatoria y reiniciar la lista en cualquier momento.

## Características

1. Agregar amigos a una lista.
2. Mostrar la lista de amigos en pantalla.
3. Sortear un amigo secreto de forma aleatoria.
4. Reiniciar la lista y el resultado del sorteo.


## Tecnologías utilizadas:

HTML
JavaScript


## Cómo usar:

1. Escribe un nombre en el campo de entrada y presiona el botón "Agregar".
2. La lista de amigos se actualizará con cada nuevo nombre agregado.
3. Una vez agregados al menos dos amigos, presiona el botón "Sortear" para elegir un amigo secreto.
4. Si deseas reiniciar la lista y el sorteo, presiona el botón "Reiniciar".


   
## El archivo JavaScript contiene las siguientes funciones:

#### agregarAmigo()

1. Obtiene el nombre ingresado en el campo de entrada.
2. Valida que no esté vacío.
3. Agrega el nombre al array amigos.
4. Muestra el nombre en la lista en pantalla.
5. Limpia el campo de entrada.


#### actualizarLista()

1. Limpia la lista de amigos en pantalla.
2. Recorre el array amigos y agrega cada nombre a la lista en el DOM.


#### sortearAmigo()

1. Verifica que haya al menos dos amigos en la lista.
2. Escoge un nombre aleatorio de la lista.
3. Muestra el resultado en pantalla.


#### reiniciar()

1. Vacía el array amigos.
2. Limpia la lista en pantalla.
3. Borra el resultado del sorteo.
4. Restablece el campo de entrada. 


## Contribución

Si deseas mejorar este proyecto, puedes hacer un fork y enviar un pull request con tus mejoras.
