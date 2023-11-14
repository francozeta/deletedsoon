/* Carrusel Script */
const BTN_LEFT = document.querySelector('.btn__left');
const BTN_RIGHT = document.querySelector('.btn__right');
const SLIDER  = document.querySelector('#slider');
const SLIDER_SECTION = document.querySelectorAll('.slider__section');

BTN_LEFT.addEventListener('click', e => moveToLeft());
BTN_RIGHT.addEventListener('click', e => moveToRight());

setInterval(()=>{
	moveToRight();
}, 6000)

let operacion = 0;
let counter = 0;
let widthImg = 100 / SLIDER_SECTION.length;
function moveToRight() {
	if(counter >= SLIDER_SECTION.length -1) {
		counter = 0;
		operacion = 0;
		SLIDER.style.transform = `translate(-${operacion}%)`;
		SLIDER.style.transition = 'none';
		return;
	}
	counter++;
	operacion = operacion + widthImg;
	SLIDER.style.transform = `translate(-${operacion}%)`;
	SLIDER.style.transition = `all .6s ease`
	
	
	
}

function moveToLeft() {
	counter--;
	if(counter < 0) {
		counter = SLIDER_SECTION.length - 1;
		operacion = widthImg * (SLIDER_SECTION.length - 1);
		SLIDER.style.transform = `translate(-${operacion}%)`;
		return;
	}
	operacion = operacion - widthImg;
	SLIDER.style.transform = `translate(-${operacion}%)`;
	SLIDER.style.transition = `all .6s ease`;

}

/* Menu Resonsive */
const BTN_BARS = document.querySelector('.btn__bars');
const NAV_BG_RESPONSIVE = document.querySelector('.nav__bg__responsive');
const BTN_EXIT = document.querySelector('.btn__exit');
const NAV_RESPONSIVE = document.querySelector('.nav__responsive');

let isMenuOpen = false;
let isScreenSmall = window.innerWidth <= 600;

function openNav() {
    NAV_BG_RESPONSIVE.style.opacity = '1';
    NAV_BG_RESPONSIVE.style.visibility = 'visible';

    if (isScreenSmall) {
        NAV_RESPONSIVE.style.transform = 'translateY(0)';
    } else {
        NAV_RESPONSIVE.style.transform = 'translateX(0)';
    }
    document.body.style.overflow = 'hidden';
    isMenuOpen = true;
}

function closeNav() {
    NAV_BG_RESPONSIVE.style.opacity = '0';
    NAV_BG_RESPONSIVE.style.visibility = 'hidden';

    if (isScreenSmall) {
        NAV_RESPONSIVE.style.transform = 'translateY(110%)';
    } else {
        NAV_RESPONSIVE.style.transform = 'translateX(110%)';
    }
    document.body.style.overflow = 'auto';
    BTN_BARS.blur();
    isMenuOpen = false;
}

/* Agregamos eventos a los botones */
BTN_BARS.addEventListener('click', openNav);
BTN_EXIT.addEventListener('click', closeNav);
NAV_BG_RESPONSIVE.addEventListener('click', closeNav);
/* Agregamos un evento a la tecla 'Esc' */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeNav();
    }
});



window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const limit = 600;

    if (windowWidth <= limit && !isScreenSmall) {
        // Cambiamos el tamaño de pantalla a pequeño
        isScreenSmall = true;
        closeNav(); // Cerramos el menú si es necesario
    } else if (windowWidth > limit && isScreenSmall) {
        // Cambiamos el tamaño de pantalla a grande
        isScreenSmall = false;
        closeNav(); // Cerramos el menú si es necesario
    } else if (windowWidth >= 800) {
		closeNav();
	}
});


//Filtracion de Juegos en Pagina Ofertas
/* const juegos = [
  {
    consola: "ps4",
    nombre: "Grand Theft Auto V GTA 5 - PlayStation 4",
    imagen: "https://gamescenter.pe/wp-content/uploads/2018/06/GTA-V-247x309.webp",
    precio: "S/19.99"
  },
  {
    consola: "ps5",
    nombre: "Juego de PlayStation 5",
    imagen: "imagen_ps5.jpg",
    precio: "S/39.99"
  },
  // Otros juegos...
];

const filtroConsola = document.getElementById('filtroConsola');
const juegosContainer = document.getElementById('juegosContainer');

filtroConsola.addEventListener('change', () => {
  const consolaSeleccionada = filtroConsola.value;
  mostrarJuegos(consolaSeleccionada);
});

function mostrarJuegos(consola) {
  juegosContainer.innerHTML = ''; // Limpiar los juegos mostrados previamente

  if (consola === 'todos') {
    juegos.forEach(juego => agregarJuego(juego));
  } else {
    const juegosFiltrados = juegos.filter(juego => juego.consola === consola);
    juegosFiltrados.forEach(juego => agregarJuego(juego));
  }
}

function agregarJuego(juego) {
  const nuevoJuego = document.createElement('a');
  nuevoJuego.classList.add('item__popular');
  nuevoJuego.href = '';

  nuevoJuego.innerHTML = `
    <figure>
      <img class="item__img" src="${juego.imagen}" alt="${juego.nombre}">
    </figure>
    <div class="item__contenido">
      <h2 class="item__nombre">${juego.nombre}</h2>
      <span class="item__precio">${juego.precio}</span>
    </div>
  `;

  juegosContainer.appendChild(nuevoJuego);
}

// Mostrar todos los juegos al cargar la página
mostrarJuegos('todos'); */
//VALIDACIONES ASCII
function validar_name(event) {
	var nombre = event.target.value;
	var caracterInvalido = /[^A-Za-z]/g;
	
	if (caracterInvalido.test(nombre)) {
		event.target.value = nombre.replace(caracterInvalido, '');
		alert('¡ERROR! Solo se aceptan letras');
	}
}



