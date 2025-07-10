import React from "react";
import {useEffect, useState} from "react";
import {useParams, useLocation} from "react-router-dom";
import ProductList from "components/ProductList.js";
import {LuArrowUpDown} from "react-icons/lu";

const ProductStand = ({products}) => {
  const {category} = useParams();
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 12;

  /* 카테고리별 필터링 */
  const filtered = (() => {
    if (category === "all") return products;
    if (category === "best") return products.filter((p) => p.isBest);
    if (category === "new") return products.filter((p) => p.isNew);
    return products.filter((p) => p.category === category);
  })();

  /* 필터링 버튼 */
  useEffect(() => {
    const sortButton = document.getElementById("sortButton");
    const sortWrap = document.querySelector(".sort-wrap");
    const handleToggle = () => sortWrap.classList.toggle("on");
    sortButton.addEventListener("click", handleToggle);
  }, []);
  // 페이지 이동 시 자동으로 클래스 제거
  const location = useLocation();
  useEffect(() => {
    const sortWrap = document.querySelector(".sort-wrap");
    if (sortWrap) {
      sortWrap.classList.remove("on");
    }
  }, [location]);

  /* 페이지네이션 */
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const indexOfLast = activePage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    const pageButtons = document.querySelectorAll(".pagination button");
    for (let i = 0; i < pageButtons.length; i++) {
      pageButtons[i].addEventListener("click", function () {
        window.scrollTo({top:0, behavior:'instant'});
      });
    }
  });

  return (
    <main className="product-stand-page">
      <div className="title-wrap">
        <h4>{category.toUpperCase()}</h4>
        <button id="sortButton">
          <LuArrowUpDown />
          SORT BY
        </button>
        <div className="sort-wrap">
          <span>신상품</span>
          <span>상품명</span>
          <span>낮은가격</span>
          <span>높은가격</span>
          <span>제조사</span>
          <span>사용후기</span>
        </div>
      </div>
      <ProductList products={currentItems}></ProductList>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setActivePage((p) => Math.max(1, p - 1))} disabled={activePage === 1} className="control-button">
            prev
          </button>
          <div className="page-numbers">
            {Array.from({length: totalPages}, (_, i) => (
              <button key={i} onClick={() => setActivePage(i + 1)} className={activePage === i + 1 ? "active" : ""}>
                {i + 1}
              </button>
            ))}
          </div>
          <button onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))} disabled={activePage === totalPages} className="control-button">
            next
          </button>
        </div>
      )}
    </main>
  );
};

export default ProductStand;
