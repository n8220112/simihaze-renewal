import React from "react";

const Login = () => {
  return (
    <main className="login-page">
      <section>
        <div className="inner">
          <h5>로그인</h5>
          <form action="login" className="login-form">
            <legend>회원로그인</legend>
            <div className="inputs">
              <input type="text" name="idInput" id="idInput" placeholder="ID" />
              <input type="password" name="pwInput" id="pwInput" placeholder="Password" />
            </div>
            <div className="buttons">
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          </form>
          <div className="actions">
            <span>아이디찾기</span>
            <i></i>
            <span>비밀번호찾기</span>
            <i></i>
            <span>비회원 주문조회</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
