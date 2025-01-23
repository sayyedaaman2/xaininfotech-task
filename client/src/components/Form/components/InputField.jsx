import SocialIcon from "../../common/Icon";
import Utility from '../../../utils';
import './styles.css';

function InputField({ label, type="text", register, icon,errors }) {
    const capitalizedCase = Utility.camelCaseToCapitalized(label);
    
    return (
        <div className="input-field">
            <label htmlFor={label}>{capitalizedCase}</label>
            <div className="input-box" >
                <input {...register(label)} type={type}  aria-invalid={errors[label] ? "true" : "false"} />
                <SocialIcon type={icon} />
            </div>
           {
            (errors[label]?.message) && <span className="error-msg" style={{border:'1px solid white',color : "red",padding : "4px 12px"}}>{errors[label]?.message}</span>
           }
        </div>
    );
}

export default InputField;