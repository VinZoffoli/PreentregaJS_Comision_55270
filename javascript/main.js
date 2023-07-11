function procesoInscripcion(materiasInscritas = [], nombreAlumno = null) {
  const materias = [
    { nombre: "Inglés", valor: 15000 },
    { nombre: "Francés", valor: 12500 },
    { nombre: "Alemán", valor: 12500 },
    { nombre: "Japonés", valor: 10500 },
    { nombre: "Italiano", valor: 12500 },
    { nombre: "Chino", valor: 13000 },
    { nombre: "Coreano", valor: 10000 },
    { nombre: "Árabe", valor: 8000 },
    { nombre: "Ruso", valor: 9000 },
    { nombre: "Indonesio", valor: 10500 }
  ];

  let bienvenida = "¡Bienvenido/a a la Universidad de Idiomas!\n";
  let mensajeMaterias = "\nListado de Materias:\n";
  for (let i = 0; i < materias.length; i++) {
    mensajeMaterias += `${i + 1}. ${materias[i].nombre} - $${materias[i].valor}\n`;
  }
  alert(bienvenida + mensajeMaterias);

  if (!nombreAlumno) {
    nombreAlumno = prompt("Ingrese su nombre:");
  }

  let cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias a las cuales desea inscribirse:"));

  while (cantidadMaterias < 1 || cantidadMaterias > materias.length) {
    cantidadMaterias = parseInt(prompt("Cantidad inválida. Ingrese la cantidad de materias a las cuales desea inscribirse:"));
  }

  for (let i = 0; i < cantidadMaterias; i++) {
    let numeroMateria = parseInt(prompt(`Ingrese el número de la materia: \n\n${mensajeMaterias}`));
    while (numeroMateria < 1 || numeroMateria > materias.length) {
      numeroMateria = parseInt(prompt(`Número inválido. Ingrese el número de la materia #${i + 1}:\n\n${mensajeMaterias}`));
    }
    let materia = materias[numeroMateria - 1];

    let materiaDuplicada = false;
    for (let j = 0; j < materiasInscritas.length; j++) {
      if (materiasInscritas[j].nombre === materia.nombre) {
        materiaDuplicada = true;
        break;
      }
    }

    if (materiaDuplicada) {
      alert("¡Error! Ya te has inscrito en esa materia.");
      i--;
    } else {
      materiasInscritas.push(materia);
    }
  }

  let valorTotal = 0;
  let mensajeInscripcion = `Materias inscritas por ${nombreAlumno}:\n\n`;
  for (let i = 0; i < materiasInscritas.length; i++) {
    let materia = materiasInscritas[i];
    valorTotal += materia.valor;
    mensajeInscripcion += `${i + 1}. ${materia.nombre} - $${materia.valor}\n`;
  }
  mensajeInscripcion += `\nValor total: $${valorTotal}`;

  // Sentencia switch
  let opcion = prompt("Seleccione una opción:\n1. Ver los resultados\n2. Agregar más materias\n3. Salir");

  switch (opcion) {
    case "1":
      let mensajeFinal = "+-----------------------+\n";
      mensajeFinal += "|   Resumen de Inscripción   |\n";
      mensajeFinal += "+-----------------------+\n";
      mensajeFinal += mensajeInscripcion + "\n";
      mensajeFinal += "+-----------------------+";
      return mensajeFinal;

    case "2":
      return procesoInscripcion(materiasInscritas, nombreAlumno);

    case "3":
      return "¡Hasta luego!";

    default:
      return "Opción inválida.";
  }
}

let mensaje = procesoInscripcion();
alert(mensaje);