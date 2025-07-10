import React from "react";
import {useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {FiX} from "react-icons/fi";
import {IoSearchOutline} from "react-icons/io5";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css/pagination";

const SideMenu = ({cartItems}) => {
  const location = useLocation();

  useEffect(() => {
    const menuShowButton = document.getElementById("menuShowButton");
    const menuCloseButton = document.getElementById("menuCloseButton");
    const sideMenu = document.getElementById("sideMenu");
    if (!menuShowButton || !sideMenu || !menuCloseButton) return;

    const handleOpen = () => sideMenu.classList.add("show");
    const handleClose = () => sideMenu.classList.remove("show");

    menuShowButton.addEventListener("click", handleOpen);
    menuCloseButton.addEventListener("click", handleClose);

    return () => {
      menuShowButton.removeEventListener("click", handleOpen);
      menuCloseButton.removeEventListener("click", handleClose);
    };
  }, []);

  // 페이지 이동 시 자동으로 sideMenu 닫기
  useEffect(() => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      sideMenu.classList.remove("show");
    }
  }, [location]);
  return (
    <aside className="snb" id="sideMenu">
      <div className="side-head">
        <button id="menuCloseButton">
          <FiX />
        </button>
        <NavLink to="/login">로그인</NavLink>
        <NavLink>회원가입</NavLink>
        <NavLink to="/cart">장바구니 ({cartItems.length})</NavLink>
      </div>
      <div className="side-body">
        <ul className="product-menu">
          <li>
            <NavLink to="/products/all">all</NavLink>
          </li>
          <li>
            <NavLink to="/products/best">best sellers</NavLink>
          </li>
          <li>
            <NavLink to="/products/new">new in</NavLink>
          </li>
          <li>
            <NavLink to="/products/face">face</NavLink>
          </li>
          <li>
            <NavLink to="/products/eyes">eyes</NavLink>
          </li>
          <li>
            <NavLink to="/products/lips">lips</NavLink>
          </li>
        </ul>
        <div className="community">
          <h5>community</h5>
          <NavLink>Collection</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink>Notice</NavLink>
          <NavLink>FAQ</NavLink>
          <NavLink>Q&A</NavLink>
          <NavLink>Reviews</NavLink>
        </div>
        <div className="search">
          <h5>
            <label htmlFor="searchProduct">search product</label>
          </h5>
          <div className="search-box">
            <input type="search" name="searchProduct" id="searchProduct" placeholder="검색어를 입력해주세요" />
            <button>
              <IoSearchOutline />
            </button>
          </div>
        </div>
        <div className="event-banner">
          <h5>event</h5>
          <Swiper
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="event-swiper"
          >
            <SwiperSlide>
              <img src="/assets/images/visuals/event-banner-1.webp" alt="이벤트배너" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/visuals/event-banner-2.webp" alt="이벤트배너" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/visuals/event-banner-3.webp" alt="이벤트배너" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
