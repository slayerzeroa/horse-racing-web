/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/blue-horse-logo.png")}
            ></img>
            <h1 className="h1-seo">청토마 AI</h1>
            <h3>머신러닝을 이용한 한국 경마 데이터 분석 서비스</h3>
            <h3>Data analysis of korea horse racing service</h3>
            
          </div>
          {/* <h6 className="category category-absolute">
            Coded by slayerzeroa
          </h6> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
