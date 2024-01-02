import './Header.css'
import styles from './Header.module.css'

function Header(){
    const headingStyle={
        color : "red",
        backgroundColor : "lightblue",
    }
    return(
        <>
        <p style={{ color : "blue" }}> my heading inline css</p>
        <h3 style={headingStyle}>my paragraph inline object styling</h3>
        <h2 className={styles.classStyle}> my css stylesheet</h2>
        
        </>
    )
}


export default Header;