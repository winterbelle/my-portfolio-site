import GamerBelle from '../assets/Gamer-Belle.png';
import './About.css';

export default function About (){
    return(
        <div id='about' className='about'>
            <div className='gamer'>
                <img src={GamerBelle} alt='An animated Belle' />
            </div>
            <div className='about-belle'>
                <h2>Hello World!</h2>
                <p>My name is Blanca Altamirano, but you can call me Belle 🌸. During a time of isolation gaming really helped 
                in keeping me connected to others and keeping me sane. I discovered my love for technology through gaming after 
                building my own gaming pc from scratch. This led me to take a 3 month bootcamp course, get CompTIA A+ certified 
                and begin a career in IT Support. My roles have included being a help desk analyst and a systems technician. 
                In December of 2022 I made the decision to explore further into the tech industry and broaden my skillset beyond 
                tech support and took on a year long training program to become a full-stack web developer. During my 
                training I discovered that I also really enjoyed designing and creating websites and decided to also learn about 
                UI/UX design.
                <br />
                <br />
                In addition to my love of technology and design, I am also interested in mathematics, psychology and gaming.
                Although to many people gaming may seem like just a hobby, for me it's one of the major factors of why 
                I broke into tech and why I am pursuing a career in software engineering. I plan to continue learning beyond web development and
                one day become a game developer 🎮👩🏼‍💻. </p>
            </div>
        </div>
    );
};