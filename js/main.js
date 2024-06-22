
//constructor basico
class Persona {
    constructor(nombre, edad, dni, tieneTarjeta){
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.tieneTarjeta = tieneTarjeta;
    }
    //funciones dentro de constructores
    hablar(){ 
        console.log("HOLA SOY "+ this.nombre)
    }
    
}

//creando nuevo humano en base al constructor
const humano1 = new Persona("Carlos", 24, 42297696, false);
const humano2 = new Persona("Ana", 20, 42368184, true);
const humano3 = new Persona("Alejandro", 19, 42727374, true);
const humano4 = new Persona("Zoe", 22, 42277239, false);

//usando funcion dentro del constructor para que haga algo
// humano1.hablar();
// humano2.hablar();
// humano3.hablar();
// humano4.hablar();

const array = [humano1.nombre, humano2.nombre, humano3.nombre, humano4.nombre];

console.log(array);

const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < numeros.length; index++) {
    alert(numeros[index]);
}

//===================================
//no se me ocurrio algo mas original y como debia demostrar que habia entendido realize lo siguiente.
//Este es un simulador de seguros(basico).
// let nombre = prompt("Este es un simulador de seguros.\nPor favor colocar su nombre: \n(Coloque ESC para terminar)");

// while (nombre != "ESC"){
//     //primero, la marca del auto.
//     let textoMarca = "ingrese con el numero el tipo de marca del auto: \n\n";
//     textoMarca += "1-Ford\n";
//     textoMarca += "2-Chevrolet\n";
//     textoMarca += "3-Audi\n";
//     textoMarca += "4-Fiat";

//     let marca = parseInt(prompt(textoMarca));
    
//     //segundo, pido el año del vehiculo.
//     let textoAnio = "ingrese con el numero el año aproximado del vehiculo: \n\n";
//     textoAnio += "1-2000 al 2005\n";
//     textoAnio += "2-2006 al 2010\n";
//     textoAnio += "3-2011 al 2015\n";
//     textoAnio += "4-2016 al 2020\n";
//     textoAnio += "5-2021 al 2025";

//     let anio = parseInt(prompt(textoAnio));

//     //tercero, pregunto si el auto es 0km o no.
//     let km = prompt("¿su auto es 0km?\n" + "coloque (si) si su auto es 0 kilometros o (no) si no lo es: ");

//     //Cuarto, pregunto si el auto utiliza GNC o no.
//     let gnc = prompt("¿su auto utiliza GNC?\n" + "coloque (si) si su auto lo utiliza o (no) si no lo hace: ");

//     //estas son variables de valor en referencia al valor numero de dinero
//     let valorMarca;
//     let valorAnio;

//     //obtencion de marca y año String
//     marca = obtenerMarca(marca);
//     anio = obtenerAnioAproximado(anio);

//     //obtencion de los valores de marca y año interger
//     valorMarca = obtenerValorMarca(marca);
//     valorAnio = obtenerValorAnio(anio);

//     //calculos finales y verficaciones
//     let valorTotal = sumar(valorMarca,valorAnio);
//     valorTotal = verificacionKm(valorTotal,km);
//     valorTotal = verificacionGnc(valorTotal,gnc);

//     // SALIDA DE DATOS
//     salida(marca,anio,km,gnc,nombre,valorMarca,valorAnio,valorTotal);
//     nombre = prompt("Este es un simulador de seguros.\nPor favor colocar su nombre: \n(Coloque ESC para terminar)");
// }

// //Desde aca empiezan las funciones
// function obtenerMarca(numero) {
//     switch (numero) {
//         case 1:
//             return "Ford";
//         case 2:
//             return "Chevrolet";
//         case 3:
//             return "Audi";
//         case 4:
//             return "Fiat";
//         default:
//             return undefined;
//     }
// }

// function obtenerAnioAproximado(numero) {
//     switch (numero) {
//         case 1:
//             return "2000 al 2005";
//         case 2:
//             return "2006 al 2010";
//         case 3:
//             return "2011 al 2015";
//         case 4:
//             return "2016 al 2020";
//         case 5:
//             return "2021 al 2025";
//         default:
//             return undefined;
//     }
// }

// function obtenerValorMarca(marca) {
//     if (marca == "Ford") {
//         return 10000;
//     }else if (marca == "Chevrolet") {
//         return 12000;
//     }else if (marca == "Audi") {
//         return 14000;
//     }else if (marca == "Fiat") {
//         return 16000;
//     }else{
//         return undefined;
//     }
// }

// function obtenerValorAnio(anio){
//     if (anio == "2000 al 2005") {
//         return 10000;
//     }else if (anio == "2006 al 2010") {
//         return 12000;
//     }else if (anio == "2011 al 2015") {
//         return 14000;
//     }else if (anio == "2016 al 2020") {
//         return 16000;
//     }else if (anio == "2021 al 2025") {
//         return 18000;
//     }else{
//         return undefined;
//     }
// }

// function sumar(valor1,valor2){
//     return valor1 + valor2;
// }

// function verificacionKm(valorTotal,km) {
//     if (km=="si") {
//         valorTotal=valorTotal+((valorTotal*10)/100);
//     }
//     return valorTotal;
// }

// function verificacionGnc(valorTotal,gnc){
//     if (gnc=="si") {
//         valorTotal=valorTotal+((valorTotal*30)/100);
//     }
//     return valorTotal;
// }

// function salida(marca, anio,km,gnc, nombre, valorMarca,valorAnio,valorTotal) {
//     let aviso= "su auto es de la marca: " + marca +"\n";
//     aviso += "del año aproximado: " + anio + "\n";
//     aviso += "¿es 0km?: " + km +"\n";
//     aviso += "¿tiene gnc?: " + gnc +"\n";
//     aviso += "valor por marca: " + valorMarca + "\n" + "valor por año: "  + valorAnio + "\n" + "valor total por el seguro: " + valorTotal;

//     alert("Hola " + nombre + ", tu informacion es la siguiente: \n" + aviso);
// }
//===================================