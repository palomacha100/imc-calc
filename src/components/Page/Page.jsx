import React, { useState }from 'react'
import Input from "../Input/Input"
import { ContainerForm, WeightGroup, HeightGroup } from "./Page.styled"
import Title from "../Title/Title"
import Text from "../Text/Text"
import Number from "../Number/Number"
import Button from "../Button/Button"

const Page = () => { 

    const [valueWeight, setValueWeight] = useState("")
    const [valueHeight, setValueHeight] = useState("")
    const [result, setResult] = useState("")

    const handleValueWeight = (e) => {
        const valueWeight = e.target.value;
        setValueWeight(e.target.value);
        console.log(valueWeight);
      };

      const handleValueHeight = (e) => {
        const valueHeight = e.target.value;
        setValueHeight(e.target.value);
        console.log(valueHeight);
      };

      const handleClick = (e) => {
        e.preventDefault();
        const calc =(valueWeight / valueHeight)
        console.log(calc)
        let diagnosis
        if (calc < 18.5)
        diagnosis = "Baixo peso"
        if (18.5 > calc < 24.9)
        diagnosis = "Intervalo normal"
        if (25 > calc < 29.9)
        diagnosis = "Sobrepeso"
        if (30 > calc < 34.9)
        diagnosis = "Obesidade classe I"
        if (35 > calc < 39.9)
        diagnosis = "Obesidade classe II"
        if (40 > calc)
        diagnosis = "Obesidade classe III"
        setResult(`IMC: ${calc.toFixed(2)} (${diagnosis})`)
      };

  return (
    <ContainerForm>
        <Title title="Calcule seu IMC"/>
        <WeightGroup>
            <Text text="Peso"/>
            <Number number={valueWeight}/>
        </WeightGroup>
        <Input id={valueWeight} onMouseMove={handleValueWeight} min="0" max="200"/>  
        <HeightGroup>
            <Text className="Text" text="Altura"/>
            <Number number={(valueHeight / 100)}></Number>
        </HeightGroup>
        <Input id={valueHeight} onMouseMove={handleValueHeight} min="0" max="220"/>
        <Button buttonText="Calcular" onClick={handleClick}/>
        <Text className="result" text={result} /> 
    </ContainerForm>
  ) 
}
export default Page
