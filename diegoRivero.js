let usuarios_registrados = [
    {nombre: "Juana" , apellido: "Perez" , doc_id: 13382450 , direccion: "Fernandez Crespo 2154"},
    {nombre: "Diego" , apellido: "Rivero" , doc_id: 45579872 , direccion: "Yatay 1428"},
    {nombre: "Ignacio" , apellido: "Caballero" , doc_id: 43214560 , direccion: "Enrique Brito 987"},
    {nombre: "Federico" , apellido: "Baricevich" , doc_id: 39857415 , direccion: "Tacuarembo 7413"},
    {nombre: "Alejandra" , apellido: "Valentin" , doc_id: 38974168 , direccion: "Av. Italia 4563"},
    {nombre: "Fernando" , apellido: "Rodriguez" , doc_id: 19874451 , direccion: "Ayacucho 6402"},
    {nombre: "Felipe" , apellido: "Peluffo" , doc_id: 54789638 , direccion: "Cañas 12"},
    
]
/*
function buscar_doc_id (usuario){
    return (prompt ("Ingrese su documento de identidad"))
}

function nuevo_registro_usuario(){
    let registro_usuario = [];{
        let doc_id = prompt("Ingrese su documento de identidad");
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("ingrese su apellido");
        let direccion = prompt("Ingrerse su direccion");

        
        let nuevo_usuario = new Usuario(nombre , apellido , doc_id, direccion);

        registro_usuario.push( nuevo_usuario );
        console.log(registro_usuario);
    }
    
}
*/
const productos = [
    { id: 1, name : "Camiseta Principal", precio: 3500, img : 'imagenes/camiseta1-3.png'},
    { id: 2, name : "Camiseta Alternativa", precio: 3250, img : 'imagenes/camiseta2-3.png'},
    { id: 3, name : "Pantalon Principal", precio : 2500, img : 'imagenes/short 1-1.png'},
    { id: 4, name : "Pantalon Alternativa", precio : 2250 , img : 'imagenes/short 2-1.png'},
    { id: 5, name : "Camiseta Niño", precio: 2500 , img : 'imagenes/camiseta n 1-1.png'},
    { id: 6, name : "Camiseta Running", precio: 2000, img : 'imagenes/camiseta 3-1.png'},
    { id: 7, name : "Campera", precio: 4500, img : 'imagenes/campera 1-1.png'},
]



/*


let registro_usuario = [];
let registro_pedido = [];

class Usuario{
    constructor(nombre,apellido,doc_id,direccion){

        this.nombre = nombre;
        this.apellido = apellido;
        this.doc_id = doc_id;
        this.direccion = direccion;
    }
}

class Pedido{
    constructor (articulo, talle, precio, cantidad, total_pedido){

      
        this.articulo = articulo;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total_pedido = total_pedido;
    }

}


function nuevo_pedido(){
     
        for (let i= 1 ; i<=10; i++){ //Arranco el cliclo en 1 para poder enumerar las compras
            let articulo = prompt("Ingrese el articulo a comprar en tu pedido numero " + i);
            let talle = prompt("Ingrese el talle de " + articulo);
            let precio = parseInt( prompt("Ingrese el precio de " + articulo));
            let cantidad = parseInt( prompt("Ingrese cantidad del articulo"));
            let total_pedido = (precio * cantidad)
             
            let nuevo_pedido = new Pedido(articulo, talle, precio, cantidad, total_pedido);
        
            registro_pedido.push( nuevo_pedido );
            console.log(registro_pedido);
    
            let siguiente= prompt ("Desea seguir comprando? Si o NO?")
                if (siguiente == "SI" || siguiente == "si" || siguiente == "Si"){
                    continue
                }
                else if(siguiente == "NO" || siguiente == "no" || siguiente == "No") {
                    break
                } else (siguiente = prompt("No has ingresado una opcion valida. Ingresa Si o NO "))
        }

    
}

function registro (){

    if (registro == "SI" || registro == "si" || registro == "Si"){

        let resultado_some = usuarios_registrados.some(buscar_doc_id);
        
        
        if (resultado_some == true){
        
        console.log("El usuario esta registrado")
        
        }
        
        else if (resultado_some == false){
        
        console.log("no esta registrado")
        
        }    
        
        nuevo_pedido()

    }else if(registro == "NO" || registro == "no" || registro == "No") {
        
        nuevo_registro_usuario()
        
        nuevo_pedido()
        
        
    }else (registro = prompt("No has ingresado una opcion valida. Ingresa Si o NO "))
    
}

const total_precio_compra = registro_pedido.reduce((acumulador, objeto) => {
    return acumulador + objeto.total_pedido; }, 0) ;



console.log("Monto total del pedido es: " + total_precio_compra)
/*alert("Gracias por comprar en la tienda del club mas popular. Que disfutes tus productos. Total compra : " + total_precio_compra )
*/

let btn_registro = document.getElementById("registrarse");

btn_registro.addEventListener("click" , function (){
    
    let nombre = document.getElementById("nombre");
    let doc_id = document.getElementById("doc_id");
    let mensaje = document.getElementById("mensaje");

    let parrafo = document.createElement("p");
    parrafo.innerText = ( "Hola " + nombre.value + "Te has registrado exitosamente, tu Usiario es " + doc_id.value);
    parrafo.style.color = "green";
    parrafo.style.fontSize ="45px"
    mensaje.append(parrafo);

});

const contenedor_productos = document.querySelector(".contenedor-compra");
const contenedor_pedidos = document.querySelector(".listado-pedido")
const orden_pedido = [];

function mostrar_productos(){
    productos.forEach(function (producto) {
        const div_productos = document.createElement("div");
        div_productos.classList.add("card")
        
        const imagen_producto = document.createElement("img");
        imagen_producto.src = producto.img;
        imagen_producto.className = "imagen-producto";

        const titulo_producto = document.createElement("h2");
        titulo_producto.textContent = producto.name;
        titulo_producto.classList.add("titulo-producto");

        const precio_producto = document.createElement("h3");
        precio_producto.textContent = producto.precio

        const btn_compra = document.createElement("button");
        btn_compra.textContent = "Agregar al pedido";
        btn_compra.classList.add("btn-comprar");
        btn_compra.addEventListener("click", function(){
        agregar_carrito(producto.id);
        })
        
        div_productos.appendChild(imagen_producto);
        div_productos.appendChild(titulo_producto);
        div_productos.appendChild(precio_producto);
        div_productos.appendChild(btn_compra);

        contenedor_productos.appendChild(div_productos);
        
    });
}


document.addEventListener("DOMContentLoaded", function() {

    mostrar_productos();
}) 

function agregar_carrito(id){
   const compra_productos = productos.find( (producto) => {
    return producto.id === id
   });
   orden_pedido.push(compra_productos);
   console.log(orden_pedido);
   ver_pedido(orden_pedido);
}

function ver_pedido(carrito){

    contenedor_pedidos.innerHTML= "";

    carrito.forEach(function (producto) {

        const div_productos = document.createElement("div");
           
        const titulo_producto = document.createElement("h2");
        titulo_producto.textContent = producto.name;
        titulo_producto.classList.add("titulo-producto");

        const precio_producto = document.createElement("h3");
        precio_producto.textContent = producto.precio

        const btn_borrar = document.createElement("button");
        btn_borrar.textContent = "Borrar";
        btn_borrar.classList.add("btn-comprar");
        btn_borrar.className = "borrar";
       
        
        div_productos.appendChild(titulo_producto);
        div_productos.appendChild(precio_producto);
        div_productos.appendChild(btn_borrar);

        contenedor_pedidos.appendChild(div_productos);
    })
}




