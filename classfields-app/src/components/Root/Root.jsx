import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import gql from 'graphql-tag'
import styled from 'styled-components'

import { graphqlClient } from '#root/api/graphqlClient'
import { setSession } from '#root/store/ducks/session'

import { AcountDetails } from './AcountDetails'

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: 80rem;
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

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`

export const Root = () => {
  const dispatch = useDispatch()
  const [initialised, setInitialised] = useState(false)

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      console.log(data)
      if (data.userSession) {
        console.log(data.userSession)
        dispatch(setSession(data.userSession))
      }
      setInitialised(true)
    })
  }, [])

  if (!initialised) return "Loading..."

  return(
    <StyledWrapper>
      <StyledContainer>
        <StyledContent>
          Content
        </StyledContent>
        <StyledSidebar>
          <AcountDetails />
        </StyledSidebar>
      </StyledContainer>
    </StyledWrapper>
  )
}
