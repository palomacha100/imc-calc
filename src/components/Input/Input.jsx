import React from 'react'
import { RangeInput } from "./Input.styled"

const Input = ({max, min, value, id, onMouseMove}) => {
  return (
    <RangeInput onMouseMove={onMouseMove} id={id} value={value} min={min}max={max} type="range" />
  )
}
export default Input;
