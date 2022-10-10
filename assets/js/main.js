const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]


  /*---------------------LOADER------------------------- */
/* Desaparecer el loader pasados 3seg */
const loadComponent = () => {
  const loader = document.getElementById( "loader" )

  setTimeout(() => {
      //Agrega la clase 'hide' al elemento loader 
      loader.classList.add( "hide" )
  }, 3000);
}


/*----------------------- Theme dark -----------------*/
const themeIcon = document.getElementById( "theme-btn" )

 themeIcon.addEventListener( "click", () => {
   //toggle si la calse no existe la agrega y viseversa
  document.body.classList.toggle( "dark" )
   // Cambiar clase para cambiar el icono sol/luna
  if( themeIcon.classList.contains( "bx-moon" ) ){
    themeIcon.classList.replace( "bx-moon", "bx-sun" )
  }else{
    themeIcon.classList.replace( "bx-sun", "bx-moon" )
  }
})


/*----------------------- Carrito de compras -----------------*/
const cart = document.getElementById("cart-container")
const shopIcon = document.getElementById("cart-shop")
const shopCloseIcon = document.getElementById("close--cart")

//agregar y quitar la clase hide para cerrar y abrir carrito 
shopIcon.addEventListener("click", () => {
  cart.classList.remove("hide") 
})
shopCloseIcon.addEventListener( "click", () => {
  cart.classList.add("hide")
})


/* ----------------------MOSTRAR LISTADO DE PRODUCTOS--------------------------- */
// contenedor.innerHTML = "html"
const showProducts = () => {
  const productContainer = document.getElementById("products-list")

  let fragment = ``

  items.forEach( producto => {
      fragment += `
      <div class="product-card" id="${producto.id}">
         <div class="div-img-product">
            <img src="${producto.image}" alt="" class="img-product">
            <i class='bx bx-plus-circle' ></i>
          </div>
          <div clas="info-product">
            <p>${producto.price}" | Stock:" ${producto.quantity}</p>
            <p>${producto.name}</p>
          </div>
      </div>
      <br>
       `
  })

  productContainer.innerHTML = fragment


}





/**Esta funcion ejecuta las funciones al cargar la pagina */
document.addEventListener( "DOMContentLoaded", () =>{
  loadComponent()  //imagen cargando
  showProducts()
})


