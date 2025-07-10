import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import CartItem from "components/CartItem";
import {BsExclamation} from "react-icons/bs";

const Cart = ({products, cartItems, setCartItems}) => {

  /* 선택한 상품들로 총합 계싼 */
  const [selectedIds, setSelectedIds] = useState([]); // 선택된 아이템 id 배열
  const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));
  const total = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  /* 초기 로딩 전체 선택 */
  useEffect(() => {
    if (cartItems.length > 0) {
      const allIds = cartItems.map((item) => item.id);
      setSelectedIds(allIds);
    }
  }, [cartItems]);

  /* 배송비 */
  let shippingFee;
  if (total >= 50000) {
    shippingFee = 0;
  } else {
    shippingFee = 2500;
  }

  return (
    <main className="cart-page">
      <section className="cart-wrap">
        <div className="title-wrap">
          <h5>SHOPPING BAG</h5>
          <ul>
            <li>국내배송상품 ({cartItems.length})</li>
            <li>해외배송상품 (0)</li>
          </ul>
        </div>

        {cartItems.length === 0 ? (
          <>
            <section className="cart-none">
              <p>장바구니가 비어 있습니다.</p>
              <Link to="/">GO BACK TO HOME</Link>
            </section>
          </>
        ) : (
          <>
            <div className="cart-item-wrap">
              <div className="cart-item-header">
                <span>일반상품 ({cartItems.length})</span>
              </div>

              <div className="cart-item-body">
                {/***** 카트 아이템 컴포넌트 *****/}
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    setCartItems={setCartItems}
                    selected={selectedIds.includes(item.id)}
                    totalSummary={total}
                    onToggle={() => {
                      setSelectedIds((prev) => (prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]));
                    }}
                  />
                ))}
                <div className="cart-item-actions">
                  <button
                    id="selectAll"
                    onClick={() => {
                      if (selectedIds.length === cartItems.length) {
                        setSelectedIds([]); // 전체 해제
                      } else {
                        setSelectedIds(cartItems.map((item) => item.id)); // 전체 선택
                      }
                    }}
                  >
                    {selectedIds.length === cartItems.length ? "선택 해제" : "전체 선택"}
                  </button>
                  <button
                    id="deleteSelected"
                    onClick={() => {
                      if (selectedIds.length === 0) {
                        alert("삭제할 상품을 선택해주세요.");
                        return;
                      }

                      const updatedCart = cartItems.filter((item) => !selectedIds.includes(item.id));
                      setCartItems(updatedCart);
                      setSelectedIds([]); // 선택 해제 초기화
                    }}
                  >
                    선택상품 삭제
                  </button>
                </div>
              </div>

              <div className="total-summary">
                <div className="total-summary-inner">
                  <h5>총 상품금액</h5>
                  <div className="total-summary-desc">{total.toLocaleString()}원</div>
                </div>
                <div className="total-summary-inner">
                  <h5>총 배송비</h5>
                  <div className="total-summary-desc">{shippingFee.toLocaleString()}원</div>
                </div>
                <div className="total-summary-inner">
                  <h5>총 결제금액</h5>
                  <div className="total-summary-desc">{(total + shippingFee).toLocaleString()}원</div>
                </div>
              </div>

              <div className="button-wrap">
                <button
                  onClick={() => {
                    const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));
                    if (selectedItems.length === 0) {
                      alert("선택된 상품이 없습니다.");
                    } else {
                      console.log("선택된 상품 주문:", selectedItems);
                      alert(`${selectedItems.length}개의 상품을 주문합니다.`);
                    }
                  }}
                >
                  선택상품주문
                </button>
                <button>전체상품주문</button>
              </div>

              <div className="cart-desc">
                <i>
                  <BsExclamation />
                </i>
                <p>할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.</p>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Cart;
