import React from 'react'
import { useSelector } from 'react-redux'
import { Login } from './Login'
import { Acount } from './Acount'

export const AcountDetails = () => {
  const session = useSelector(state => state.session)

  if (session) return <Acount />

  return <Login />
}
