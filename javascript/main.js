function procesoInscripcion() {
    let materias = [
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
  
    let nombreAlumno = prompt("Ingrese su nombre:");
  
    let cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias a las cuales desea inscribirse:"));
  
    while (cantidadMaterias < 1 || cantidadMaterias > materias.length) {
      cantidadMaterias = parseInt(prompt("Cantidad inválida. Ingrese la cantidad de materias a las cuales desea inscribirse:"));
    }
  
    let materiasInscritas = [];
  
    for (let i = 0; i < cantidadMaterias; i++) {
      let numeroMateria = parseInt(prompt(`Ingrese el número de la materia: \n\n${mensajeMaterias}`));
      while (numeroMateria < 1 || numeroMateria > materias.length) {
        numeroMateria = parseInt(prompt(`Número inválido. Ingrese el número de la materia #${i + 1}:\n\n${mensajeInscripcionMaterias}`));
      }
      let materia = materias[numeroMateria - 1];
      materiasInscritas.push(materia);
    }
  
    let valorTotal = 0;
    let mensajeInscripcion = `Materias inscritas por ${nombreAlumno}:\n\n`;
    for (let i = 0; i < materiasInscritas.length; i++) {
      let materia = materiasInscritas[i];
      valorTotal += materia.valor;
      mensajeInscripcion += `${i + 1}. ${materia.nombre} - $${materia.valor}\n`;
    }
    mensajeInscripcion += `\nValor total: $${valorTotal}`;
  
    let mensajeFinal = "+-----------------------+\n";
    mensajeFinal += "|   Resumen de Inscripción   |\n";
    mensajeFinal += "+-----------------------+\n";
    mensajeFinal += mensajeInscripcion + "\n";
    mensajeFinal += "+-----------------------+";
  
    return mensajeFinal;
  }
  
  let mensaje = procesoInscripcion();
  alert(mensaje);