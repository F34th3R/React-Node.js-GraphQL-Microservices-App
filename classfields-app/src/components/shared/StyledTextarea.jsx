import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
  width: 100%;
  display: block;
  font-size: 0.9rem;
  padding: 0.25rem;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.veryLightGrey};
  resize: vertical;
`
