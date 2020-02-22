import React from 'react'
import styled from 'styled-components'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

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

const StyledSignUpButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`

const StyledOrLogin = styled.span`
  font-size: .9rem;
`

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
    }
  }
`
const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .test('sameAsConfirmPassword', '${path} is not the same as the confirmation password', function() {
      return this.parent.password === this.parent.confirmPassword
    })
})

export const SignUp = ({ oncChangeToLogin: pushChangeToLogin }) => {
  const [createUser] = useMutation(mutation)

  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    register,
    reset
  } = useForm({ mode: 'onChange', validationSchema })

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await createUser({ variables: { email, password } })
    reset()
    pushChangeToLogin()
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

      <StyledLabel>
        <StyledLabelText>
          Confirm Password
        </StyledLabelText>
        <StyledTextInput
          disabled={isSubmitting}
          name="confirmPassword"
          type="password"
          ref={register}
        /> 
      </StyledLabel>

      <StyledSignUpButton disabled={isSubmitting || !isValid} type="submit">
        Sign Up
      </StyledSignUpButton>
      {' '}
      <StyledOrLogin>
        or <a href="#" onClick={e => {
          e.preventDefault()
          pushChangeToLogin()
        }}>Login</a>
      </StyledOrLogin>
    </form>
  )
}