function validar_email(event) {
	var email = event.target.value;
	var caracteresInvalidos = /[^A-Za-z0-9@._-]/g;

	if (caracteresInvalidos.test(email)) {
		event.target.value = email.replace(caracteresInvalidos, '');
		alert('¡ERROR! Por favor, ingresa un correo electrónico válido');
	}
}






function validar_contrasena(event) {
	var contrasena = event.target.value;
	var caracteresInvalidos = /[^A-Za-z0-9]/g;
	
	if (caracteresInvalidos.test(contrasena)) {
		event.target.value = contrasena.replace(caracteresInvalidos, '');
		alert('¡ERROR! Solo se aceptan letras y números en la contraseña');
	}
}



function validar_form() {
	var nombre = document.getElementById("nombre").value.trim();
	var apellido = document.getElementById("apellido").value.trim();
	var email = document.getElementById("email").value.trim();
	var password = document.getElementById("password").value.trim();
	var errores = [];

	if (nombre === "") {
		errores.push("¡ERROR! Ingrese un nombre");
	}

	if (apellido === "") {
		errores.push("¡ERROR! Ingrese un apellido");
	}

	if (email === "") {
		errores.push("¡ERROR! Ingrese un correo electrónico");
	}

	if (password === "") {
		errores.push("¡ERROR! Ingrese una contraseña");
	}

	if (errores.length > 0) {
		var mensaje = errores.join("\n");
		alert(mensaje);
		return false;
	}
}


/* Script de Carrito de Tienda */
//Variable que mantiene  el estado vsiible del carrito
var carritoVisible = false;

//Esperamos que todos  los elementos de la pagina  se carguen  para continuar  con el script
if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else{
    ready(); 
}

function ready(){

    //Agregamos funcionalidad a lo botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');

    for(var i=0; i < botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton 'sumar cantidad'
    var botonesSumarCantidad = document.getElementsByClassName('sumar-carrito');
    for(var i=0; i< botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }

    //Agrego funcionalidad al boton 'restar cantidad'
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i < botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }

    //Agrego funcionalidad a los botones Agregar al Carrito
    var botonesAgregarCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i < botonesAgregarCarrito.length;i++){
        var button = botonesAgregarCarrito[i];
        button.addEventListener('click', agregarAlcarritoClicked);
    } 

    //Agregar funcionalidad al boton pagar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    //Actualizamos el total del carrito una vez que hemos eliminado un item 
    actualizarTotalCarrito();

    //La siguiente funcion controla si hay elementos en el carrito una vez que se elimino 
    //Si no hay debo ocultar el carrito
    ocultarCarrito();
}

//Actualiza el total del carrito
function actualizarTotalCarrito() {
  var carritoContenedor = document.getElementsByClassName('carrito')[0];
  var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
  var total = 0;

  for (var i = 0; i < carritoItems.length; i++) {
    var item = carritoItems[i];
    var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
    var precioTexto = precioElemento.innerText;
    var precio = parseFloat(precioTexto.replace('S/', '').replace(',', '.'));

    var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
    var cantidad = cantidadItem.value;

    total += precio * cantidad;
  }

  total = Math.round(total * 100) / 100;

  document.getElementsByClassName('carrito-precio-total')[0].innerText =
    'S/' + total.toFixed(2);
}


function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100px';
        carrito.style.opacity='0';
        carritoVisible = false;

        //ahora maximizo el contenedor de los lementos 
        var items = document.getElementsByClassName('container-items')[0];
        items.style.width = '100%'; //porcentaje xd
    }
}

//Aumento en uno la cantidad del elemento seleccionado 
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    //Actualizamos el total
    actualizarTotalCarrito(); 
}

function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;

    //Controlamos que no sea menor que 1
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        //Actualizamos el total
        actualizarTotalCarrito();
    }
}

function agregarAlcarritoClicked(event) {
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precioTexto = item.getElementsByClassName('precio-item')[0].textContent;
    var precio = parseFloat(precioTexto.replace('S/', '').replace(',', ''));
  
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
  
    agregarItemAlCarrito(titulo, precio, imagenSrc);
    actualizarTotalCarrito();
  
    hacerVisibleCarrito();
  }
  
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add('carrito-items');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //Vamos a controlar que el item que esta  ingresando no se encuentra ya en el carrito.
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0; i < nombresItemsCarrito.length; i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
    <div class="carrito-item">
        <img src="${imagenSrc}" alt="" width="80px">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                
                <input type="text" value="1" class="carrito-item-cantidad" disabled>


                <i class="fa-solid fa-plus sumar-carrito"></i>

            </div>
            <span class="carrito-item-precio">${precio}</span>
        </div>
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);


    //Agregamos la funcionalidad eliminar del nuevo item
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click',eliminarItemCarrito);

    //Agregamos la funcionalidad de sumar del nuevo item 
    var botonesSumarCantidad = item.getElementsByClassName('sumar-carrito')[0];
    botonesSumarCantidad.addEventListener('click',sumarCantidad);

    //Agregamos la funcionalidad de restar del nuevo item 
    var botonesRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonesRestarCantidad.addEventListener('click',restarCantidad);

}

function pagarClicked(event){
    alert("Gracias por su compra");
    //Ahora elimino todos los elementos del carrito 
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild);
    }

    actualizarTotalCarrito();

    //Funcion que oculta el carrito 
    ocultarCarrito();


}

function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items = document.getElementsByClassName('container-items')[0];
    items.style.width = '60%';
}


