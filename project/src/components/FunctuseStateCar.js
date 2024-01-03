import { useState } from "react"

function FunctuseStateCar(){

const [color,setColor] = useState('Red')
const [brand,setBrand] = useState('Honda')
const [model,setModel] = useState('Activa')
const [year,setYear] = useState('2000')

    return(
        <>
        <h1>my car details</h1>
        <p>Color : {color}</p>
        <p>Brand : {brand}</p>
        <p>Model : {model}</p>
        <p>Year : {year}</p>
        </>
    )
}

export default FunctuseStateCar;