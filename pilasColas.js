// // ¿Que son las colas y las pilas?
// // Son estructuras de datos lineales que almacena elementos del mismo tipo
// // Son estructuras de datos lineales que almacenan elementos del mismo tipo

// class Pila {
//     constructor() {
//         this.items = [];
//     }

//     //Agregar un elemento a la pila 
// push(element) {
//     this.items.push(element);
// }

// //Elimina un elemento de la pila

// pop() {
//     if (this.isEmpty()){
//         console.log("La pila esta vacia")
//         return;
//     }
//     return this.items.pop();
// }

// //Obtener el elemento superior 
// peek() {
//     if(this.isEmpty()){
//         console.log("La pila esta Vacia");
//     return;
//     }
//     return this.items[this.items.length - 1];
// }

// // aqui se verifica si la pila esta vacia
// isEmpty(){
//     return this.items.length === 0;
// }

// //Obtener el tamaño de la pila
// size(){
//     return this.items.length;
// }

// // Vaciar la pila
// clear(){
//     this.items = [];
// }

// }


// let pila = new Pila();
// pila.push(10);
// pila.push(20);
// pila.push(30);
// console.log(pila.pop());  // 30
// console.log(pila.peek()); // 20
// console.log(pila.size()); // 2


class Cola{
    constructor(){
        this.items = [];
    }

    //Vamos a agregar elementos a la cola
    enqueue(elemento){
        this.items.push(elemento);
    }

    //eliminar y devolver el primer elemento de la cola
    dequeue(){
        if(this.isEmpty()){
            console.log("La cola esta vacia")
        return;
        }
    return this.items.shift(); //El emtodo shift nos ayuda a tener ese resultado eliminando el primer elemento
    }
    //Obtener el primer elemento sin eliminarlo
    // Para no eliminarlo tienes que solo acceder al elemento que se esta pidiendo
    front(){
        if(this.isEmpty){
            console.log("La cola esta vacia")
        return;
        }
        return this.items[0]
    }
    //verificar si la cola esta vacia
    // como se verifica si la cola esta vacia. se debe acceder a todo el arreglo y validar si hay datos dentro de ella y retornar el valor
    isEmpty(){
        return this.items.length === 0;
    }

    //Obtener el tamaño de cola
    //¿Como obtener el tamaño de la cola?
    // si para validar si la cola esta vacia, primero accedimos al largo de la cola y luego lo comparamos con 0
    // En este caso para devolver el tamaño solo accedemos al largo de la lista sin compararlo con nada
    size(){
        return this.items.length
    }
    
    //Vaciar la cola
    clear(){
        return this.items = []
    }

}   


let cola = new Cola();
cola.enqueue(10);
cola.enqueue(20);
cola.enqueue(30);
console.log(cola.dequeue()); // 10
console.log(cola.front());   // 20
console.log(cola.size());    // 2