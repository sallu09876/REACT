import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h4 className="mt-3">🛒 Cart is empty</h4>;
  }

  return (
    <div className="mt-4">
      <h4>Shopping Cart</h4>

      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">

            <div>
              <strong>{item.title}</strong> <br />
              ₹{item.price} × {item.quantity}
            </div>

            <div>
              {/* Decrement button */}
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => dispatch(decrementQty(item.id))}
              >
                ➖
              </button>

              {/* Increment button */}
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => dispatch(incrementQty(item.id))}
              >
                ➕
              </button>

              {/* Remove button */}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                ❌
              </button>
            </div>

          </li>
        ))}
      </ul>

      {/* Total */}
      <h5 className="mt-3">Total: ₹{total.toFixed(2)}</h5>

      {/* Clear Cart button */}
      <button
        className="btn btn-warning mt-2"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
