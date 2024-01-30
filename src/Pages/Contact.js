import './Contact.css';
import EmailIcon from '../assets/email icon.png';
import location from '../assets/location.png';
import TwitterX from '../assets/Twitter X.png';

export default function Contact () {
    return(
        <div id='contact' className='contact'>
            <h2>Contact Me</h2>
            <div className='methods'>
                <img src={EmailIcon} alt='email icon'/>
                <p>blanca.altamirano0318@gmail.com</p>
                <img src={location} alt='location pin'/>
                <p>Brooklyn, NY</p>
                <img src={TwitterX} alt='X previously twitter' />
                <p>https://twitter.com/winter_belle_</p>
            </div>
        </div>
    )
}