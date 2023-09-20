import React, { useState, useEffect } from "react";
import "../styles/rightNav.css";
import Box from "./Box";

function RightNav(props) {
  const [loginFlag, setLoginFlag] = useState(false);
  useEffect(() => {
    setLoginFlag(true);
  }, [localStorage.getItem("username")]);
  return (
    <>
      <nav id="right-nav" className="right-nav">
        <Box id="user" className="box">
          {loginFlag && localStorage.getItem("username") ? (
            // 로그인한 경우
            <>
              <div id="greeting" className="menu">
                Hello {localStorage.getItem("username")}
              </div>
              <div id="my-page" className="signup-mypage menu">
                마이페이지
              </div>
              <div
                id="logout"
                className="login-logout menu"
                onClick={() => {
                  localStorage.removeItem("username");
                  setLoginFlag(false);
                }}
              >
                로그아웃
                {/* axios 관련 login 로직 추가하기 */}
              </div>
            </>
          ) : (
            // 로그인하지 않은 경우
            <>
              <div
                id="sign-up"
                className="signup-mypage menu"
                onClick={props.openSignModal}
              >
                회원가입
              </div>
              <div
                id="login"
                className="login-logout menu"
                onClick={props.openLoginModal}
              >
                로그인
              </div>
            </>
          )}
        </Box>
        <Box id="location" className="box">
          <div className="menu" onClick={props.openLocModal}>
            관심 지역 설정
          </div>
        </Box>
      </nav>
    </>
  );
}

export default RightNav;

// 구조
// App
//  Header
//  Wrapper
//    LeftNav
//    Content
//    RightNav
//    Modal
