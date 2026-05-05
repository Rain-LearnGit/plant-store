import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../components/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // TOTAL PRICE CALCULATION
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1 className="productsHeading">Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="productGrid">
            {cartItems.map((item) => (
              <div className="productCard" key={item.id}>
                <img src={item.image} alt="flower" height="250" />
                <h3>{item.title}</h3>
                <p>${item.price} TTD</p>

                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    marginLeft: "60px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 5px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          {/* TOTAL DISPLAY */}
          <h2>Total: ${totalPrice.toFixed(2)} TTD</h2>
          <h5>
            <div className="buttonGroup">
              <button className="checkOutButton">
                Checkout
                <span className="comingSoon">Coming Soon</span>
              </button>

              <a href="#products" className="continueShopping">
                Continue Shopping
              </a>
            </div>
          </h5>
        </>
      )}
    </div>
  );
}
