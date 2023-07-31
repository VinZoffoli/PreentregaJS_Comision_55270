class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class ProductoTCG extends Producto {}

const videojuegos = [
  new Producto("Super Mario Odyssey", 5000),
  new Producto("The Legend of Zelda: Breath of the Wild", 5500),
  new Producto("Mario Kart 8 Deluxe", 4800),
  new Producto("Splatoon 2", 5200),
  new Producto("Animal Crossing: New Horizons", 5300),
  new Producto("Super Smash Bros. Ultimate", 4900),
  new Producto("Pokémon Sword", 5100),
  new Producto("Fire Emblem: Three Houses", 5400),
  new Producto("Luigi's Mansion 3", 5200),
  new Producto("Super Mario Party", 4700),
  new Producto("New Super Mario Bros. U Deluxe", 4600),
  new Producto("The Legend of Zelda: Skyward Sword HD", 5300),
  new Producto("Super Mario 3D World + Bowser's Fury", 5800),
  new Producto("Pokémon Brilliant Diamond", 5000),
  new Producto("Metroid Dread", 5600),
];

const amiibosNintendo = [
  new Producto("Mario", 1500),
  new Producto("Link", 1600),
  new Producto("Princess Peach", 1700),
  new Producto("Yoshi", 1400),
  new Producto("Donkey Kong", 1600),
  new Producto("Samus Aran", 1800),
  new Producto("Kirby", 1400),
  new Producto("Fox McCloud", 1700),
  new Producto("Pikachu", 1500),
  new Producto("Luigi", 1600),
  new Producto("Isabelle", 1200),
  new Producto("Mega Man", 1300),
  new Producto("Inkling", 1100),
  new Producto("Sonic", 1400),
  new Producto("Rosalina", 1300),
];

const consolasNintendo = [
  new Producto("Nintendo Switch", 15000),
  new Producto("Nintendo Switch Lite", 12000),
  new Producto("Nintendo 2DS", 8000),
  new Producto("Nintendo 3DS", 10000),
  new Producto("Nintendo Switch OLED", 18000),
  new Producto("Nintendo Wii U", 6000),
  new Producto("Nintendo GameCube", 5000),
  new Producto("Nintendo 64", 3000),
  new Producto("Super Nintendo (SNES)", 2500),
  new Producto("Nintendo Entertainment System (NES)", 2000),
  new Producto("Game Boy Color", 5000),
  new Producto("Nintendo DS Lite", 7000),
  new Producto("Nintendo Switch OLED White", 19000),
  new Producto("Nintendo Switch OLED Red/Blue", 19000),
  new Producto("Nintendo Game & Watch: The Legend of Zelda", 6000),
];

const peluchesNintendo = [
  new Producto("Mario", 800),
  new Producto("Yoshi", 900),
  new Producto("Princess Peach", 1000),
  new Producto("Link", 900),
  new Producto("Kirby", 800),
  new Producto("Pikachu", 1000),
  new Producto("Luigi", 900),
  new Producto("Jigglypuff", 1000),
  new Producto("Toad", 800),
  new Producto("Donkey Kong", 900),
  new Producto("Wario", 1000),
  new Producto("Diddy Kong", 800),
  new Producto("R.O.B.", 1200),
  new Producto("Captain Falcon", 900),
  new Producto("Ness", 1000),
];

