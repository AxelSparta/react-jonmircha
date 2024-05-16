import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
  };
  const delFromCart = (id) => {
    dispatch({
      type: TYPES.REMOVER_ONE_FROM_CART,
      payload: id,
    });
  };
  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART,
    });
  };
  const delAllItems = (id) => {
    dispatch({
      type: TYPES.REMOVE_ALL_FROM_CART,
      payload: id,
    });
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="box">
        {products.map((product) => (
          <ProductItem addToCart={addToCart} data={product} key={product.id} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar carrito</button>
        {cart.map((product, index) => (
          <CartItem
            delFromCart={delFromCart}
            data={product}
            key={index}
            delAllItems={delAllItems}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
