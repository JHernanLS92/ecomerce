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
/*----------------------- MENU -----------------*/
const menu = document.getElementById("menu-container")
const menuIcon = document.getElementById("menuArea")
const xCloseIcon = document.getElementById("xmenu")
const imgCart = document.getElementById("emptyCart")
//agregar y quitar la clase hide para cerrar y abrir carrito 
menuIcon.addEventListener("click", () => {
  menu.classList.remove("hide") 
})
xCloseIcon.addEventListener( "click", () => {
  menu.classList.add("hide")
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
      fragment+= `
      <div class="product-card" id="${producto.id}">
         <div class="div-img-product-main">
            <img src="${producto.image}" alt="" class="img-product">
          </div>

          <i class='bx bx-plus-circle bx-md btnAdd-main' ></i>

          <div clas="info-CardProduct">
            <h2 clas="h-cardProduct">$ ${producto.price}.00</h2>
            <h2 clas="h-cardProduct">Stock: ${producto.quantity}</h2>
            <h2 clas="h-cardProduct">${producto.name}</h2>
          </div>

      </div>
     
       `
  })

  productContainer.innerHTML = fragment
  cartFunctionality()
 

}

function cartFunctionality(){
  const btns = document.querySelectorAll(".btnAdd-main")
  const imgHide = document.getElementById("emptyCart")
  const cart = []
  btns.forEach( button => {
    button.addEventListener("click", e => {
      const id = parseInt(e.target.parentElement.id)
      const selectedProduct = items.find(item => item.id === id)
      imgHide.classList.add('hide')
      let index = cart.indexOf( selectedProduct )
      console.log( index);
      if( index !== -1 ){
        if( cart[index].quantity <= cart[index].cantidad ){
          alert("No hay stock")
         }else{ 
        
        cart[index].cantidad++
       
        }
      }
        else{
        selectedProduct.cantidad = 1
        cart.push( selectedProduct )
            }
            //console.log(cart);
            showProductsInCart( cart )
           
        })
  })
}



const showProductsInCart = () => {
  const cartContainerSelected = document.getElementById("product-selected")
  const cartTotal = document.getElementById("totalMoney")
  const cartCantidad = document.getElementById("totalProduct")
  const cartCantidadShoppinBag = document.getElementById("cart-counter")
  
 
  let total = 0
  let fragment = ``
  let cantidad = 0
  items.forEach( prod => {
   
    if( prod.cantidad !== undefined){
     
      fragment+= `
      <div class="cartProd" id="${prod.id}">
         <div class="div-img-product-cart">
            <img src="${prod.image}" alt="" class="img-cartProduct">

          </div>
          <div class= "cart-info">
            <h4>${prod.name}</h4>
            <p>Stock: ${prod.quantity - prod.cantidad}</p> 
            <p id ="price" class=" price txt-red"> $${prod.price}.00</p>
            <div class="addToCart"> 
              <div> 
                  <i class='bx bx-down-arrow-alt' id="less"></i>
              </div>
               
              <div> 
                <span id="cant">${prod.cantidad}</span>  
              </div>

              <div> 
                <i class='btn bx bx-up-arrow-alt' id="more"></i>
              </div>
            </div>
            <p class="text-red">Subtotal: $${prod.cantidad * prod.price}.00</p>
          </div>
      </div>  `
    
       total+= prod.cantidad * prod.price
      cantidad+= prod.cantidad

    }
   

    }) 
   
     
    cartCantidadShoppinBag.innerHTML= cantidad
    cartCantidad.innerHTML = cantidad
    cartTotal.innerHTML = total
    cartContainerSelected.innerHTML = fragment

}

/**Esta funcion ejecuta las funciones al cargar la pagina */
document.addEventListener( "DOMContentLoaded", () =>{
  loadComponent() 
  showProducts()
})


 