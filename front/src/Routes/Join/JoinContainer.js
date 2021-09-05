import { mateAPI } from "api";
import React, { useEffect, useState } from "react";
import JoinPresenter from "./JoinPresenter";

const JoinContainer = ({ setIsMate }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      join({ email, password, name });
    }
  };

  const join = async () => {
    try {
      setLoading(true);
      const { data } = await mateAPI.join({
        email,
        password,
        confirmPassword,
        name,
      });

      if (!data.ok) {
        setError(data.msg);
        return;
      }
    } catch {
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

  const updateName = (event) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };

  const updateConfirmPassword = (event) => {
    const {
      target: { value },
    } = event;
    setConfirmPassword(value);
  };

  const values = { email, password, confirmPassword, name };
  const update = {
    email: updateEmail,
    password: updatePassword,
    confirmPassword: updateConfirmPassword,
    name: updateName,
  };

  return (
    <JoinPresenter
      loading={loading}
      error={error}
      values={values}
      update={update}
      handleSubmit={handleSubmit}
      setIsMate={setIsMate}
    />
  );
};

export default JoinContainer;
