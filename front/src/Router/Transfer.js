import React from "react";
import LeftNav from "../components/Wrapper/LeftNav";
import KakaoMap from "../components/Wrapper/KakaoMap/KakaoMap";
import RightNav from "../components/Wrapper/RightNav";

const Transfer = (props) => {
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <KakaoMap></KakaoMap>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default Transfer;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함