import { useMutation } from '@apollo/react-hooks'
import gpl from 'graphql-tag'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { StyledTextInput } from '#root/components/shared/StyledTextInput'

const StyledLabel = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 0.75rem;
  }
`

const StyledLabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`

const StyledLoginButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`

const StyledorSignUp = styled.span`
  font-size: 0.9rem;
`

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        id
        email 
      }
    }
  }
`

export const Login = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm()

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password)
  })

  return(
    <form onSubmit={onSubmit}>
      <StyledLabel>
        <StyledLabelText>
          Email
        </StyledLabelText>
        <StyledTextInput
          disabled={isSubmitting}
          name="email"
          type="email"
          ref={register}
        /> 
      </StyledLabel>
  
      <StyledLabel>
        <StyledLabelText>
          Password
        </StyledLabelText>
        <StyledTextInput
          disabled={isSubmitting}
          name="password"
          type="password"
          ref={register}
        /> 
      </StyledLabel>

      <StyledLoginButton disabled={isSubmitting} type="submit">
        Login
      </StyledLoginButton>
    </form>
  )
}