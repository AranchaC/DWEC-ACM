// ej 1 //

tvSamnsung = {
    nombre: "TV Samnsung 42",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    importe: function(){
        return (this.unidades*this.precio);
    },
};

// get y set
class Productos {
    constructor (nombre, categoria, unidades, precio ){
        this._nombre = nombre;
        this._categoria = categoria;
        this._unidades = unidades;
        this._precio = precio;
    }//const

    get nombre()    {return this._nombre;}
    get categoria() {return this._categoria;}
    get unidades()  {return this._unidades;}
    get precio()    {return this._precio;}

    set nombre(valor)   {this._nombre = valor;}
    set categoria(valor){this._categoria = valor;}
    set unidades(valor) {this._unidades = valor;}
    set precio(valor)   {this._precio = valor;}

    importe(){
        return parseInt(this._unidades*this._precio);
    }

    getInfo(){
        console.log(`${this._nombre} (${this._categoria}): ${this._unidades}uds x ${this._precio}€ = ${this.importe()}€.`
        );
    }

    toString(){
        return String(`Del producto: ${this._nombre} hay ${this._unidades} uds.`);
    }

    valueOf(){
        return parseInt(this._precio);
    }

    static saludar(){
        console.log (`Hola que tal`)
    }
}

let prod1 = new Productos("TV Samnsung 42", "Televisores", 4, 345.95);
let prod2 = new Productos("Lenovo 123", "Portátiles", 3, 455.6);
let prod3 = new Productos("IPhone 13", "Móviles", 5, 555);

class Televisores extends Productos {
    constructor (nombre, categoria, unidades, precio, tamanio){
        super (nombre, categoria, unidades, precio);
        this._tamanio = tamanio;
    }

    get tamanio(){return this._tamanio;}
    set tamanio(valor){this._tamanio = valor;}

    getInfo(){
        console.log(`${super._nombre} tiene ${this._tamanio} de tamaño`);
    }

    toString(){
        return String(`De la TV ${super._nombre} hay ${super._unidades}uds.`);
    }

    valueOf(){
        return parseInt(super._precio);
    }

    static saludar(){
        console.log (`Hola que tal`);
    }
}

let prod4 = new Productos("TV LG 52", "Televisores", 7, 125);
let prod5 = new Productos("TV Samnsung 32 4k", "Televisores", 2, 400);

let todos = [prod1,prod2,prod3,prod4, prod5];

Productos.prototype.prodOdenPorNombre() = function(){
    return this.sort((a,b) => a.nombre.localeCompare(b.nombre))
}

Productos.prototype.pordOrdenPorPrecio() = function(){
    return this.sort((a,b) => a.precio.compareNumbers(b.precio))
}

Productos.prototype.prodPrecioTotal() = function(){
    total=0;
    this.forEach((producto => total+= producto._precio));
    return total;
}


