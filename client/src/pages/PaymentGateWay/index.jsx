import PaymentImg from '../../assets/images/paymentimg.png'
import Form from '../../components/Form/PaymentMethod';
import './styles.css'
function PaymentGateWay(){
    return(
        <main id="payment-gateway">
            <div className="wrapper">
                <div className="img-container">
                    <img src={PaymentImg} alt="payment-img"/>
                </div>
                <div className="payment-container">
                    <h1 className='fs-700 fw-600'>Payment GateWay</h1>
                    <hr/>
                    <Form/>
                </div>
            </div>
        </main>
    )
}

export default PaymentGateWay;