import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../components/cartSlice";
import productList from "./productsList";
import "./App.css";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Group products by category
  const groupedProducts = productList.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  return (
    <div>
      <h1 className="productsHeading">Products</h1>

      {/* ✅ Loop through categories */}
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category}>
          {/* ✅ Category Title */}
          <h3 className="categoryHeading">{category}</h3>

          <div className="productGrid">
            {items.map((item) => {
              const inCart = cartItems.some(
                (cartItem) => cartItem.id === item.id,
              );

              return (
                <div className="productCard" key={item.id}>
                  <img src={item.image} alt="flower" />
                  <h4>{item.title}</h4>
                  <p>${item.price} TTD</p>
                  <p>{item.category}</p>

                  <button
                    className="button"
                    disabled={inCart}
                    style={{
                      backgroundColor: inCart ? "gray" : "green",
                      cursor: inCart ? "not-allowed" : "pointer",
                    }}
                    onClick={() => dispatch(addToCart(item))}
                  >
                    {inCart ? "Added" : "+"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
