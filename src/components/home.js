import { useState } from "react";
import logo from "./assets/glamour-bs6-home 1.png";
import "./styles/home.css";
import Navbar from "./navbar";
import Footer from "./footer";
import contact from "./assets/contact.png";
import emi from "./assets/emi.png";
import delivery from "./assets/delivery.png";
import deal from "./assets/deal.png";
import product from "./assets/product.png";
import ad from "./assets/ad.png";
function App() {
  const [featureQuotes, setFeatureQuotes] = new useState([
    "Easy contact",
    "EMI Option",
    "Fast Delivery",
    "Best Deals",
  ]);
  const [featureIcons, setFeatureIcons] = new useState([
    contact,
    emi,
    delivery,
    deal,
  ]);
  const [featureCount, setFeatureCount] = new useState([0, 1, 2, 3]);
  const [productCount, setProductCount] = new useState([0, 1, 2, 3]);
  // hi this from tanuj lap
  //this is from sri laptop

  //balaji
  return (
    <>
      <Navbar />
      <div class="home-main">
        <img src={logo} class="logo"></img>
        <br></br>
        <div class="hero-statements">
          <h1>Buy your partner with great deals</h1>
          <button class="button">Buy now</button>
        </div>
      </div>
      <h2 class="sub-heading">RECENT TRENDS</h2>
      <div class="product-statement">
        {productCount.map((e) => {
          return (
            <div class="trending-main">
              <img src={product} class="product-image"></img>
              <h2 class="product-title">HERO SPLEDER PLUS</h2>
              <h4 class="product-rate">RS 65,000 - 90,000</h4>
              <button class="product-button">More details</button>
            </div>
          );
        })}
      </div>
      <div class="feature-statements">
        <h1 class="top-statements">20 YEARS EXPERIENCE</h1>
        <br></br>
        <br></br>
        <br></br>
        <div class="icons">
          {featureCount.map((e) => {
            return (
              <div>
                <img src={featureIcons[e]} class="icon"></img>
                <p class="quoates">{featureQuotes[e]}</p>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default App;
