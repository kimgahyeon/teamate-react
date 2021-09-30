import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

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
    transition-duration: 0.3s;
  }
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  color: #e83442;
  font-size: 1rem;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #a7a7a7;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const Switch = styled.div`
  margin-left: 1rem;

  &:hover {
    font-weight: bold;
  }

  transition-duration: 0.3s;
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
    <Error> {error} </Error>
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
      <SwitchContainer>
        아직 회원이 아니신가요?
        <Switch
          onClick={() => {
            setIsMate(false);
          }}
        >
          {" "}
          회원가입{" "}
        </Switch>
      </SwitchContainer>
      <br />
      <br />
      <Button type="submit"> 로그인하기 </Button>
    </form>
  </>
);

export default LoginPresenter;
