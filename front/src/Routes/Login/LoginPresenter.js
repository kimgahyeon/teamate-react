import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import ProgressIndicator from "Components/ProgressIndicator";

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
      <button className="submitButton" type="submit">
        {" "}
        로그인하기{" "}
      </button>
    </form>
  </>
);

export default LoginPresenter;
