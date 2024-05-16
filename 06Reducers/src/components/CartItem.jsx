const CartItem = ({ delFromCart, data, delAllItems }) => {
  const { name, price, id, count } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <p>Cantidad {count}</p>
      <button onClick={() => delFromCart(id)}>Eliminar un producto</button>
      {count > 1 && (
        <button onClick={() => delAllItems(id)}>Eliminar todos</button>
      )}
    </div>
  );
};

export default CartItem;
