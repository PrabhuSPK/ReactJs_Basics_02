function Header(){
    const headingStyle={
        color : "red",
        backgroundColor : "lightblue",
    }
    return(
        <>
        <h1 style={{ color : "red" }}>this is my heading</h1>
        <p style={headingStyle}>this is my paragraph</p>
        </>
    )
}


export default Header;