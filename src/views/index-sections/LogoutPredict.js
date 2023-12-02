import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function LogoutPredict() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="logout-predict-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">경마 결과 예측 서비스는 로그인 이후 사용 가능합니다.</h3>
              <h5 className="description">
              The horse racing result prediction service will be available after logging in.
              競馬結果予測サービスはログイン後に使用できます。赛马结果预测服务登录后可以使用。
              El servicio de predicción de resultados de carreras de caballos está disponible después de iniciar sesión.
              Le service de prévision des résultats des courses est disponible après la connexion.
              Nach der Anmeldung steht Ihnen der Predictive-Service zur Verfügung
              Служба прогнозирования результатов скачек будет доступна после входа в систему.
              Dịch vụ dự đoán kết quả đua ngựa có thể sử dụng sau khi đăng nhập.
              घुड़सवार परिणाम पूर्वानुमान सेवा लॉग इन करने के बाद उपलब्ध होगी.
              </h5>
            </Col>
          </Row>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h3 className="title">더 좋은 서비스를 원하시나요?</h3>
              <h5 className="description">
                한국 경마 데이터분석 서비스를 이용해주셔서 감사합니다.
                <br></br>
                여러분의 피드백을 통해 더 나은 서비스를 제공하도록 노력하겠습니다.
                <br></br>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LogoutPredict;
