import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Đêm 10/11, HLV Park Hang-seo quyết định loại 13 cầu thủ, chốt 23 người
          dự trận đấu với Nhật Bản. Trong danh sách đăng ký có tiền vệ Nguyễn
          Tuấn Anh. Trước đó cầu thủ của HAGL bị đau, không được đăng ký trong
          trận gặp Oman vào tháng 10.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
  width: 70%;
  align-items: center;
  /* margin-top: 100px; */
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;
  &:hover {
    background: #7095b3;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.2px;
  text-align: center;
  line-height: 1.5;
`;
