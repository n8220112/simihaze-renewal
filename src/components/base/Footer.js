import React from "react";
import {IoLogoInstagram, IoLogoYoutube, IoLogoTiktok} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="policy">
          <span>Shipping Policy</span>
          <span>Returns</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="sns">
          <IoLogoInstagram />
          <IoLogoYoutube />
          <IoLogoTiktok />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="address">
          <address>
            대표이사 : 이선정 | 사업자등록번호 : 809-81-01574
            <br className="br" />
            통신판매업신고번호 : 2019-서울용산-1428
          </address>
        </div>
        <div className="copyright">
          <p>
            © SIMIHAZE BEAUTY 2025
            <br className="br" />
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
