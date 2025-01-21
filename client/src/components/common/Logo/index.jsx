
import './styles.css'
import LogoImg from '../../../assets/Logo.svg'
import LargeLogoImg from '../../../assets/largeLogo.svg'
function Logo({
    size='regular'
}){

    if(size == 'large'){
        return (<img src={LargeLogoImg}/>)
    }

    return(
        <img src={LogoImg}/>
    )
}

export default Logo;