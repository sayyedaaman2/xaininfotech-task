import './styles.css'
import Logo from '../common/Logo'
import SocialIcon from '../common/SocialIcon';
function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer-details">
                    <div >
                        <Logo size='large' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum omnis nesciunt explicabo distinctio expedita fuga maiores nulla facilis eos, ab debitis. Suscipit illum quod eveniet, at neque cum labore tenetur.</p>
                    </div>
                    <div >
                        <h2 className='fs-600'>Important Links</h2>
                        <ul>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Support</li>
                        </ul>
                    </div>
                    <div >
                        
                        <ul>
                         
                            <li>Terms & Conditions</li>
                            <li>Contact Support</li>

                        </ul>
                        <div className="social-media">

                        <SocialIcon type={'facebook'} url='www.facebook.com'/>
                        <SocialIcon type={'instagram'} url='www.instagram.com'/>
                        <SocialIcon type={'linkedin'} url='www.linkedin.com'/>
                        <SocialIcon type={'skype'} url='www.skype.com'/>

                        </div>
                    </div>
                </div>
                    <hr/>
                <div className="copyRight">
                    <p>CopyRight &copy; 2025. All Rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;