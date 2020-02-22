import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { clearSession } from '#root/store/ducks/session'

const StyledEmail = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1rem;
  margin-top: .25rem;
`

const StyledLogoutLink = styled.a.attrs({ href: '#' })`
  color: blue;
  display: block;
  margin-top: .25rem;
`

const StyledWrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: .9rem;
`

const mutation = gql`
mutation($sessionId: ID!) {
  deleteUserSession(sessionId: $sessionId)
}
`

export const Acount = () => {
  const dispatch = useDispatch()
  const [deleteUserSession] = useMutation(mutation)
  const session = useSelector(state => state.session)

  return (
    <StyledWrapper>
      Logged in as
      <StyledEmail>
         {session.user.email}
      </StyledEmail>
      <StyledLogoutLink onClick={e => {
        e.preventDefault()
        dispatch(clearSession())
        deleteUserSession({ variables: { sessionId: session.id }})
        }} 
      >
        (Logout)
      </StyledLogoutLink>
    </StyledWrapper>
  )
}
