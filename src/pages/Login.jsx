import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { useAuthValue } from "../context/AuthContext";
import { useRef, useState } from 'react'
import { auth } from "../firebase";
import PrimaryBtn from "../components/PrimaryBtn";
const Login = () => {
  
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    setLoading(true)
    console.log(loading)
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then(() => {
      console.log(auth.currentUser)
      setLoading(false)
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
        .catch(err => alert(err.message))
      } else {
        navigate('/')
      }
    })
    .catch(err => {
      setLoading(false)
      alert(err.message)
    })
    console.log(loading)
  }

  return (
    <div className="login-page">
  <h1>Log In</h1>
  <form action="" className="login-form">
    <div className="form-col">
      <label htmlFor="matricNumber">Email address</label>
      <input ref={emailRef} id="matricNumber" type="email" placeholder="Enter your email here" />
    </div>
    <div className="form-col">
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} id="password" type="password" placeholder="Enter your password here" />
    </div>
    {/* <button className="primary-btn" onClick={login}>Log In</button> */}
    <PrimaryBtn handleClick={login} text="Log In" disabled={loading} />    
  
  </form>
  <div className="footer">
      <p>Don't have an account </p>
      <Link to="/sign-up">Sign up</Link>
    </div>
</div>
  )
}

export default Login;