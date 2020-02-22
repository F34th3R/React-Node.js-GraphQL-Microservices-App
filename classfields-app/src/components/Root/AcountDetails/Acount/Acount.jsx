import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledEmail = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1rem;
  margin-top: .25rem;
`

const StyledWrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: .9rem;
`

export const Acount = () => {
  const session = useSelector(state => state.session)
  return (
    <StyledWrapper>
      Logged in as
      <StyledEmail>
         {session.user.email}
      </StyledEmail>
    </StyledWrapper>
  )
}
