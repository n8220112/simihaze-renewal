import React from "react";
import ProductList from "components/ProductList.js";

const ThemedStore = ({products}) => {
  const featuredProducts = products.filter((product) => product.isBest).slice(0, 4);
  return (
    <section className="theme-store">
      <div className="title headline">
        <h3>get ready with simi & haze</h3>
        <p>시미&헤이즈와 함께 뷰티를 완성하세요.</p>
      </div>
      <div className="inner">
        <div className="side-visual">
          <img src="assets/images/visuals/featured-products-visual.jpg" alt="" />
        </div>
        <ProductList products={featuredProducts}></ProductList>
      </div>
    </section>
  );
};

export default ThemedStore;
