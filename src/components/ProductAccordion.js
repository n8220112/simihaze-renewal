import React, {useState} from "react";
import {FiMinus, FiPlus} from "react-icons/fi";

const ProductAccordion = ({product}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="product-accordion">
      <div className="accordion-item">
        <button onClick={() => toggleAccordion(0)} className="accordion-header">
          <>{openIndex === 0 ? <FiMinus /> : <FiPlus />}</>
          DESCRIPTION
        </button>
        {openIndex === 0 && (
          <div className="accordion-body">
            <p>{product.description.desc}</p>
            <blockquote>“{product.description.quote}” - <i>Simi&Haze</i></blockquote>
          </div>
        )}
      </div>

      {/* howToUse가 있는 경우에만 아코디언 출력 */}
      {product.howToUse ? (
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(1)} className="accordion-header">
            <>{openIndex === 1 ? <FiMinus /> : <FiPlus />}</>
            HOW TO USE
          </button>
          {openIndex === 1 && (
            <div className="accordion-body">
              <ul>
                {product.howToUse.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      {/* 전성분 정보가 있는 경우에만 아코디언 출력 */}
      {product.ingredients ? (
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(2)} className="accordion-header">
            <>{openIndex === 2 ? <FiMinus /> : <FiPlus />}</>
            INGREDIENTS
          </button>
          {openIndex === 2 && (
            <div className="accordion-body">
              <p>{product.ingredients.default}</p>
              {/* 함유 가능 성분 정보가 있을 때만 아코디언 출력 */}
              {product.ingredients.additional ? (
                <>
                  <span>[± 함유 가능 성분]</span>
                  <p>{product.ingredients.additional}</p>
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductAccordion;
