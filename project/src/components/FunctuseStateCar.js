import { useState } from "react"

function FunctuseStateCar(){

// const [color,setColor] = useState('Red')
// const [brand,setBrand] = useState('Honda')
// const [model,setModel] = useState('Activa')
// const [year,setYear] = useState('2000')

const[car,setCar] = useState(
    {
        color : 'Red',
        brand : 'Honda',
        model : 'Activa',
        year : '2000'
    }
)

function changeColor(){

    setCar((previousState) => {
        return{...previousState,color : 'Green'}
    }
    )
}
console.log(car)


    return(
        <>
        <h1>my car details</h1>
        <p>Color : {car.color}</p>
        <p>Brand : {car.brand}</p>
        <p>Model : {car.model}</p>
        <p>Year : {car.year}</p>
        <button type="button" onClick={changeColor}>Change Color</button>
        </>
    )
}

export default FunctuseStateCar;