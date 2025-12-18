import GamerBelle from '../assets/Gamer-Belle.png';
import './About.css';

export default function About (){
    return(
        <div id='about' className='about'>
            <div className='gamer'>
                <img src={GamerBelle} alt='An animated Belle' />
            </div>
            <div className='about-belle'>
                <h2>A little more about my path into tech...</h2>
                <p>
                    My journey into tech started through gaming. During a period of isolation, gaming helped me stay connected and grounded, 
                    and building my own gaming PC sparked a deeper curiosity about how technology works beneath the surface. That curiosity
                     grew into a career path I’ve been intentionally building ever since.
                    <br />
                    <br />
                    What motivates me most is my kids. They’re the reason I’m focused on creating a future rooted in stability, growth, and purpose. 
                    I’m especially drawn to building meaningful, human-centered applications—like Reflections—that support emotional well-being, 
                    self-reflection, and community. 
                    <br />
                    <br />
                    As I continue my studies in software engineering and gain hands-on experience, I’m excited to contribute to projects that 
                    make a positive impact while growing both personally and professionally. Thank you for taking the time to learn more about me!
                    <br />
                    <br />
                    This February, I will complete my AAS in Programming & Software Development, and I plan to continue my education by pursuing a BS 
                    in Information Science at CUNY School of Professional Studies. With a background in IT support and hands-on experience in full-stack 
                    development and UI/UX design, I’m focused on building thoughtful software that makes a real impact.
                    <br />
                    <br />
                    Gaming may have been where it all started, but building software that helps people is where I’m headed next 🎮💻
                </p>
            </div>
        </div>
    );
};