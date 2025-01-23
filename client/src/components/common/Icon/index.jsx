import React from 'react';
import facebookIcon from '../../../assets/icons/facebook.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'
import linkedinIcon from '../../../assets/icons/linkedin.svg'
import skypeIcon from '../../../assets/icons/skype.svg'
import eyeIcon from '../../../assets/icons/eye.svg'
import whatsAppIcon from '../../../assets/icons/whatsapp.svg'
import phoneIcon from '../../../assets/icons/phone.svg'
import smsIcon from '../../../assets/icons/sms.svg'
import profileIcon from '../../../assets/icons/profile.svg'


const icons = {
    facebook: facebookIcon,
    skype: skypeIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
    eye : eyeIcon,
    whatsapp : whatsAppIcon,
    phone : phoneIcon,
    sms : smsIcon,
    profile : profileIcon,
};

function Icon({ type}) {
    return (
        
        <img src={icons[type]} alt={`${type} icon`} />
        
    );
}

export default Icon;