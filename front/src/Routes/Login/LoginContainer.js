import { mateAPI } from "api";
import React, { useEffect, useState } from "react";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = ({ setIsMate, setModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      login({ email, password });
    }
  };

  const login = async () => {
    try {
      setLoading(true);
      const { data } = await mateAPI.login({ email, password });
      console.log(data);
      if (data.status){
        alert(data.mate.name)
        setModalOpen(false)
      }
    } catch {
      setError("로그인 정보가 일치하지 않습니다.");
    } finally {
      setLoading(false);
    }
  };

  const updateEmail = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  const updatePassword = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };

  const values = { email, password };
  const update = { email: updateEmail, password: updatePassword };

  return (
    <LoginPresenter
      loading={loading}
      error={error}
      values={values}
      update={update}
      handleSubmit={handleSubmit}
      setIsMate={setIsMate}
    />
  );
};

export default LoginContainer;
