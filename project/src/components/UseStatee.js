import { useState } from "react";

function UseStatee(){
const [first,setSecond] = useState('Red')

    return(
        <>
        <p>my fruit color is {first} </p>
        <button type="button" onClick={ () => { setSecond('Blue') } }>Change color</button>
        </>
    )
}


export default UseStatee;