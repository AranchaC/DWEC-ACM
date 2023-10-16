// ej 1 //
function ej1(){

    tvSamnsung = {
        nombre: "TV Samnsung 42",
        categoria: "Televisores",
        unidades: 4,
        precio: 345.95,
        importe: function(){
            return (this.unidades*this.precio);
        },
    };
}

// get y set
class Productos {
    constructor (nombre, categoria, unidades, precio ){
        this._nombre = nombre;
        this._categoria = categoria;
        this._unidades = unidades;
        this._precio = precio;
    }//const

    get nombre(){return this._nombre;}
    get categoria(){return this._categoria;}
    get unidades(){return this._unidades;}
    get precio(){return this._precio;}

    set nombre(valor){this._nombre = valor;}
    set categoria(valor){this._categoria = valor;}
    set unidades(valor){this._unidades = valor;}
    set precio(valor){this._precio = valor;}

    importe(){
        return this.unidades*this.precio;
    }

    getInfo(){
        console.log(this.nombre + "(" + this.categoria + "): " + this.unidades+"uds x "+
            this.precio+"€ = " + this.importe() + "€."
        );
    }
}

