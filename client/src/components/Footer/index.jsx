import './styles.css'
import Logo from '../common/Logo'
import Icon from '../common/Icon';
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
                        <div className="social-media">
                            <a href="www.facebook.com" target='_blank'><Icon type={'facebook'} /></a>
                            <a href="www.instagram.com" target='_blank'><Icon type={'instagram'} /></a>
                            <a href="www.skype.com" target='_blank'><Icon type={'skype'} /></a>
                            <a href="www.linkedin.com" target='_blank'><Icon type={'linkedin'} /></a>



                        </div>
                    </div>

                </div>
                <hr />
                <div className="copyRight">
                    <p>CopyRight &copy; 2025. All Rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;