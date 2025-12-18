import './Projects.css';
import GH from '../assets/github.png';
import EL from '../assets/external-link.png';

export default function Projects (){
    return(
        <div className='projects'>
            <h2>My Projects</h2>
            <div id='projects-container'>
                <div id='projects' className='my-projects'>
                    <h4>Reflections MySpace</h4>
                    <p>Reflections MySpace is an iOS companion app to the Reflections web platform, designed to support private journaling, emotional 
                        check-ins, and personal growth. The current mobile version focuses on the My Space feature, with plans to expand into 
                        the full Reflections ecosystem.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/Reflections-Mobile'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>Vinny Ten Racing</h4>
                    <p>Vinny Ten Racing is a full-stack e-commerce and service booking web application for an automotive performance brand, 
                        allowing users to browse products, book services, leave reviews, and securely check out with Stripe. It was built 
                        using PHP, MySQL, and Stripe Checkout with a custom, performance-focused UI.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/VinnyTenLite'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>FlourSync Android</h4>
                    <p>FlourSync Mobile is a customer-facing bakery ordering app that lets users browse products by category, add items to 
                        a cart, choose a payment method, and place orders through a clean, intuitive interface. Originally a POS system, 
                        it evolved into a simplified Uber Eats–style experience built with clean architecture, Room, ViewBinding, and 
                        RecyclerView.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/FlourSync-Android'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>FlourSync</h4>
                    <p>FlourSync is a point-of-sale (POS) system built for bakery businesses, offering tools to manage sales, inventory, 
                        and employee logins. It was developed using C#, .NET Core, MySQL, and MAUI for both desktop and mobile functionality.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/FlourSync'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>Reflections</h4>
                    <p>Reflections is a community-based platform that supports parents through the fourth trimester and beyond, 
                        offering space for healing, reflection, and connection. Its mission is to normalize the unspoken realities 
                        of postpartum life and provide support long after hospital care ends.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/p-mitchell1007/capstone-9-6-group-1-frontend'> <img src={GH} alt='Github' /></a>
                        <a href='https://reflections-group1-frontend.netlify.app/home'><img src={EL} alt='external link' /></a>
                    </div>
                </div>
                <div id='projects' className='my-projects'>
                    <h4>JobScript</h4>
                    <p>JobScript is an app that was built for LaGuardia CC's 2025 Hackothon. It generates tailored resumes based on user input.</p>
                    <div className='linked-to'>
                        <a href='https://github.com/winterbelle/JobScript'> <img src={GH} alt='Github' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}