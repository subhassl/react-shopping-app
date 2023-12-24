import Product from "./Product";
import { useState } from "react";

const Products = ({ products, handleAddToCart, handleRemoveFromCart }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="row mt-4">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
