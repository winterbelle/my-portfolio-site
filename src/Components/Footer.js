import './Footer.css';
import LI from '../assets/linkedin.png';
import GH from '../assets/github.png';

export default function Footer () {
    const year = new Date().getFullYear();

    return(
        <footer>
            <strong>{`Copyright © ${year}. All rights reserved.`}</strong>
            <div className='footer-images'>
                <a href='https://www.linkedin.com/in/blanca-altamirano-3b7387214/'><img src={LI} alt='Linkedin'/></a>
                <a href='https://github.com/winterbelle'><img src={GH} alt='Github' /></a>
            </div>
        </footer>
    );
};