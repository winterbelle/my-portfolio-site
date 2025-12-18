import './Resume.css'

export default function Resume (){
    return(
        <div id="resume" className="resume">
            <h2>Resume</h2>
            
            <div class="container">
                <header>
                    <h1>Blanca Altamirano</h1>
                    <p>
                        Brooklyn, NY | (347) 413-3380 | 
                        <a href="mailto:blanca.altamirano0318@gmail.com"> blanca.altamirano0318@gmail.com </a> | 
                        <a href="https://www.linkedin.com/in/blanca-altamirano-3b7387214/"> LinkedIn </a> | 
                        <a href="https://www.github.com/winterbelle"> GitHub </a>
                    </p>
                </header>

                <section class="section">
                    <h2>Education</h2>
                    <p><strong>Associate of Applied Science in Programming and Software Development</strong> – LaGuardia Community College – <em>Feb 2026</em></p>
                    <ul>
                        <li>Coursework: OOP, Data Structures, Web Development, Mobile App Development, Database Management, Game Development</li>
                    </ul>
                    <p><strong>Planned Transfer: Bachelor of Science in Information Science</strong> – <em>CUNY School of Professional Studies – Expected Start: Spring 2026</em></p>
                    <p><strong>Software Engineering Fellowship:</strong> Pursuit – <em>Jan 2024</em></p>
                    <p><strong>Certifications:</strong> CompTIA A+, Google IT Support Professional Certificate</p>
                </section>

                <section class="section">
                <h2>Skills</h2>
                <div class="skills-list">
                    <div><strong>Programming Languages:</strong> Python, JavaScript, TypeScript, Swift, C#, Java, C++, PHP, Kotlin</div>
                    <div><strong>Frameworks and Libraries:</strong> .NET Core, .NET MAUI, SwiftUI, React, Node.js, Express.js, Bootstrap</div>
                    <div><strong>Databases and Query Languages:</strong> SQL (MySQL, PostgreSQL, SQLite, SQL Server)</div>
                    <div><strong>Software Engineering Practices:</strong> RESTful API design, Git/GitHub, Agile/Scrum, Jira, MVC architecture, CRUD operations</div>
                    <div><strong>UI / UX & Product Design:</strong> Figma, wireframing, prototyping, accessibility-first design</div>
                </div>
                </section>

                <section class="section">
                    <h2>Experience</h2>
                    <div class="job">
                        <h3>College Assistant – LaGuardia Community College</h3>
                        <span>Sept 2025 – Present</span>
                        <ul>
                        <li>Manage library computer lab operations, ensuring workstations and technology function efficiently.</li>
                        <li>Provide technical support to students and faculty, troubleshooting hardware, software, and network issues.</li>
                        <li>Assist professors with classroom technology and lab peripherals, enhancing learning experience.</li>
                        <li>Support daily lab operations, including opening/closing procedures and equipment organization.</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>Computer Lab Assistant – LaGuardia Community College</h3>
                        <span>Jan 2025 – Jun 2025</span>
                        <ul>
                        <li>Provided tech support for students/faculty, troubleshooting coding/software/hardware issues</li>
                        <li>Assisted peers with setup, reinforcing programming fundamentals</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>Associate Systems Engineer – NAKA Technologies</h3>
                        <span>Apr 2022 – Mar 2023</span>
                        <ul>
                        <li>Delivered Tier 1 technical support onsite & remotely</li>
                        <li>Managed OS imaging & hardware inventory for reliability</li>
                        <li>Collaborated with engineering teams for client requests</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>Helpdesk Technician – Fordham University School of Law</h3>
                        <span>Aug 2021 – Apr 2022</span>
                        <ul>
                        <li>Provided IT support for faculty, students, and staff under tight deadlines</li>
                        <li>Configured and deployed devices; managed asset inventory for 400+ users</li>
                        <li>Documented technical processes for knowledge sharing</li>
                        </ul>
                    </div>
                </section>
                <section class="section">
                    <h2>Projects</h2>
                     <div class="job">
                        <h3>Reflections – MySpace (iOS Mobile App)</h3>
                        <ul>
                        <li>Developed an iOS journaling and reflection app as part of the Reflections platform, focused on private emotional check-ins and daily entries.</li>
                        <li>Implemented SwiftUI-based UI, modular data models, and local state management to support journaling, mood tracking, and reflection prompts.</li>
                        <li>Designed the app with scalability in mind to support future integration of community and social features.</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>FlourSync POS — Team Lead / Database Administrator</h3>
                        <ul>
                        <li>Led 4-person team to build cross-platform POS app using C#, .NET MAUI, .NET Core, MySQL</li>
                        <li>Designed schema & REST API for real-time inventory/order tracking, reducing errors by 30%</li>
                        <li>Coordinated front-end UX/UI in Figma, delivering intuitive bakery staff interface</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>Vinny Ten Racing (ECommerce Web Application)</h3>
                        <ul>
                        <li>Built a full-stack PHP and MySQL web application featuring user authentication, product catalog, order processing, and admin functionality.</li>
                        <li>Implemented secure checkout flow using Stripe (test mode) and server-side validation for form handling and transactions.</li>
                        <li>Applied MVC-style organization, reusable components, and database constraints to ensure data integrity and maintainability.</li>
                        </ul>
                    </div>
                   
                </section>
            </div>
        </div>
    )
}