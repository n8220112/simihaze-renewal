import React from "react";
import {useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";

const Header = ({cartItems}) => {
  const location = useLocation();
  useEffect(() => {
    const header = document.getElementById("header");
    const mainVisual = document.getElementById("mainVisual");
    if (!header || !mainVisual) return; //null 예외처리

    function headerFix() {
      const headerRect = header.getBoundingClientRect();
      const visualRect = mainVisual.getBoundingClientRect();
      // 각 영역의 길이

      const isOverlapping = !(headerRect.bottom < visualRect.top || headerRect.top > visualRect.bottom);
      // 두 영역이 겹치고 있는지 계산

      if (isOverlapping) {
        const scrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        // 호환성 위해 scrollY pageYOffset 둘 다 사용
        if (scrollY > 32) {
          header.classList.remove("on");
        } else {
          header.classList.add("on");
        }
      } else {
        header.classList.remove("on");
      }
    }

    function onScroll() {
      requestAnimationFrame(headerFix);
    }

    window.addEventListener("scroll", onScroll);
    headerFix(); // 라우터 변경 직후 한 번 실행

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]); // 페이지 이동할 때마다 재실행

  /* 페이지 이동 초기화 */
  useEffect(() => {
    const header = document.getElementById("header");
    if (header && location.pathname !== "/" && header.classList.contains("on")) {
      header.classList.remove("on");
    }
  }, [location.pathname]);

  return (
    <header id="header">
      {/* gnb */}
      <nav className="gnb">
        <ul>
          <li>
            <button id="menuShowButton">menu</button>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/products/all">shop all</NavLink>
          </li>
        </ul>
      </nav>
      {/* logo */}
      <div className="logo">
        <NavLink to="/">
          <img src="/assets/images/ui/logo.png" alt="로고" />
        </NavLink>
      </div>
      {/* login */}
      <nav className="login-menu">
        <ul>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink>join</NavLink>
          </li>
          <li>
            <NavLink to="/cart">cart ({cartItems.length})</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
