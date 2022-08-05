"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
let content = [];
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right) return 1;
  if(!this.left && this.right) return 1 + this.right.size();
  if(!this.right && this.left) return 1 + this.left.size();
  if(this.right && this.left) return 1 + this.left.size() + this.right.size();
};
BinarySearchTree.prototype.insert = function(val){
  let nodo = new BinarySearchTree(val);
  if(nodo.value > this.value){
    if(!this.right){
      this.right = nodo
    }
    this.right.insert(val);
  }
  if(nodo.value < this.value){
    if(!this.left){
      this.left = nodo;
    }
    this.left.insert(val);
  }
};
BinarySearchTree.prototype.contains = function(val){
  if(this.value === val) return true;
  if(this.value > val){
    if(!this.left){
      return false;
    }
    return this.left.contains(val);
  } 
  if(this.value < val){
    if(!this.right){
      return false;
    }
    return this.right.contains(val);
  } 
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'pre-order'){
    cb(this.value);
    if(this.left !== null){this.left.depthFirstForEach(cb, order);}
    if(this.right!== null){this.right.depthFirstForEach(cb, order);}
  }
  else if(order === 'post-order'){
    if(this.left!== null){this.left.depthFirstForEach(cb, order);}
    if(this.right!== null){this.right.depthFirstForEach(cb, order);}
    cb(this.value);
  }else{
    if(this.left!== null){this.left.depthFirstForEach(cb, order);}
    cb(this.value);
    if(this.right!== null){this.right.depthFirstForEach(cb, order);}
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(f, array = []){
  if(this.left){
    array.push(this.left);
  }
  if(this.right){
    array.push(this.right);
  }
  
  f(this.value);

  if(array.length > 0){
    array.shift().breadthFirstForEach(f, array);
  }
};
// let tree = new BinarySearchTree(5);
// tree.insert(2);
// tree.insert(4);
// tree.insert(1);
// tree.insert(6);
// tree.insert(3);
// // console.log(tree.size()); //3
// // console.log(tree.left.value); //12
// // console.log(tree.right.value); //22
// function log(a){console.log(a)}
// console.log(tree.breadthFirstForEach(log));

// // No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
