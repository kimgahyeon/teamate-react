import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Button = styled.button`
  display: block;
  background-color: #565656;
  color: #ffffff;
  height: 58px;
  border-radius: 4px; 
  margin-top: 7px;
  font-size: 15px;
  line-height: 58px;
  width: 100%;  
  outline: none;
  cursor: pointer;
  border: 0;

  &:hover {
      background-color: #218c74;
      transition-duration: 0.3s
    }
`;

const Error = styled.div`
  margin-top: 8px;
  margin-bottom: 40px;
  font-size: 14px;
  color: #E83442;
`;


const JoinPresenter = ({
  loading,
  error,
  values,
  update,
  handleSubmit,
  setIsMate,
}) => (
  <>
    <Helmet>
      <title>Join | Teamate</title>
    </Helmet>
    <div className="error_sign"> {error} </div>
    <form onSubmit={handleSubmit}>
      <input
        className="inputMateInfo"
        onChange={update.name}
        type="text"
        placeholder="이름"
        value={values.name}
      ></input>{" "}
      <br />
      <input
        className="inputMateInfo"
        onChange={update.email}
        type="text"
        placeholder="이메일"
        value={values.email}
      ></input>{" "}
      <br />
      <input
        className="inputMateInfo"
        onChange={update.password}
        type="password"
        placeholder="비밀번호"
        value={values.password}
      ></input>{" "}
      <br />
      <input
        className="inputMateInfo"
        onChange={update.confirmPassword}
        type="password"
        placeholder="비밀번호 확인"
        value={values.confirmPassword}
      ></input>{" "}
      <div className="checkMate">
        이미 회원이신가요?{" "}
        <div
          className="checkMateLink"
          onClick={() => {
            setIsMate(true);
          }}
        >
          {" "}
          로그인으로 이동{" "}
        </div>
      </div>
      <br />
      <br />
      <Button type="submit">
        {" "}
        회원가입하기{" "}
      </Button>
    </form>
  </>
);

export default JoinPresenter;
