import React from "react";
import MainVisual from "components/main/MainVisual.js";
import ThemedStore from "components/main/ThemedStore.js";
import Reviews from "components/main/Reviews.js";
import BestSellers from "components/main/BestSellers.js";
import PageLinks from "components/main/PageLinks.js";

const Main = ({products, reviews}) => {
  return (
    <main className="main-page">
      <MainVisual></MainVisual>
      <ThemedStore products={products}></ThemedStore>
      <Reviews reviews={reviews}></Reviews>
      <BestSellers products={products}></BestSellers>
      <PageLinks></PageLinks>
    </main>
  );
};

export default Main;
