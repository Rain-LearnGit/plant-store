import LandingPage from "./components/LandingPage";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <nav className="nav-bar">
        <a href="#home" className="nav-btn">
          Home
        </a>
        <a href="#products" className="nav-btn">
          Products
        </a>
        <a href="#cart" className="nav-btn">
          🛒 Cart <span className="badge">{totalQuantity}</span>
        </a>
      </nav>
      <section id="home">
        <LandingPage />
      </section>
      <section id="products">
        <ProductsPage />
      </section>
      <section id="cart">
        <CartPage />
      </section>
    </div>
  );
}

export default App;
