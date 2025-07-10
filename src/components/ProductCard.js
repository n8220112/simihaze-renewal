import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {GoHeart} from "react-icons/go";
import {GoHeartFill} from "react-icons/go";

const ProductCard = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  function toggleIsLiked() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="product-card">
      <div className="thumb-wrap">
        <Link to={`/detail/${product.id}`} className="thumb" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="image">
            <img src={isHovered ? product.hoverImage : product.imageUrl} alt={product.korName} />
          </div>
        </Link>
        <div className="desc-icon">
          <span>리뷰 ({product.reviewCount})</span>
          <button onClick={toggleIsLiked}>{isLiked ? <GoHeartFill /> : <GoHeart />}</button>
        </div>
      </div>

      <Link to={`/productdetail/${product.id}`} className="info">
        <h6>{product.name}</h6>
        <p className="price">
          {product.discountPrice && product.discountPrice < product.price ? (
            <>
              <span className="price-original">{product.price.toLocaleString()}원</span>
              <span className="price-discounted">{product.discountPrice.toLocaleString()}원</span>
            </>
          ) : (
            <span className="price-regular">{product.price.toLocaleString()}원</span>
          )}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
