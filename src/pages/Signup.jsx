import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useAuthValue } from "../context/AuthContext";
import { auth } from "../firebase";
import PrimaryBtn from "../components/PrimaryBtn";

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {setTimeActive} = useAuthValue()


  const navigate = useNavigate()

  const validatePassword = () => {
    let isValid = true
    if (passwordRef.current.value !== '' && confirmPasswordRef.current.value !== ''){
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      setLoading(true)
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
          console.log(auth.currentUser)
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setLoading(false)
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => {
            setLoading(false)
            alert(err.message)
          })
        })
    }
  }
  return (
    <div className="signup-page">
  <h1>Create an account</h1>
  <form action="" className="login-form">
    <div className="form-col">
      <label htmlFor="email">Email address</label>
      <input ref={emailRef} id="email" type="email" placeholder="Enter your email here" />
    </div>
    <div className="form-col">
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} id="password" type="password" placeholder="Enter your password here" />
    </div>
    <div className="form-col">
      <label htmlFor="confirm-password">Confirm Password</label>
      <input ref={confirmPasswordRef} id="confirm-password" type="password" placeholder="Re-enter password here" />
    </div>
    {/* <button className="primary-btn" onClick={register}>Sign Up</button> */}
    <PrimaryBtn text="Sign Up" handleClick={register} disabled={loading} />
  
  </form>
  <div className="footer">
      <p>Already have an account? </p>
      <Link to="/login">Log In</Link>
    </div>
</div> 
  )
}

export default Signup;