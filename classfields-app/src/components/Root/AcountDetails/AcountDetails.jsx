import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Acount } from './Acount'

export const AcountDetails = () => {
  const [isSigningUp, setIsSigningUp] = useState(false)
  const session = useSelector(state => state.session)

  if (session) return <Acount />

  return isSigningUp 
    ? <SignUp oncChangeToLogin={() => setIsSigningUp(false)} /> 
    : <Login oncChangeToSignUp={() => setIsSigningUp(true)} />
}
