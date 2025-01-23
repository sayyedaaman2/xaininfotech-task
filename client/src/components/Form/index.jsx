import './styles.css'
import {useForm} from 'react-hook-form'
import InputField from './components/InputField'
import Button from '../common/Button'

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const shcema = yup.object({
    firstName: yup.string().max(15,"First Name must be at 15 characters.").required('First name is required.'),
    lastName: yup.string().max(15,"First Name must be at 15 characters.").required('Last name is required.'),
    contactNo: yup.string().required('Contact number is required.'),
    whatsappNo: yup.string("Whatsapp must be a number"),
    emailAddress: yup.string().email("Email address must be a valid email").required('Email address is required'),
    referral: yup.string(),
    password: yup.string().required('Password is required.'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required.'),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions.')
});

function Form(){
    let {register,handleSubmit,watch,formState:{errors}} = useForm({
        resolver : yupResolver(shcema)
    });
    
    const onSubmit = (data)=> console.log(data);
    // console.log(watch);
    return(
        <form id='sign-up-form' onSubmit={handleSubmit(onSubmit)}>
             
            <InputField register={register} label={'firstName'}  icon={"profile"}  errors={errors}/>
            <InputField register={register} label={'lastName'}  icon={"profile"}  errors={errors}/>
           
            <InputField register={register}  label={'contactNo'} type='number'  icon={"phone"}  errors={errors}/>
            <InputField register={register} label={'whatsappNo'} type='number'  icon={"whatsapp"}  errors={errors}/>

            <InputField register={register} label={'emailAddress'}  icon={"sms"}  errors={errors}/>

            <InputField register={register} label={'referral'}  icon={"sms"}  errors={errors}/>


            <InputField register={register} label={'password'}  icon={"eye"}  errors={errors}/>
            <InputField register={register} label={'confirmPassword'}  icon={"eye"}  errors={errors}/>

            <div className="term-and-condition">
                <input type="checkbox" {...register('terms')}></input>
                <p>
                I agree to the <a href='term'>Terms and Conditions</a> and <a href="policy">Privacy Policy</a>.
                </p>
            </div>
           { (errors?.terms) && <span className="error-msg" style={{border:'1px solid white',color : "red",padding : "4px 12px"}}>{errors.terms.message}</span>
}
            <div className="form-actions">
                <Button onClickFn={onSubmit} size={'small'} backgroundColor={'black'} color={'white'} borderColor={'white'}>
                    Register
                </Button>
                <Button href={'/login'} size={'small'} color={'white'} borderColor={'white'}>
                    Login
                </Button>
            </div>
        </form>
    )
}

export default Form;