import React from "react";

import "../assets/css/Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="top_footer">
          <div className="container">
            <div className="row">
              <div className="col* col-md-5 col-lg-6 ">
                <div className="footer_about">
                  <h4>Online Store</h4>
                  <p>
                    Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel
                    utom diska. Jinesade bel när feras redorade i belogi. FAR
                    paratyp i muvåning, och pesask vyfisat. Viktiga poddradio
                    har un mad och inde.
                  </p>
                </div>
              </div>
              <div className="col* col-md-3 col-lg-3 m_b">
                <h4>Quick Links</h4>
                <div className="styled_listing">
                  <ul>
                    <li>Link1</li>
                    <li>Link2 </li>
                    <li>Link3 </li>
                    <li>Link4 </li>
                  </ul>
                </div>
              </div>
              <div className="col* col-md-4 col-lg-3">
                <h4>Contact Us</h4>
                <div className="footer_contact">
                  <ul>
                    <li>
                      <div className="contact_info">(+977) 9841 000000</div>
                    </li>
                    <li>
                      <div className="contact_info">info@gmail.com</div>
                    </li>
                    <li>
                      <div className="contact_info">Kathmandu, Nepal</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <span>© Copyright to Aman Karanjit Online Store </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
