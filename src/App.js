import { useState } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

// App.js
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pant",
      price: 1000,
      img: "https://imagescdn.thecollective.in/img/app/product/8/882570-10602615.jpg?",
    },

    {
      id: 2,
      name: "Shirt",
      price: 2000,
      img: "https://imagescdn.thecollective.in/img/app/product/9/960657-12460569.jpg?",
    },

    {
      id: 3,
      name: "T-Shirt",
      price: 3000,
      img: "https://imagescdn.thecollective.in/img/app/product/8/899809-11007546.jpg?",
    },

    {
      id: 4,
      name: "Jacket",
      price: 4000,
      img: "https://imagescdn.thecollective.in/img/app/product/9/909552-11235691.jpg?",
    },

    {
      id: 5,
      name: "Shoe",
      price: 5000,
      img: "https://imagescdn.thecollective.in/img/app/product/9/907164-11185590.jpg?",
    },
  ]);

  const [cart, setCart] = useState({});

  // Add to Cart
  const handleAddToCart = (id) => {
    let currQuantity = cart[id] ?? 0;
    setCart({
      ...cart,
      [id]: currQuantity + 1,
    });
  };

  // Remove from Cart
  const handleRemoveFromCart = (id) => {
    let currQuantity = cart[id];
    if (currQuantity > 0) {
      setCart({
        ...cart,
        [id]: currQuantity - 1,
      });
    }
  };

  // Clear from Cart
  const handleClearFromCart = (id) => {
    setCart({
      ...cart,
      [id]: 0,
    });
  };

  return (
    <div className="container">
      <Header></Header>
      <Products
        products={products}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      ></Products>
      <Cart
        cart={cart}
        products={products}
        handleClearFromCart={handleClearFromCart}
      ></Cart>
    </div>
  );
}

export default App;
