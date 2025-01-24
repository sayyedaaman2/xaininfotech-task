import './styles.css'
import { useForm } from 'react-hook-form'
import Button from '../../common/Button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const shcema = yup.object({
    paymentMethod: yup.string().required("Select Payment Method.")
});

function Form() {
    let { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(shcema)
    });

    const onSubmit = (data) => console.log("data", data);
    // console.log(watch);
    return (
        <form id='payment-form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='fs-600 fw-600'>Select Payment Method</h2>
            <div className="select-method">
                <div className="radio-input">
                    <input type="radio" value={'credit-debit'} {...register('paymentMethod')} />
                    <label>Credit and Debit card</label>
                </div>
                <div className="radio-input">
                    <input type="radio" value={'upi'} {...register('paymentMethod')} />
                    <label>UPI</label>
                </div>
                <div className="radio-input">
                    <input type="radio" value={'wallet'} {...register('paymentMethod')} />
                    <label>Wallet</label>
                </div>
                <div className="radio-input">
                    <input type="radio" value={'net-banking'} {...register('paymentMethod')} />
                    <label>Net Banking</label>
                </div>
            </div>
            {errors.paymentMethod && <span>{errors.paymentMethod.message}</span>}
            <div className="form-actions">
                <Button onClickFn={onSubmit} size={'small'} color={'black'} backgroundColor={'white'} borderColor={'white'}>
                    Confim Payment
                </Button>
            </div>
        </form>
    )
}

export default Form;