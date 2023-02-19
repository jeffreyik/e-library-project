import {useAuthValue} from '../context/AuthContext'
import { auth } from '../firebase'
import {sendEmailVerification} from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const VerifyEmail = () => {
  const {currentUser} = useAuthValue()
  const {timeActive, setTimeActive} = useAuthValue()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [time, setTime] = useState(60)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time])

  const resendEmailVerification = () => {
    setButtonDisabled(true)
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setButtonDisabled(false)
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
      setButtonDisabled(false)
    })
  }

  return (
    <div>
      <h1>Verify your Email Address</h1>
      <h3>A verification email has been sent to: {currentUser?.email}</h3>
      <button className="resend"
        onClick={resendEmailVerification}
        disabled={timeActive}
        >Resend Email {timeActive && time}</button>
    </div>
  )
}

export default VerifyEmail