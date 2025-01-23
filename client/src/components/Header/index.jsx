import "./styles.css"

import  Button  from "../common/Button";
import Logo from "../common/Logo";
function Header(){
    return(
        <header>
            <div className="wrapper">
                <Logo />
            <ul role="menu">
                <li role="menuitems"><Button href="/login"  backgroundColor="white" color="blue">Login</Button></li>
                <li role="menuitems"><Button href="/sign-up" color="white" borderColor='white'>Sign Up</Button></li>
            </ul>
            </div>
        </header>
    )
}

export default Header;