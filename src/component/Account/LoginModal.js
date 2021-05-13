import React, { Component } from "react";
import "./Login.module.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  loginClickHandler = () => {
  };

  render() {
    const { isOpen, close } = this.props;
    return (
      <>
        {isOpen ? (
          <div className="modal">
            <div onClick={close}>
              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="modalContents" onClick={isOpen}>
                  <img
                    className="signinIcon"
                    src="/images/sh_logo.png"
                  />
                  <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="아이디"
                    onChange={this.loginHandler}
                  />
                  <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.loginHandler}
                  />
                  <div className="loginMid">
                    <label className="autoLogin" for="hint">
                      {" "}
                      <input type="checkbox" id="hint" /> 로그인 유지하기
                    </label>
                    <div className="autoLogin">아이디/비밀번호 찾기</div>
                  </div>
                  <button className="loginBtn" onClick={this.loginClickHandler}>
                    {" "}
                    로그인{" "}
                  </button>
                  <div className="socialBox">
                    <div className="kakao">
                      <img
                        className="kakaoLogo"
                        src="/images/google.png"
                      />
                      <div className="kakaoText">카카오 계정으로 신규가입</div>
                    </div>
                    <div className="facebook">
                      <img
                        className="facebookLogo"
                        src="/images/google.png"
                      />
                      <div className="facebookText">
                        페이스북 계정으로 신규가입
                      </div>
                    </div>
                  </div>
                  <div className="loginEnd">
                    <div className="noUser">비회원 주문 조회</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignIn;
