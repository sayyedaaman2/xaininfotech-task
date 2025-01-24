import './styles.css'
import Form from "../../components/Form/Login";
import LoginImg from '../../assets/images/loginimg.jpeg'

function LoginPage(){
    return(
       <main id="login">
        <div className="wrapper">
            <div className="img-container">
                <img src={LoginImg} alt='login img' />
            </div>
            <div className="form-container">
                <div className="form-heading">
                    <h1 className="fs-600 fw-600">Login</h1>
                    <p>
                    Fill in your credentials and click on the the Sign up button

                    </p>
                </div>
                <Form/>
            </div>
        </div>
       </main>
    )
}
export default LoginPage;