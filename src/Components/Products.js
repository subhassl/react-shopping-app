import Product from "./Product";

const Products = ({ products, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <div className="row mt-4">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default Products;
