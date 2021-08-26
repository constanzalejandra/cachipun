// ========================== REQUERIMIENTO :: 1 ==========================
// paso 1.- Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
// paso 1.- decir, cuántas veces deberá jugar contra la computadora.

// paso 2.- Por cada juego, se debe mostrar el resultado inmediatamente y luego pedir
// paso 2.- nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar.

const cantadidDeJuegos = +prompt(
  "Ingrese la cantidad de juegos que desea jugar: "
);

let juegosFinalizados = 0;

// cantadidDeJuegos = 3

while (juegosFinalizados < cantadidDeJuegos) {
  console.log("Cantidad de veces a jugar ", cantadidDeJuegos);
  console.log("Cantidad de juegos finalizados ", juegosFinalizados);
  // ========================== REQUERIMIENTO :: 2 ==========================
  // paso 1.- Solicitar al usuario que indique su jugada.
  // paso 2.- Las opciones son las siguientes:
  // ● Piedra
  // ● Papel
  // ● Tijera

  const jugada = prompt("Ingrese su jugada(PIEDRA :: PAPEL :: TIJERAS)");
  switch (jugada.toUpperCase()) {
    case "PIEDRA":
      break;
    case "PAPEL":
      break;
    case "TIJERAS":
      break;
    default:
      alert("Solo se puede seleccionar PIEDRA :: PAPEL :: TIJERAS");
      break;
  }
  console.log("El usuario jugo:  ", jugada);

  // ========================== REQUERIMIENTO :: 3 ==========================
  // Generar una jugada automática para la máquina usando la función Math.random()
  // de Javascript.

  // function jugadaMaquina(parametros) {
  // }

  const jugadaMaquina = () => {
    // nos retornara un numero entre el 0 y el 2
    const numeroAleatorio = Math.floor(Math.random() * 3);
    // piedra = 0, papel = 1, tijera = 2
    switch (numeroAleatorio) {
      case 0:
        return "PIEDRA";
      case 1:
        return "PAPEL";
      case 2:
        return "TIJERAS";
    }
  };

  // ========================== REQUERIMIENTO :: 4 ==========================
  // Definir a un ganador considerando la jugada del usuario y la generada
  // automáticamente por la máquina.
  // ========================== REQUERIMIENTO :: 5 ==========================
  // Indicar el resultado de la partida dependiendo del caso:
  // ● Felicitar al ganador en caso de ser el usuario.
  // ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
  // la que gane.
  // ● Declarar un empate.
  const jM = jugadaMaquina();
  console.log("La maquina jugo: ", jM);
  switch (jM) {
    case "PIEDRA":
      if (jugada === "PIEDRA") {
        console.log("Epataste con la maquina");
      } else if (jugada === "PAPEL") {
        console.log("Felicidades!! le has ganado a la maquina <3 ");
      } else {
        console.log("Lo lamento ... fuiste derrotado por la maquina :'C ");
      }
      break;
    case "PAPEL":
      if (jugada === "PIEDRA") {
        console.log("Lo lamento ... fuiste derrotado por la maquina :'C ");
      } else if (jugada === "PAPEL") {
        console.log("Epataste con la maquina");
      } else {
        console.log("Felicidades!! le has ganado a la maquina <3 ");
      }
      break;
    case "TIJERAS":
      if (jugada === "PIEDRA") {
        console.log("Felicidades!! le has ganado a la maquina <3 ");
      } else if (jugada === "PAPEL") {
        console.log("Lo lamento ... fuiste derrotado por la maquina :'C ");
      } else {
        console.log("Epataste con la maquina");
      }
      break;
  }
  juegosFinalizados++;
}
