import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Product.css";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";

const Product = () => {
  return (
    <>
      <div class="product__wrapper">
        <div class="container">
          <h2>Our Products</h2>
          <div class="row p-0 m-0">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="product_list">
                <figure>
                  <img src={bg1} alt="title" />
                </figure>
                <div class="product_description">
                  <h4>Foldsack No. 1 Backpack</h4>
                  <strong>Rs.500.00/-</strong>
                  <p>
                    Your perfect pack for everyday use and walks in the forest.
                    Stash your laptop (up to 15 inches) in the padded sleeve,
                    your everyday
                  </p>
                  <div className="btn_group">
                    <button className="btn btn-dark"> Buy Now</button>
                    <button className="btn btn-secondary"> Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
