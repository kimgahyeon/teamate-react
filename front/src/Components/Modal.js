import React, { useEffect } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  animation: modal-bg-show 0.3s;
  ${(props) => (props.open ? "animation-direction: reverse" : "")}

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.section`
  width: 90%;
  height: fit-content;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Header = styled.header`
  position: relative;
  margin-top: 60px;
  color: #3c3c3c;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: -40px;
  position: absolute;
  right: 20px;
  width: 30px;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
  display: block;
  outline: none;
  cursor: pointer;
  border: 0;
`;

const Main = styled.main`
  padding: 35px 35px 25px;
`;

const ModalComponent = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { modalOpen, setModalOpen, header } = props;

  const modalCloseHandler = (e) => {};
  // 모달이 떠있을때 뒷 영역의 스크롤이 내려가지 않게 막는 코드
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <ModalContainer open={modalOpen}>
      {modalOpen ? (
        <Modal>
          <Header>
            <CloseButton
              onClick={() => {
                setModalOpen(false);
              }}
            >
              {" "}
              &times;{" "}
            </CloseButton>
            {header}
          </Header>
          <Main>{props.children}</Main>
        </Modal>
      ) : null}
    </ModalContainer>
  );
};

export default ModalComponent;
