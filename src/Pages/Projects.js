import './Projects.css';
import GH from '../assets/github.png';
import EL from '../assets/external-link.png';

export default function Projects (){
    return(
        <div className='projects'>
            <h2>My Projects</h2>
            <div id='projects-container'>
                <div id='projects' className='my-projects'>
                    <h4>Reflections</h4>
                    <p>An application for new parents to connect with each other and share their experiences on how they navigated through the many challenges postpartum.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/p-mitchell1007/capstone-9-6-group-1-frontend'> <img src={GH} alt='Github' /></a>
                        <a href='https://reflections-group1-frontend.netlify.app/home'><img src={EL} alt='external link' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>FlourSync</h4>
                    <p>A POS System built for a simulated bakery business. Provides desktop/mobile funxtionality for managing bakery sales.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/FlourSync'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>JobScript</h4>
                    <p>JobScript is an app that was built for LaGuardia CC's 2025 Hackothon. It generates resume's built on user input.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/JobScript'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}