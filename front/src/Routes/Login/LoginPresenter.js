import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";

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


const LoginPresenter = ({
  loading,
  error,
  values,
  update,
  handleSubmit,
  setIsMate,
}) => (
  <>
    <Helmet>
      <title>Login | Teamate</title>
    </Helmet>
    <div className="error_sign"> {error} </div>
    <form onSubmit={handleSubmit}>
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
      <div className="checkMate">
        아직 회원이 아니신가요?
        <div
          className="checkMateLink"
          onClick={() => {
            setIsMate(false);
          }}
        >
          {" "}
          회원가입{" "}
        </div>
      </div>
      <br />
      <br />
      <Button type="submit">
        {" "}
        로그인하기{" "}
      </Button>
    </form>
  </>
);

export default LoginPresenter;
