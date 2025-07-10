import React from "react";
import {GoPlus, GoDash} from "react-icons/go";
import {FiX} from "react-icons/fi";
import {Link} from "react-router-dom";

const CartItem = ({item, setCartItems, selected, onToggle, totalSummary}) => {
  const {id, name, image, price, quantity, stock} = item;
  const total = price * quantity;

  /* 수량 조절 */
  //증가
  const handleIncrease = () => {
    if (quantity < stock) {
      setCartItems((prev) => prev.map((el) => (el.id === id ? {...el, quantity: el.quantity + 1} : el)));
    } else {
      alert("준비된 재고가 모자랍니다.");
    }
  };
  //감소
  const handleDecrease = () => {
    if (quantity > 1) {
      setCartItems((prev) => prev.map((el) => (el.id === id ? {...el, quantity: el.quantity - 1} : el)));
    }
  };

  /* 아이템 삭제 */
  const handleDelete = () => {
    setCartItems((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="cart-item">
      <input type="checkbox" className="cart-check" checked={selected} onChange={onToggle} />
      <div className="cart-thumb">
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="cart-info">
        <h6>
          <Link to={`/detail/${id}`}>{name}</Link>
        </h6>
        <p>{price.toLocaleString()}원</p>
        <i>배송 :{(totalSummary >= 50000 ? " [무료] " : " 2,500원 [조건] ")}/ 기본배송</i>
        <i>-</i>
        <button id="deleteItem" onClick={handleDelete}>
          <FiX />
        </button>
      </div>
      <div className="quantity-control">
        <button className="quantity-button" onClick={handleDecrease}>
          <GoDash />
        </button>
        <input type="text" name="quantity" id="quantity" value={quantity} />
        <button className="quantity-button" onClick={handleIncrease}>
          <GoPlus />
        </button>
      </div>
      <div className="cart-final-price">
        <p>{total.toLocaleString()}원</p>
        <button className="buy">BUY NOW</button>
      </div>
    </div>
  );
};

export default CartItem;
