import './styles.css'
import Form from "../../components/Form";
import SignUpImg from '../../assets/images/signupimg.png'

function SignUpPage(){
    return(
        <main id="sign-up">
            <div className="wrapper">
                <div className="img-container">
                    <img src={SignUpImg}/>
                </div>
                <div className="form-container">
                    <div className="form-heading">
                        <h1 className='fs-600 fw-600'>Sign Up</h1>
                        <p className=''>
                        Fill in your credentials and click on the the Sign up button
                        </p>
                    </div>
                    <Form/>
                </div>
            </div>
        </main>
    )
}
export default SignUpPage;