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
                <h1>Software Developer 👩🏼‍💻</h1>
                <p>
                    Hey there 👋🏼, I’m Blanca — a software developer with a background in IT support and a passion for building thoughtful, human-centered applications.
                </p>
                <img className='dev-img' src={Belle} alt='Blanca/Belle' />
                <div className='links'>
                    <a href='https://www.linkedin.com/in/blanca-altamirano-3b7387214/' target='_blank' rel='noopener noreferrer'><img src={LI} alt='LinkedIn'/></a>
                    <a href='https://github.com/winterbelle' target='_blank' rel='noopener noreferrer'><img src={GH} alt='github'/></a>
                </div>
            </div>
            <div className='tech-stack'>
                <h6>Tech Stack | </h6>
                <div className='tech-icons'>
                    <a href="https://www.python.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="40"/></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40"/></a>
                    <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40"/></a>
                    <a href="https://developer.apple.com/swift/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" width="40"/></a>
                    <a href="https://www.w3schools.com/cs/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" width="40"/></a>
                    <a href="https://www.java.com" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" width="40"/></a>
                    <a href="https://www.w3schools.com/cpp/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="40"/></a>
                    <a href="https://kotlinlang.org" target="_blank"><img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" width="40"/></a>
                    <a href="https://www.php.net" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" width="40"/></a>
                    <a href="https://reactjs.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="40"/></a>
                    <a href="https://nextjs.org/" target="_blank"><img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" width="40"/></a>
                    <a href="https://vuejs.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" width="40"/></a>
                    <a href="https://spring.io/" target="_blank"><img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" width="40"/></a>
                    <a href="https://dotnet.microsoft.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" width="40"/></a>
                    <a href="https://developer.android.com" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" width="40"/></a>
                    <a href="https://www.mysql.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="40"/></a>
                    <a href="https://www.postgresql.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" width="40"/></a>
                    <a href="https://mariadb.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" width="40"/></a>
                    <a href="https://www.sqlite.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" width="40"/></a>
                    <a href="https://www.microsoft.com/en-us/sql-server" target="_blank"><img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" width="40"/></a>
                    <a href="https://www.mongodb.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="40"/></a>
                    <a href="https://git-scm.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" width="40"/></a>
                    <a href="https://www.docker.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" width="40"/></a>
                    <a href="https://postman.com" target="_blank"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" width="40"/></a>
                    <a href="https://www.linux.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="40"/></a>
                    <a href="https://aws.amazon.com" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="40"/></a>
                    <a href="https://azure.microsoft.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" width="40"/></a>
                </div>
            </div>
        </div>
    );
};