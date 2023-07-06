import React from "react";
import "../assets/css/Category.css";
const Category = () => {
  return (
    <>
      <div className="category_wrapper">
        <div className="container">
          <h2> Our Trending Categories</h2>          <div className="row p-0 m-0">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="category_list">
              <h3>Deniem Pants</h3>
                <p>
                  From young age I have been passionate about maintain a natural
                  beauty regiment fortunately the natural products are not
                  easily accessed and now it is my goal to make natural beauty
                  products available to those in my community.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="category_list">
              <h3>Men's Leather Jackets</h3>
                <p>
                  From young age I have been passionate about maintain a natural
                  beauty regiment fortunately the natural products are not
                  easily accessed and now it is my goal to make natural beauty
                  products available to those in my community.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="category_list">
              <h3>Boyfriend Jeans</h3>
                <p>
                  From young age I have been passionate about maintain a natural
                  beauty regiment fortunately the natural products are not
                  easily accessed and now it is my goal to make natural beauty
                  products available to those in my community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
