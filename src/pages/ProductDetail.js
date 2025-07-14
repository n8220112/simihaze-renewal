import React from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import {GoHeart, GoHeartFill, GoPlus, GoDash} from "react-icons/go";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductAccordion from "components/ProductAccordion";

const ProductDetail = ({products, cartItems, setCartItems}) => {
  //좋아요 버튼
  const [isLiked, setIsLiked] = useState(false);
  function toggleIsLiked() {
    setIsLiked(!isLiked);
  }
  //상품 개수
  const [count, setCount] = useState(1);

  /* 상품 정보 가져오기 */
  const {id} = useParams(); //url에서 id값 가져오기
  const product = products.find((item) => item.id === parseInt(id)); //id에 해당하는 제품 찾기
  if (!product) {
    return (
      <main className="product-detail-page unknown">
        <section>해당 상품을 찾을 수 없습니다.</section>
      </main>
    );
  }

  /* 상품 개수 제한하기 */
  const stock = product.stock; //재고
  //개수 증가
  const handleIncrease = () => {
    if (count < stock) {
      //재고 이상으로는 안 되게
      setCount(count + 1);
    } else {
      alert("준비된 재고가 모자랍니다.");
    }
  };
  //개수 감소
  const handleDecrease = () => {
    if (count > 0) {
      //0 미만으로 안 되게
      setCount(count - 1);
    }
  };

  // 최종가격
  const currentPrice = product.discountPrice && product.discountPrice < product.price ? product.discountPrice : product.price;
  //개수에 따른 가격
  const nowPrice = currentPrice * count;

  /* 장바구니 보내기 */
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.imageUrl,
      price: currentPrice,
      quantity: count,
      stock: product.stock,
    };
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartItem.id);
      if (existing) {
        return prev.map((item) => (item.id === cartItem.id ? {...item, quantity: item.quantity + cartItem.quantity} : item));
      } else {
        return [...prev, cartItem];
      }
    });
    alert("장바구니에 추가되었습니다.");
  };

  return (
    <main className="product-detail-page">
      <section className="mobile-detail-slide">
        <Swiper
          className="detail-swiper"
          rewind={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination]}
        >
          {product.imageList.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={product.korName} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="detail-image-wrap">
        <Swiper
          className="detail-swiper"
          rewind={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination]}
        >
          {product.imageList.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={product.korName} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="detail-images">
          {product.imageList.slice(2).map((image, index) => (
            <img key={index} src={image} alt={product.korName} />
          ))}
        </div>
        <div className="detail-board">
          <h6>REVIEW</h6>
          <div className="content">게시물이 없습니다</div>
          <button>리뷰작성</button>
        </div>
        <div className="detail-board">
          <h6>Q&A</h6>
          <div className="content">게시물이 없습니다</div>
          <button>문의작성</button>
        </div>
      </section>
      <section className="detail-info">
        <div className="info-wrap">
          <div className="name">
            <h5>{product.name}</h5>
            <h6>{product.korName}</h6>
          </div>
          <div className="price-info">
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
            <ul class="delivery">
              <li>
                <span>국내·해외배송</span>
                <span>국내배송</span>
              </li>
              <li>
                <span>배송방법</span>
                <span>택배</span>
              </li>
              <li>
                <span>배송비</span>
                <span>2,500원 (50,000원 이상 구매 시 무료)</span>
              </li>
            </ul>
          </div>
          <table className="quantity-wrap">
            <tbody>
              <tr>
                <td colSpan={2}>{product.name}</td>
              </tr>
              <tr>
                <td className="quantity-control">
                  <button className="quantity-button" onClick={handleDecrease}>
                    <GoDash />
                  </button>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    value={count}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= stock) {
                        setCount(value);
                      }
                    }}
                  />
                  <button className="quantity-button" onClick={handleIncrease}>
                    <GoPlus />
                  </button>
                </td>
                <td className="now-price">{nowPrice.toLocaleString()}원</td>
              </tr>
            </tbody>
          </table>
          <div className="total-price">
            <span>Total</span>
            <span>
              {nowPrice.toLocaleString()}원<i>({count}개)</i>
            </span>
          </div>
          <div className="buttons">
            <button className="buy">BUY NOW</button>
            <button onClick={handleAddToCart}>
              <HiOutlineShoppingBag />
            </button>
            <button onClick={toggleIsLiked}>{isLiked ? <GoHeartFill /> : <GoHeart />}</button>
          </div>
          <ProductAccordion product={product} />
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
