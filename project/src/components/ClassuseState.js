import React from "react";

class ClassuseState extends React.Component{

    constructor(){
        super();
        this.state = { color:'yellow' ,model:'honda'}
    }
    
    render(){
        return(
            <>
            <p>my fruit color is { this.state.color } & model is {this.state.model}</p>
            <button type="button" onClick={ () => this.setState(
                (previousState) => { return{...previousState,color :'green'} }
            ) }>Change Color</button>
            </>
        )
    }
}

export default ClassuseState;