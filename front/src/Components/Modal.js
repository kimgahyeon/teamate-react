import React, { useEffect } from "react";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, error_sign } = props;

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
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
            {header}
          </header>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
