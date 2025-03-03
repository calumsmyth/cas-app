import React from 'react';
import gitHubLogo from '../assets/images/gitHubLogo.png';
import instagramLogo from '../assets/images/instagramLogo.webp';
import linkedInLogo from '../assets/images/linkedInLogo.png';

const Footer = () => {
    return(
        <>
        <div className="footer">
        <h4>Please see my socials:</h4>
        <div className="socials">
            <a href="https://github.com/calumsmyth" target="_blank" rel="noopener noreferrer">
                <img
                src={gitHubLogo}
                alt="GitHub logo."
                style={{maxWidth: "30px", height: "auto"}}
                /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/calumsmyth" target="_blank" rel="nooperner noreferrer">
                <img
                    src={linkedInLogo}
                    alt="LinkedIn logo."
                    style = {{maxWidth: "38px", height: "auto"}}
                    /> LinkedIn
                </a>
            </div>
        </div>
    </>
    );
}



export default Footer;