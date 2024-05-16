const ProductItem = ({ data, addToCart }) => {
  let { name, price, id } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
