import './styles.css'
import { useForm } from 'react-hook-form'
import InputField from '../components/InputField'
import Button from '../../common/Button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const shcema = yup.object({
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.'),

});

function Form() {
    let { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(shcema)
    });

    const onSubmit = (data) => console.log(data);
    // console.log(watch);
    return (
        <form id='login-form' onSubmit={handleSubmit(onSubmit)}>

            <InputField register={register} label={'username'} icon={"profile"} errors={errors} />
            <InputField register={register} label={'password'} icon={"eye"} errors={errors} />


            <div className="forget-password">
                <Button href='/forget' color='white'>Forget Password?</Button>
            </div>
            {(errors?.terms) && <span className="error-msg" style={{ border: '1px solid white', color: "red", padding: "4px 12px" }}>{errors.terms.message}</span>
            }
            <div className="form-actions">
                
                <Button onClickFn={onSubmit} size={'small'} color={'black'} backgroundColor={'white'} borderColor={'white'}>
                    Login
                </Button>
            </div>
            <div className="sign-up-link">
                Don't have an account <Button href='/sign-up'>Sign Up</Button>
            </div>
        </form>
    )
}

export default Form;