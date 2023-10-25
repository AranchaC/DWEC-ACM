const parrafo1 = {
    titulo: "Primer bloqe de párrafos",
    hijos: ["Este es el primer párrafo", "Este es el segundo párrafo", "Este es el tercer párrafo"]
};

const parrafo2 = {
    titulo: "Segundo bloqe de párrafos",
    hijos: ["Este es el primer párrafo", "Este es el segundo párrafo", "Este es el tercer párrafo"]
};

const estructura = new Set();

//agregar objetos al conjunto
estructura.add(parrafo1);
estructura.add(parrafo2);