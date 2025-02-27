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
    builder(){
        this.items = [];
    }

    //Vamos a agregar elementos a la cola
    dequeue(elemento){
        this.items.push(elemento)
    }

    //eliminar y devolver el primer elemento de la cola
    dequeue(){
        if(this.isEmpty()){
            console.log("La cola esta vacia")
        return;
        }
    return this.items.shift(); //El emtodo shift nos ayuda a tener ese resultado eliminando el primer elemento
    }
    

}