let videojuegosComprados = [];
let nombreCliente = null;


  //Funcion para producto destacado utilizando Math.random y Math.floor
  function productoDestacadoAleatorio() {
    let categorias = [
      videojuegos,
      amiibosNintendo,
      consolasNintendo,
      peluchesNintendo,
    ];
    let categoriaAleatoria =
      categorias[Math.floor(Math.random() * categorias.length)];
    let productoAleatorio =
      categoriaAleatoria[Math.floor(Math.random() * categoriaAleatoria.length)];
    return productoAleatorio;
  }

  //Funcion para el descuento
  function aplicarDescuento(precioTotal, cantidadProductosComprados) {
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
      let opcionLogin = prompt(
        "Seleccione una opción:\n\r1. Administrador\n2. Cliente\n3. Salir del programa"
      );

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
      let opcionAdmin = prompt(
        "Seleccione una opción:\n\r1. Agregar productos\n2. Eliminar productos\n3. Buscar productos\n4. Volver al menú principal"
      );

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
    let tipoProducto = prompt(
      "Ingrese el tipo de producto a agregar:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches"
    );

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
      let precioProducto = null;
  
      while (precioProducto === null) {
        let precioIngresado = prompt("Ingrese el precio del producto:");
        precioProducto = parseFloat(precioIngresado);
  
        if (isNaN(precioProducto)) {
          alert(
            "El precio ingresado no es válido. Por favor, ingrese un número."
          );
          precioProducto = null;
        }
      }
  
      listaProductos.push(new Producto(nombreProducto, precioProducto));
  
      alert("¡Producto agregado exitosamente!");
  
      let opcion = prompt(
        "¿Desea agregar otro producto?\n\r1. Sí\n2. Volver al menú principal del Administrador"
      );
      if (opcion !== "1") {
        return;
      }
    }
  }

  //Eliminar productos de listaProductos el cual tiene su informacion relacionada a los Arrays
  function eliminarProductos() {
    let tipoProducto = prompt(
      "Ingrese el tipo de producto a eliminar:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches"
    );

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
      mensajeProductos += `${i + 1}. ${listaProductos[i].nombre} - $${
        listaProductos[i].precio
      }\n`;
    }

    let numeroProductoEliminar = parseInt(
      prompt(
        `Seleccione el número del producto que desea eliminar:\n${mensajeProductos}`
      )
    );

    if (
      numeroProductoEliminar >= 1 &&
      numeroProductoEliminar <= listaProductos.length
    ) {
      listaProductos.splice(numeroProductoEliminar - 1, 1);
      alert("¡Producto eliminado exitosamente!");
    } else {
      alert("Número de producto inválido.");
    }
  }

  //Funcion para buscar productos segun el alfabeto o el numero
  function buscarProductos() {
    let tipoProducto = prompt(
      "Ingrese el tipo de producto a buscar:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches"
    );

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

    let opcionBuscar = prompt(
      "Seleccione una opción para buscar productos:\n\r1. Filtrar alfabéticamente\n2. Filtrar por número"
    );

    switch (opcionBuscar) {
      case "1":
        let nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
        let resultadosNombre = listaProductos.filter((producto) =>
          producto.nombre.toLowerCase().includes(nombreBuscar.toLowerCase())
        );

        if (resultadosNombre.length === 0) {
          alert("No se encontraron productos con ese nombre.");
        } else {
          mostrarResultados(resultadosNombre);
        }
        break;

      case "2":
        let numeroBuscar = parseInt(
          prompt("Ingrese el número del producto a buscar:")
        );
        if (numeroBuscar >= 1 && numeroBuscar <= listaProductos.length) {
          alert(
            `Producto encontrado:\n${
              listaProductos[numeroBuscar - 1].nombre
            } - $${listaProductos[numeroBuscar - 1].precio}`
          );
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
      mensajeResultados += `${i + 1}. ${resultados[i].nombre} - $${
        resultados[i].precio
      }\n`;
    }
    alert(mensajeResultados);
  }

  //Funcion de cliente (Aunque se llama comprarVideojuego es el menu del Cliente)
  function comprarVideojuegos() {
    let precioTotal = 0;
    let cantidadProductosComprados = 0;
    let bienvenida =
      "¡Bienvenido/a a la Tienda de Nintendo!\nSi compra 3 o mas productos tendra un descuento del 10%";
    let mensajeCategorias =
      "\n\rSeleccione una categoría de productos:\n\r1. Videojuegos\n2. Amiibos\n3. Consolas\n4. Peluches\n";

    let categoriaElegida = parseInt(prompt(bienvenida + mensajeCategorias));

    while (categoriaElegida < 1 || categoriaElegida > 4) {
      categoriaElegida = parseInt(
        prompt("Opción inválida. " + mensajeCategorias)
      );
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
      mensajeProductos += `${i + 1}. ${listaProductos[i].nombre} - $${
        listaProductos[i].precio
      }\n`;
    }

    alert(bienvenida + mensajeProductos);

    if (!nombreCliente) {
      nombreCliente = prompt("Ingrese su nombre:");
      while (nombreCliente && !/^[a-zA-Z]+$/.test(nombreCliente)) {
        nombreCliente = prompt("¡Error! Ingrese un nombre válido:");
      }
    }
  
    let cantidadProductos = parseInt(
      prompt("Ingrese la cantidad de productos que desea comprar:")
    );
  
    while (isNaN(cantidadProductos) || cantidadProductos < 1 || cantidadProductos > listaProductos.length) {
      cantidadProductos = parseInt(
        prompt("Cantidad inválida. Ingrese la cantidad de productos que desea comprar:")
      );
    }

    for (let i = 0; i < cantidadProductos; i++) {
      let numeroProducto = parseInt(
        prompt(`Ingrese el número del producto: \n\n${mensajeProductos}`)
      );
      while (
        isNaN(numeroProducto) ||
        numeroProducto < 1 ||
        numeroProducto > listaProductos.length
      ) {
        numeroProducto = parseInt(
          prompt(
            `Número inválido. Ingrese el número del producto #${
              i + 1
            }:\n\n${mensajeProductos}`
          )
        );
      }
      let producto = listaProductos[numeroProducto - 1];
      let cantidadDeseada = parseInt(
        prompt(`Ingrese la cantidad deseada de "${producto.nombre}":`)
      );

      while (isNaN(cantidadDeseada) || cantidadDeseada < 1) {
        cantidadDeseada = parseInt(
          prompt(
            `Cantidad inválida. Ingrese la cantidad deseada de "${producto.nombre}":`
          )
        );
      }

      let productoDuplicado = false;
      for (let j = 0; j < videojuegosComprados.length; j++) {
        if (videojuegosComprados[j].nombre === producto.nombre) {
          videojuegosComprados[j].cantidad += cantidadDeseada;
          productoDuplicado = true;
          break;
        }
      }

      if (!productoDuplicado) {
        producto.cantidad = cantidadDeseada;
        videojuegosComprados.push(producto);
      }

      cantidadProductosComprados += cantidadDeseada;
    }

    for (let producto of videojuegosComprados) {
      precioTotal += producto.precio * producto.cantidad;
    }

    //Menu final del Cliente para mostrar resumen de compra
    const precioTotalConDescuento = aplicarDescuento(
      precioTotal,
      cantidadProductosComprados
    );

    let mensajeCompra = `Productos comprados por ${nombreCliente}:\n\n`;
    for (let i = 0; i < videojuegosComprados.length; i++) {
      let producto = videojuegosComprados[i];
      mensajeCompra += `${i + 1}. ${producto.nombre} - Cantidad: ${
        producto.cantidad
      } - $${producto.precio * producto.cantidad}\n`;
    }
    mensajeCompra += `\nPrecio total: $${precioTotal}`;
    if (precioTotalConDescuento !== precioTotal) {
      mensajeCompra += `\nPrecio total (con descuento): $${precioTotalConDescuento}`;
    }
    mensajeCompra += `\n\rFecha y hora de la compra: ${new Date().toLocaleString()}`;

    while (true) {
      let opcion = prompt(
        "Seleccione una opción:\n\r1. Ver el resumen de compra\n2. Agregar más productos\n3. Salir"
      );

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