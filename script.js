const array = [1,2,3,4]

Array.prototype.newForEach = function(callback, thisArg, arrayIterado){
    for (let i = 0; i < this.length; i++) {
        const arrayIterado = this
        const elem = arrayIterado[i];
        const index = i;


        callback(elem, index, arrayIterado)
    }
}

array.newForEach(item => {
    console.log(item)
})

Array.prototype.newMap = function(callback, thisArg){
    
    const novaLista = []
    for (let i = 0; i < this.length; i++) {
        const arrayIterado = this
        const elem = arrayIterado[i];
        const index = i;


        // callback(elem, index, arrayIterado)
        novaLista.push(callback(elem, index, arrayIterado))
    }
    return novaLista
}

const newArray = array.newMap(item => `${item} é muito bom`)
console.log(newArray)

Array.prototype.newFilter = function(callback, thisArg) {
    const novaList = []
    for (let i = 0; i < this.length; i++) {
        const arrayIterado = this
        const elem = arrayIterado[i];
        const index = i;

        if (callback(elem, index, arrayIterado)){
            novaList.push(elem)
        }

    }
    return novaList
}

const filter = array.newFilter(item => {
    if (item%2 == 0){
        return true
    }
})

console.log(filter)

Array.prototype.newFind = function(callback, index, array, thisArg) {
    for (let i = 0; i < this.length; i++) {
        const index = i
        const arrayIterado = this
        const elem = arrayIterado[index]

        if (callback(elem, index, arrayIterado)) {
            return elem
        }
    }
}

const find = array.newFind(elem => {
    if (elem%2 == 0){
        return true
    }
})

console.log(find)

Array.prototype.newIndexOf = function(elementoDePesquisa, pontoInicial = 0) {
    
    for( let i = pontoInicial; i < this.length; i++) {
        const elem = this[i]

        if(pontoInicial < 0){
            
            const arrayReverse = this.reverse()
            if(arrayReverse[i] === elementoDePesquisa){
                return i
            }
        }

        if (elem === elementoDePesquisa) {
            return i
        }
    }
    return -1
}

const indexOf = array.newIndexOf(4)
console.log(indexOf)

Array.prototype.newIncludes = function(elementoDePesquisa, pontoInicial = 0) {
    for( let i = pontoInicial; i < this.length; i++) {
        const elem = this[i]
        if (elem === elementoDePesquisa) {
            return true
        }
    }
    return false
}

console.log(array.newIncludes(3))

//newReduce ainda não funcional ######################################
Array.prototype.newReduce = function(callback, acumulador, valorAtual, array, valorInicial) {
    console.log(acumulador, valorInicial)
    
    if (!valorInicial) {
        acumulador = this[0]
        for(let i = 1; i < this.length; i++){
            array = this
            
            callback(acumulador, valorAtual, array)
        }
        
        return acumulador
    }
    if (valorInicial) {
        for(let i = 0; i < this.length; i++){
            array = this
            acumulador = valorInicial
            return callback(acumulador, valorAtual, array)
        }
    
        return acumulador
    }
}

const reduce = array.newReduce(function(acumulador, valorAtual, index, array) {
    return console.log(acumulador, 2);
  })
// ######################################################################