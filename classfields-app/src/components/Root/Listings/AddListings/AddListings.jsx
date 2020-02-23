import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { useForm } from 'react-hook-form'

import { StyledTextInput } from '#root/components/shared/StyledTextInput'
import { StyledTextarea } from '#root/components/shared/StyledTextarea'

const StyledForm = styled.form`
  background-color: ${props => props.theme.whiteSmoke};
  margin-top: 1rem;
  padding: 1rem;
`

const StyledLabel = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 0.5rem;
  }
`

const StyledLabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const StyledButton = styled.button`
  margin-top: 0.5rem;
`

const mutation = gql`
  mutation($description: String!, $title: String!) {
    createListing(description: $description, title: $title) {
      id
    }
  }
`

export const AddListings = ({ onAddListing: pushAddListing }) => {
  const [createListing] = useMutation(mutation)

  const {
    formState: { isSubmitting },
    handleSubmit,
    register, 
    reset
  } = useForm()

  const onSubmit = handleSubmit(async ({ title, description }) => {
    await createListing({ variables: { title, description } })
    reset()
    pushAddListing()
  })

  return(
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        <StyledLabelText>Title</StyledLabelText>
        <StyledTextInput disabled={isSubmitting} name="title" ref={register} type="text" />
      </StyledLabel>

      <StyledLabel>
        <StyledLabelText>Description</StyledLabelText>
        <StyledTextarea disabled={isSubmitting} name="description" ref={register} />
      </StyledLabel>

      <StyledButton disabled={isSubmitting} type="submit">
        Add Listing
      </StyledButton>
    </StyledForm>
  )
}
