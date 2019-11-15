import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const ContactForm = () => {
    return (
        <div style={{textAlign: 'center', marginTop:'2rem', display:'flex', justifyContent:'center', justifyContent:'space-around'}}>
            <a href="https://www.linkedin.com/in/cjogles/" target="_blank"><LinkedInIcon style={{fontSize: "5rem"}}/></a>
            <a href="https://github.com/cjogles" target="_blank"><GitHubIcon style={{fontSize: "5rem"}}/></a>
            <a href="mailto: jackson.ogles28@gmail.com" target="_blank"><EmailIcon style={{fontSize: "5rem"}}/></a>
        </div>
    )
}

export default ContactForm;