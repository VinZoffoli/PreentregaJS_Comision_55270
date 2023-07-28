function procesoCompra(videojuegosComprados = [], nombreCliente = null) {
  //Videojuegos de Nintendo
  const videojuegos = [
    { nombre: "Super Mario Odyssey", precio: 5000 },
    { nombre: "The Legend of Zelda: Breath of the Wild", precio: 5500 },
    { nombre: "Mario Kart 8 Deluxe", precio: 4800 },
    { nombre: "Splatoon 2", precio: 5200 },
    { nombre: "Animal Crossing: New Horizons", precio: 5300 },
    { nombre: "Super Smash Bros. Ultimate", precio: 4900 },
    { nombre: "Pokémon Sword", precio: 5100 },
    { nombre: "Fire Emblem: Three Houses", precio: 5400 },
    { nombre: "Luigi's Mansion 3", precio: 5200 },
    { nombre: "Super Mario Party", precio: 4700 },
    { nombre: "New Super Mario Bros. U Deluxe", precio: 4600 },
    { nombre: "The Legend of Zelda: Skyward Sword HD", precio: 5300 },
    { nombre: "Super Mario 3D World + Bowser's Fury", precio: 5800 },
    { nombre: "Pokémon Brilliant Diamond", precio: 5000 },
    { nombre: "Metroid Dread", precio: 5600 }
  ];
  //Amiibos de Nintendo
  const amiibosNintendo = [
    { nombre: "Mario", precio: 1500 },
    { nombre: "Link", precio: 1600 },
    { nombre: "Princess Peach", precio: 1700 },
    { nombre: "Yoshi", precio: 1400 },
    { nombre: "Donkey Kong", precio: 1600 },
    { nombre: "Samus Aran", precio: 1800 },
    { nombre: "Kirby", precio: 1400 },
    { nombre: "Fox McCloud", precio: 1700 },
    { nombre: "Pikachu", precio: 1500 },
    { nombre: "Luigi", precio: 1600 },
    { nombre: "Isabelle", precio: 1200 },
    { nombre: "Mega Man", precio: 1300 },
    { nombre: "Inkling", precio: 1100 },
    { nombre: "Sonic", precio: 1400 },
    { nombre: "Rosalina", precio: 1300 }
  ];
  //Consolas de Nintendo
  const consolasNintendo = [
    { nombre: "Nintendo Switch", precio: 15000 },
    { nombre: "Nintendo Switch Lite", precio: 12000 },
    { nombre: "Nintendo 2DS", precio: 8000 },
    { nombre: "Nintendo 3DS", precio: 10000 },
    { nombre: "Nintendo Switch OLED", precio: 18000 },
    { nombre: "Nintendo Wii U", precio: 6000 },
    { nombre: "Nintendo GameCube", precio: 5000 },
    { nombre: "Nintendo 64", precio: 3000 },
    { nombre: "Super Nintendo (SNES)", precio: 2500 },
    { nombre: "Nintendo Entertainment System (NES)", precio: 2000 },
    { nombre: "Game Boy Color", precio: 5000 },
    { nombre: "Nintendo DS Lite", precio: 7000 },
    { nombre: "Nintendo Switch OLED White", precio: 19000 },
    { nombre: "Nintendo Switch OLED Red/Blue", precio: 19000 },
    { nombre: "Nintendo Game & Watch: The Legend of Zelda", precio: 6000 }
  ];
  //Peluches de Nintendo
  const peluchesNintendo = [
    { nombre: "Mario", precio: 800 },
    { nombre: "Yoshi", precio: 900 },
    { nombre: "Princess Peach", precio: 1000 },
    { nombre: "Link", precio: 900 },
    { nombre: "Kirby", precio: 800 },
    { nombre: "Pikachu", precio: 1000 },
    { nombre: "Luigi", precio: 900 },
    { nombre: "Jigglypuff", precio: 1000 },
    { nombre: "Toad", precio: 800 },
    { nombre: "Donkey Kong", precio: 900 },
    { nombre: "Wario", precio: 1000 },
    { nombre: "Diddy Kong", precio: 800 },
    { nombre: "R.O.B.", precio: 1200 },
    { nombre: "Captain Falcon", precio: 900 },
    { nombre: "Ness", precio: 1000 }
  ];

  //Funcion para producto destacado utilizando Math.random y Math.floor
  function productoDestacadoAleatorio() {
    let categorias = [videojuegos, amiibosNintendo, consolasNintendo, peluchesNintendo];
    let categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    let productoAleatorio = categoriaAleatoria[Math.floor(Math.random() * categoriaAleatoria.length)];
    return productoAleatorio;
  }

  //Función para la fecha y hora actual
  function FechaHoraActual() {
    const fechaHoraActual = new Date();
    const dia = fechaHoraActual.getDate();
    const mes = fechaHoraActual.getMonth() + 1;
    const año = fechaHoraActual.getFullYear();
    const hora = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();

    return `${dia}/${mes}/${año} ${hora}:${minutos}`;
  }

  //Funcion para el descuento
  function aplicarDescuento(precioTotal) {
    const cantidadProductosComprados = videojuegosComprados.length;
    if (cantidadProductosComprados >= 3) {
      const descuento = precioTotal * 0.1; // 10% de descuento
      return precioTotal - descuento;
    } else {
      return precioTotal;
    }
  }

  // Login
  function login() {
    while (true) {
      let opcionLogin = prompt("Seleccione una opción:\n\r1. Administrador\n2. Cliente\n3. Salir del programa");

      switch (opcionLogin) {
        case "1":
          menuAdministrador();
          break;

        case "2":
          comprarVideojuegos();
          break;

        case "3":
          alert("¡Hasta luego!");
          return;

        default:
          alert("Opción inválida.");
          break;
      }
    }
  }

  // Login y mostrar el producto destacado
  let productoDestacado = productoDestacadoAleatorio();
  let mensajeSaludo = `¡Bienvenido/a a la Tienda de Nintendo!\n\rEl producto destacado del día es:\n${productoDestacado.nombre} - $${productoDestacado.precio}`;
  alert(mensajeSaludo);

  login();

  //Menu del Administrador
  function menuAdministrador() {
    alert("¡Bienvenido/a Administrador/a!");

    while (true) {
      let opcionAdmin = prompt("Seleccione una opción:\n\r1. Agregar productos\n2. Eliminar productos\n3. Buscar productos\n4. Volver al menú principal");

      switch (opcionAdmin) {
        case "1":
          agregarProductos();
          break;

        case "2":
          eliminarProductos();
          break;

        case "3":
          buscarProductos();
          break;

        case "4":
          return;

        default:
          alert("Opción inválida.");
          break;
      }
    }
  }

  //Seleccionar categoria para agregar productos
  function agregarProductos() {
    let tipoProducto = prompt("Ingrese el tipo de producto a agregar:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches");

    switch (tipoProducto) {
      case "1":
        agregarProducto(videojuegos);
        break;

      case "2":
        agregarProducto(amiibosNintendo);
        break;

      case "3":
        agregarProducto(consolasNintendo);
        break;

      case "4":
        agregarProducto(peluchesNintendo);
        break;

      default:
        alert("Opción inválida.");
        break;
    }
  }
  
  //Agregar productos en listaProductos
  function agregarProducto(listaProductos) {
    while (true) {
      let nombreProducto = prompt("Ingrese el nombre del producto a agregar:");

      let precioProducto = parseInt(prompt("Ingrese el precio del producto:"));

      listaProductos.push({ nombre: nombreProducto, precio: precioProducto });

      alert("¡Producto agregado exitosamente!");

      let opcion = prompt("¿Desea agregar otro producto?\n\r1. Sí\n2. Volver al menú principal del Administrador");
      if (opcion !== "1") {
        return;
      }
    }
  }

  //Eliminar productos de listaProductos el cual tiene su informacion relacionada a los Arrays
  function eliminarProductos() {
    let tipoProducto = prompt("Ingrese el tipo de producto a eliminar:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches");

    let listaProductos;

    switch (tipoProducto) {
      case "1":
        listaProductos = videojuegos;
        break;

      case "2":
        listaProductos = amiibosNintendo;
        break;

      case "3":
        listaProductos = consolasNintendo;
        break;

      case "4":
        listaProductos = peluchesNintendo;
        break;

      default:
        alert("Opción inválida.");
        return;
    }

    //Listado de productos
    let mensajeProductos = "\nListado de Productos:\n";
    for (let i = 0; i < listaProductos.length; i++) {
      mensajeProductos += `${i + 1}. ${listaProductos[i].nombre} - $${listaProductos[i].precio}\n`;
    }

    let numeroProductoEliminar = parseInt(prompt(`Seleccione el número del producto que desea eliminar:\n${mensajeProductos}`));

    if (numeroProductoEliminar >= 1 && numeroProductoEliminar <= listaProductos.length) {
      listaProductos.splice(numeroProductoEliminar - 1, 1);
      alert("¡Producto eliminado exitosamente!");
    } else {
      alert("Número de producto inválido.");
    }
  }

  //Funcion para buscar productos segun el alfabeto o el numero
  function buscarProductos() {
    let tipoProducto = prompt("Ingrese el tipo de producto a buscar:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches");

    let listaProductos;

    switch (tipoProducto) {
      case "1":
        listaProductos = videojuegos;
        break;

      case "2":
        listaProductos = amiibosNintendo;
        break;

      case "3":
        listaProductos = consolasNintendo;
        break;

      case "4":
        listaProductos = peluchesNintendo;
        break;

      default:
        alert("Opción inválida.");
        return;
    }

    let opcionBuscar = prompt("Seleccione una opción para buscar productos:\n\r1. Filtrar alfabéticamente\n2. Filtrar por número");

    switch (opcionBuscar) {
      case "1":
        let nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
        let resultadosNombre = listaProductos.filter(producto => producto.nombre.toLowerCase().includes(nombreBuscar.toLowerCase()));

        if (resultadosNombre.length === 0) {
          alert("No se encontraron productos con ese nombre.");
        } else {
          mostrarResultados(resultadosNombre);
        }
        break;

      case "2":
        let numeroBuscar = parseInt(prompt("Ingrese el número del producto a buscar:"));
        if (numeroBuscar >= 1 && numeroBuscar <= listaProductos.length) {
          alert(`Producto encontrado:\n${listaProductos[numeroBuscar - 1].nombre} - $${listaProductos[numeroBuscar - 1].precio}`);
        } else {
          alert("Número de producto inválido.");
        }
        break;

      default:
        alert("Opción inválida.");
        break;
    }
  }
  
  function mostrarResultados(resultados) {
    let mensajeResultados = "Resultados de la búsqueda:\n";
    for (let i = 0; i < resultados.length; i++) {
      mensajeResultados += `${i + 1}. ${resultados[i].nombre} - $${resultados[i].precio}\n`;
    }
    alert(mensajeResultados);
  }

  //Funcion de cliente (Aunque se llama comprarVideojuego es el menu del Cliente)
  function comprarVideojuegos() {
    let bienvenida = "¡Bienvenido/a a la Tienda de Nintendo!\nSi compra 3 o mas productos tendra un descuento del 10%";
    let mensajeCategorias = "\n\rSeleccione una categoría de productos:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches\n";

    let categoriaElegida = parseInt(prompt(bienvenida + mensajeCategorias));

    while (categoriaElegida < 1 || categoriaElegida > 4) {
      categoriaElegida = parseInt(prompt("Opción inválida. " + mensajeCategorias));
    }

    let listaProductos;
    let mensajeProductos;

    switch (categoriaElegida) {
      case 1:
        listaProductos = videojuegos;
        mensajeProductos = "\nListado de Videojuegos Disponibles:\n";
        break;

      case 2:
        listaProductos = amiibosNintendo;
        mensajeProductos = "\nListado de Amiibos Disponibles:\n";
        break;

      case 3:
        listaProductos = consolasNintendo;
        mensajeProductos = "\nListado de Consolas Disponibles:\n";
        break;

      case 4:
        listaProductos = peluchesNintendo;
        mensajeProductos = "\nListado de Peluches Disponibles:\n";
        break;

      default:
        alert("Opción inválida.");
        return;
    }

    for (let i = 0; i < listaProductos.length; i++) {
      mensajeProductos += `${i + 1}. ${listaProductos[i].nombre} - $${listaProductos[i].precio}\n`;
    }

    alert(bienvenida + mensajeProductos);

    if (!nombreCliente) {
      nombreCliente = prompt("Ingrese su nombre:");
    }

    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));

    while (cantidadProductos < 1 || cantidadProductos > listaProductos.length) {
      cantidadProductos = parseInt(prompt("Cantidad inválida. Ingrese la cantidad de productos que desea comprar:"));
    }

    for (let i = 0; i < cantidadProductos; i++) {
      let numeroProducto = parseInt(prompt(`Ingrese el número del producto: \n\n${mensajeProductos}`));
      while (numeroProducto < 1 || numeroProducto > listaProductos.length) {
        numeroProducto = parseInt(prompt(`Número inválido. Ingrese el número del producto #${i + 1}:\n\n${mensajeProductos}`));
      }
      let producto = listaProductos[numeroProducto - 1];

      let productoDuplicado = false;
      for (let j = 0; j < videojuegosComprados.length; j++) {
        if (videojuegosComprados[j].nombre === producto.nombre) {
          productoDuplicado = true;
          break;
        }
      }

      if (productoDuplicado) {
        alert("¡Error! Ya has comprado ese producto.");
        i--;
      } else {
        videojuegosComprados.push(producto);
      }
    }

    //Menu final del Cliente para mostrar resumen de compra 
    let precioTotal = 0;
    let mensajeCompra = `Productos comprados por ${nombreCliente}:\n\n`;
    for (let i = 0; i < videojuegosComprados.length; i++) {
      let producto = videojuegosComprados[i];
      precioTotal += producto.precio;
      mensajeCompra += `${i + 1}. ${producto.nombre} - $${producto.precio}\n`;
    }
    const precioTotalConDescuento = aplicarDescuento(precioTotal);
    mensajeCompra += `\nPrecio total: $${precioTotal}`;
    if (precioTotalConDescuento !== precioTotal) {
      mensajeCompra += `\nPrecio total (con descuento): $${precioTotalConDescuento}`;
    }
    mensajeCompra += `\n\rFecha y hora de la compra: ${FechaHoraActual()}`;

    while (true) {
      let opcion = prompt("Seleccione una opción:\n\r1. Ver el resumen de compra\n2. Agregar más productos\n3. Salir");

      switch (opcion) {
        case "1":
          let mensajeFinal = "+-----------------------+\n";
          mensajeFinal += "|   Resumen de Compra   |\n";
          mensajeFinal += "+-----------------------+\n";
          mensajeFinal += mensajeCompra + "\n";
          mensajeFinal += "+-----------------------+";
          alert(mensajeFinal);
          break;

        case "2":
          comprarVideojuegos();
          break;

        case "3":
          alert("¡Hasta luego!");
          return;

        default:
          alert("Opción inválida.");
          break;
      }
    }
  }
}

let mensaje = procesoCompra();