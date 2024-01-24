import './Projects.css';
import GH from '../assets/github.png';
import EL from '../assets/external-link.png';

export default function Projects (){
    return(
        <div className='projects'>
            <h2>My Projects</h2>
            <div id='projects' className='my-projects'>
                <h4>Reflections</h4>
                <p>An application for new parents to connect with each other and share their experiences on how they navigated through the many challenges postpartum.</p>
                <div className='linked-to'>
                    <a href='https://github.com/p-mitchell1007/capstone-9-6-group-1-frontend'> <img src={GH} alt='Github' /></a>
                    <a href='https://reflections-group1-frontend.netlify.app/home'><img src={EL} alt='external link' /></a>
                </div>
            </div>
            <h1>More projects coming soon! Stay Tuned.</h1>
        </div>
    )
}