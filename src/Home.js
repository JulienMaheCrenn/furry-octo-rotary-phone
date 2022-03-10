import {useState} from 'react'
import data from './products.json'
import {Product} from './Product'

function Home() {
    const [cart, setCart] = useState(data.cart)

    const addToCart = product => {
      let notInCart = true;
      var i, l=cart.length;
      for (i=0; i<l; i+=1) {
        if (product.name === cart[i].name) {
          notInCart = false;
        }
      }
      if (notInCart === true) {
        setCart([...cart, product])
        product.addedToCart = true;
      }else {
        console.log("Already in cart")
      }
    }
  
    const removeFromCart = product => {
      const name = product.name
      setCart(cart.filter(item => item.name !== name))
      product.addedToCart = false;
    }
  
      console.log(cart)
    return (
      <>
      <header className="cartItemTotal">Items in cart: {cart.length}</header>
      <div className="App">
        {data.products.map(product => <Product key={product.productId} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />)}
      </div>
      </>
    );
}


export default Home;