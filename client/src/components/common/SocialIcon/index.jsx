import React from 'react';
import facebookIcon from '../../../assets/socialmediaicon/facebook.svg';
import instagramIcon from '../../../assets/socialmediaicon/instagram.svg';
import linkedinIcon from '../../../assets/socialmediaicon/linkedin.svg';
import skypeIcon from '../../../assets/socialmediaicon/skype.svg';


const icons = {
    facebook: facebookIcon,
    skype: skypeIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon
};

function SocialIcon({ type,url="" }) {
    return (
        <a href={url} target='_blank'>
        <img src={icons[type]} alt={`${type} icon`} />
        </a>
    );
}

export default SocialIcon;