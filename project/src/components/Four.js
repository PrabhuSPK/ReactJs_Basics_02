import React from "react";

class Four extends React.Component {
  render() {
    const { data } = this.props;

    // Handle potential undefined values
    const { age , city  } = data || {};

    const datatext = `my age is ${age} & my city is ${city}`;

    return (
        <>
            { age && city ? <p> {datatext} </p> : null } 
        </>
    )  }
}

export default Four;
