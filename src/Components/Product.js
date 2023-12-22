const Product = ({ product, handleAddToCart, handleRemoveFromCart }) => {
  // function to call on clicking add to cart button
  const handleClick = () => {
    handleAddToCart(product.id);
  };

  const handleRemoveClick = () => {
    handleRemoveFromCart(product.id);
  };

  return (
    <div className="col-md-2 m-3">
      <div className="card border-2 bg-light">
        <img
          src={product.img}
          alt={product.name}
          className="card-img-top img-fluid"
          style={{ maxHeight: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title"> {product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <button
            type="button"
            className="btn btn-primary btn-sm me-2"
            onClick={handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleRemoveClick}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
