import React from 'react'
import TextStyled from "./Text.styled"

const Text = ({text, value}) => {  
  return (
    <TextStyled value={value}>{text}</TextStyled>
  ) 
}
export default Text