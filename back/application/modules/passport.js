const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// diff 1
const Mate = require("../model/mate/schema");

module.exports = () => {
  /**
   * serializeUser - Strategy 성공 시 호출
   * 성공 시 실행되는 done(null, mate._id);에서 mate의 id를 전달받아
   * 세션(req.session.passport.user)에 저장
   *
   * 세션이 있어야 페이지 이동 시에도 로그인 정보가 유지될 수 있음
   */
  passport.serializeUser((mate, done) => {
    done(null, mate._id);
  });

  /**
   * deserializeUser
   * 페이지에 접근할 때 마다 사용자의 정보를 Session에서 읽어 옴
   * serializeUser에서 done으로 넘겨주는 mate._id가
   * deserializeUser의 첫 번째 매개변수로 전달
   *
   */
  passport.deserializeUser((_id, done) => {
    Mate.findById(_id, (err, mate) => {
      done(null, mate);
    });
  });

  // login
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: true,
        passReqToCallback: false,
      },
      (email, password, done) => {
        /**
         * done(err, user, [customError])
         * err: DB조회 등 시스템 상의 로직에서 발생하는 에러
         * user: 성공했을 때 return 할 값
         * customError: 사용자가 임의로 실패를 만들고 싶을 때 사용
                        ex) 비밀번호가 틀렸다는 에러를 표현하고 싶을 때
         */

        Mate.findOne({ email }, (err, mate) => {
          if (err) return done(err);

          if (!mate)
            return done(null, false, {
              message: "로그인 정보가 일치하지 않습니다.",
            });

          if (!mate.validPassword(password, mate.password))
            return done(null, false, {
              msg: "로그인 정보가 일치하지 않습니다.",
            });

          return done(null, mate._id);
        });
      }
    )
  );
};
