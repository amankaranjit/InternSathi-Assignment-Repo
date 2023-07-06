import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Product.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link, NavLink } from "react-router-dom";
import ErrorPage from "./ErrorPage";
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setIsLoading(false);
      }else{
        <NavLink to={ErrorPage} />
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  return (
    <>
      <div class="product__wrapper">
        <div class="container">
          <h2>Our Products</h2>
          <div className="buttons text-center py-5">
            <button
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => setFilter(data)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
          </div>
          {isLoading ? (
            <div class="loader"></div> ): 
          <div class="row p-0 m-0">
            {filter.map((product) => {
              return (
                <div key={product.id} class="col-sm-12 col-md-3 col-lg-3">
                  <div class="product_list">
                    <figure>
                      <img src={product.image} alt="title" />
                    </figure>
                    <div class="product_description">
                      <h4>{product.title.substring(0, 12)}</h4>
                      <strong>Rs.{product.price}</strong>
                      <p>{product.description.substring(0, 80)}</p>
                      <div className="btn_group">
                        <button className="btn btn-dark">
                          <Link
                            to={"/product/" + product.id}
                            className="btn btn-dark m-1"
                          >
                            Buy Now
                          </Link>
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => addProduct(product)}
                        >
                          {" "}
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          };
        </div>
      </div>
    </>
  );
};

export default Product;
