import "./App.css";
import AboutUs from "./AboutUs";

export default function LandingPage() {
  return (
    <>
      <div className="home">
        <h1 className="title">Flower Shopping Company Ltd.</h1>

        <div className="side-element">
          <a href="#products" className="startShoppingButton">
            Get Started
          </a>
        </div>
        <section className="about-us">
          <AboutUs />
        </section>
      </div>
    </>
  );
}
