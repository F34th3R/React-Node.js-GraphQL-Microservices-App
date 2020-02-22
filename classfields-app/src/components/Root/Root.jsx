import React from 'react'
import styled from 'styled-components'
import { Login } from './Login'

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 80rem;
  margin: 0 auto;
`

const StyledContent = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const StyledSidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`

const StyledWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1rem;
`

export const Root = () => {
  return(
    <StyledWrapper>
      <StyledContainer>
        <StyledContent>
          Content
        </StyledContent>
        <StyledSidebar>
          <Login />
        </StyledSidebar>
      </StyledContainer>
    </StyledWrapper>
  )
}
