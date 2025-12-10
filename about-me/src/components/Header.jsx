import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


function Header (){
    return(
    <header>
 
        <img src="src\assets\me.jpg" alt="" />
        <h1>Youmna Ashraf</h1>
        <small>Frontend Developer</small>
        <div className="btns">
            <a href="mailto:youmnaashraf194@gmail.com" 
            className="btn email">
            <MdEmail />Email</a>
        
            <a href="https://www.linkedin.com/in/youmna-ashraf-4a3119266/" 
            className="btn linkedin">
            <FaLinkedin /> LinkedIn</a>
        </div>
    </header>
)
}

export default Header;