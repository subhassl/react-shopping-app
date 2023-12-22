const Cart = ({ cart, products, handleClearFromCart }) => {
  return (
    <div className="container mt-5">
      <h3>Cart</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product </th>
            <th>Quantity</th>
            <th> Rate</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(cart).map(([id, quantity]) => {
            if (quantity === 0) {
              return null;
            }
            const product = products.find((p) => p.id.toString() === id);
            if (!product) {
              return null;
            }
            return (
              <tr key={id}>
                <td>{product.name}</td>
                <td>{quantity}</td>
                <td>{product.price}</td>
                <td>{product.price * quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleClearFromCart(id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
