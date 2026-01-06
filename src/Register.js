import { useState, useEffect, useRef } from "react"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#@%$]).{8,24}$/;
const EMAIL_REGEX = /^([a-zA-Z0-9])([a-zA-Z0-9.])*@([a-zA-Z])+\.([a-zA-Z]){2,}$/;

const Register = () => {
  const userRef = useRef();
  // const errorRef = useRef();

  const [userName, setUserName] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);


  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);


  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false)

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName])


  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])


  return (
    <section className="container card mt-4 p-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-3">Register</h1>
      <form>

        <label className="form-label me-2" htmlFor="username">Username</label>
        {validName && <FontAwesomeIcon icon={faCheck} />}
        {!validName && userName.length !== 0 && <FontAwesomeIcon icon={faTimes} />}
        <input type="text"
          ref={userRef}
          className="form-control mb-2"
          id="username"
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        {userFocus && userName.length !== 0 && !validName &&
          <p>
            <FontAwesomeIcon icon={faInfoCircle} className="mt-2 me-2" />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        }


        <label className="form-label me-2" htmlFor="email">Email</label>
        {validEmail && <FontAwesomeIcon icon={faCheck} />}
        {!validEmail && email.length !== 0 && <FontAwesomeIcon icon={faTimes} />}
        <input type="email"
          className="form-control mb-2"
          id="email"
          name="email"
          placeholder="Enter email"
          autoComplete="off"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        {emailFocus && email.length !== 0 && !validEmail &&
          <p>
            <FontAwesomeIcon icon={faInfoCircle} className="mt-2 me-2" />
            one character before '@'.<br />
            at least one character after '@'.<br />
            at least two character after '.' as domain <br />
            Letters, numbers allowed, hyphen not allowed after '@'.
          </p>
        }

        <label className="form-label me-2" htmlFor="password">Password</label>
        {validPwd && <FontAwesomeIcon icon={faCheck} />}
        {!validPwd && pwd.length !== 0 && <FontAwesomeIcon icon={faTimes} />}
        <input type="password"
          className="form-control mb-2"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="Enter password"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        {pwdFocus && pwd.length !== 0 && !validPwd &&
          <p>
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters, a number and a special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
        }

        <label className="form-label me-2" htmlFor="passwordConfirmation">Confirm Password</label>
        {validMatch && matchPwd && <FontAwesomeIcon icon={faCheck} />}
        {!validMatch && matchPwd.length !== 0 && <FontAwesomeIcon icon={faTimes} />}
        <input type="password"
          className="form-control mb-2"
          id="passwordConfirmation"
          name="passwordConfirmation"
          autoComplete="off"
          placeholder="Confirm your password"
          value={matchPwd}
          onChange={e => setMatchPwd(e.target.value)}
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        {matchFocus && matchPwd.length !== 0 && !validMatch &&
          <p>
            <FontAwesomeIcon icon={faInfoCircle} />
            This should match between previous password entry.
          </p>
        }

        <div className="row g-3 p-4 mt-4 text-align-center">
          <button className="btn btn-primary mb-3">Submit</button>
          <Link to="/">Already registered ? Click here to sign in</Link>
        </div>


      </form>
    </section>
  )
}

export default Register
