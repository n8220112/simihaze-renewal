import React from "react";
import {Link} from "react-router-dom";

const PageLinks = () => {
  return (
    <section className="page-links">
      <div className="inner">
        <div className="page-link-item">
          <Link to="/about">
            <h4>About Us</h4>
            <img src="assets/images/visuals/page-link-1.png" alt="바로가기배경이미지" />
          </Link>
        </div>
        <div className="page-link-item">
          <Link to="/products/new">
            <h4>New In</h4>
            <img src="assets/images/visuals/page-link-2.png" alt="바로가기배경이미지" />
          </Link>
        </div>
        <div className="page-link-item">
          <Link to="/products/face">
            <h4>Face Cosme</h4>
            <img src="assets/images/visuals/page-link-3.png" alt="바로가기배경이미지" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageLinks;
