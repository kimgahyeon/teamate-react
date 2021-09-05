const LoginForm = ({ setIsMate }) => {
  return (
    <form>
      <input className="inputMateInfo" type="text" placeholder="이메일"></input>{" "}
      <br />
      <input
        className="inputMateInfo"
        type="password"
        placeholder="비밀번호"
      ></input>{" "}
      <div className="checkMate">
        아직 회원이 아니신가요?
        <div className="checkMateLink"
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
      <button className="submitButton" type="submit"> 로그인하기 </button>
    </form>
  );
};

export default LoginForm;
