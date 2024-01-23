import Belle from '../assets/Belle.jpeg';
import AI from '../assets/AI.png';
import BS from '../assets/Bootstrap.png';
import CSS from '../assets/CSS3.png';
import Cypress from '../assets/cypress.png';
import Express from '../assets/expressjs.png';
import Figma from '../assets/figma.png';
import Git from '../assets/git.png';
import GH from '../assets/github.png';
import Heroku from '../assets/heroku.png';
import HTML from '../assets/HTML5.png';
import Jest from '../assets/jest.png';
import JS from '../assets/js.png';
import LI from '../assets/linkedin.png'
import Linux from '../assets/linux.png';
import Node from '../assets/nodejs.png';
import PG from '../assets/postgres.png';
import PM from '../assets/postman.png';
import PS from '../assets/PS.png';
import React from '../assets/react.png';
import TW from '../assets/Tailwind.png';
import XD from '../assets/XD.png';
import './Home.css'


export default function Home (){
    return(
        <div id='home' className='home'>
            <div className='dev'>
                <h1>Full-Stack Web Developer 👩🏼‍💻</h1>
                <p>
                    Hey there 👋🏼, I'm Blanca. A passionate full-stack web developer and a CompTIA A+ certified IT
                    support specialist based in NY, USA 📍.
                </p>
                <img className='dev-img' src={Belle} alt='Blanca/Belle' />
                <div className='links'>
                    <a href='https://www.linkedin.com/in/blanca-altamirano-3b7387214/' target='_blank' rel='noopener noreferrer'><img src={LI} alt='LinkedIn'/></a>
                    <a href='https://github.com/winterbelle' target='_blank' rel='noopener noreferrer'><img src={GH} alt='github'/></a>
                </div>
            </div>
            <div className='tech-stack'>
                <h6>Tech Stack | </h6>
                <a href='https://icons8.com/icon/20909/html-5'><img src={HTML} alt='HTML' /></a>
                <a href='https://icons8.com/icon/21278/css3'><img src={CSS} alt='CSS3' /></a>
                <a href='https://icons8.com/icon/108784/javascript'><img src={JS} alt='Javascript' /></a>
                <a href='https://icons8.com/icon/NfbyHexzVEDk/react'><img src={React} alt='React' /></a>
                <a href='https://icons8.com/icon/54087/nodejs'><img src={Node} alt='Node.js' /></a>
                <img src={Cypress} alt='Cypress' /> 
                <a href='https://icons8.com/icon/kg46nzoJrmTR/express-js'><img src={Express} alt='Express js' /></a>
                <a href='https://icons8.com/icon/WwpSBtoaopNz/jest-can-collect-code-coverage-information-from-entire-projects'><img src={Jest} alt='Jest' /></a>
                <a href='https://icons8.com/icon/PndQWK6M1Hjo/bootstrap'><img src={BS} alt='Bootstrap' /></a>
                <a href='https://icons8.com/icon/x7XMNGh2vdqA/tailwind-css'><img src={TW} alt='Tailwind' /></a>
                <a href='https://icons8.com/icon/38561/postgresql'><img src={PG} alt='Postgres' /></a>
                <a href='https://icons8.com/icon/IoYmHUxgvrFB/postman-is-the-only-complete-api-development-environment'><img src={PM} alt='Postman' /></a>
                <a href='https://icons8.com/icon/20906/git'><img src={Git} alt='Git' /></a>
                <a href='https://icons8.com/icon/31085/heroku'><img src={Heroku} alt='Heroku' /></a>
                <a href='https://icons8.com/icon/zfHRZ6i1Wg0U/figma'><img src={Figma} alt='Figma' /></a>
                <a href='https://icons8.com/icon/13677/adobe-photoshop'><img src={PS} alt='Photoshop' /></a>
                <a href='https://icons8.com/icon/13631/adobe-illustrator'><img src={AI} alt='Illustrator' /></a>
                <a href='https://icons8.com/icon/4VVL78edhbW9/adobe-xd'><img src={XD} alt='Adobe XD' /></a>
                <a href='https://icons8.com/icon/17842/linux'><img src={Linux} alt='Linux' /></a>
            </div>
        </div>
    );
};