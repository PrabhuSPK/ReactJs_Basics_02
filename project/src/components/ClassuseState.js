import React from "react";

class ClassuseState extends React.Component{

    constructor(){
        super();
        this.state = { color:'yellow' }
    }

    render(){
        return(
            <>
            <p>my fruit color is { this.state.color }</p>
            <button type="button" onClick={ () => this.setState( { color : 'green' } ) }>Change Color</button>
            </>
        )
    }
}

export default ClassuseState;