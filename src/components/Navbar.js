import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const state = useSelector(state => state.handleCart)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`);
  };
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
              Online Store
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Products
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div className="search_wrapper">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleInputChange}
                  />
                </div>
                {searchText && (
                  <div className="search-results">
                    <ul>
                      {filteredProducts.map((product) => (
                        <li
                          key={product.id}
                          onClick={() => handleProductClick(product)}
                        >
                          {product.title.substring(0, 10)}
                        </li>
                      ))}
                    </ul>
                    </div>
                )}
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
                <button
                  className="btn btn-outline-dark cart "
                  type="submit"
                  onClick={handleCartClick}
                >
                  <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <FaCartPlus />
                     ({state.length})
                  </NavLink>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
