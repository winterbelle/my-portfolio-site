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
                    <p><strong>Planned Transfer:</strong> Bachelor of Science in Information Science – <em>CUNY SPS (Expected Spring 2026 Start)</em></p>
                    <p><strong>Software Engineering Fellowship:</strong> Pursuit – <em>Jan 2024</em></p>
                    <p><strong>Certifications:</strong> CompTIA A+, Google IT Support Professional Certificate</p>
                </section>

                <section class="section">
                <h2>Skills</h2>
                <div class="skills-list">
                    <div><strong>Languages:</strong> C++, C#, Java, JavaScript, PHP, Swift, Kotlin, SQL, HTML, CSS</div>
                    <div><strong>Frameworks/Tools:</strong> React, Node.js, .NET Core, .NET MAUI, Express.js, Bootstrap</div>
                    <div><strong>Databases:</strong> MySQL, PostgreSQL, SQLite, SQL Server</div>
                    <div><strong>Development Practices:</strong> REST APIs, Git/GitHub, Agile, Jira</div>
                    <div><strong>Design & UX/UI:</strong> Figma, Wireframing, Prototyping, Accessibility-first design</div>
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
                        <h3>FlourSync POS (Team Lead/DB Admin)</h3>
                        <ul>
                        <li>Led 4-person team to build cross-platform POS app using C#, .NET MAUI, .NET Core, MySQL</li>
                        <li>Designed schema & REST API for real-time inventory/order tracking, reducing errors by 30%</li>
                        <li>Coordinated front-end UX/UI in Figma, delivering intuitive bakery staff interface</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>E-Commerce Website for Local Business (In Progress)</h3>
                        <ul>
                        <li>Responsive storefront with product catalog, shopping cart, secure checkout using JavaScript, HTML, CSS</li>
                        <li>Managing client communication and proposals aligned with business goals</li>
                        <li>Expected to support 100+ SKUs with automated inventory updates</li>
                        </ul>
                    </div>
                    <div class="job">
                        <h3>JobScript (Hackathon Finalist)</h3>
                        <ul>
                        <li>Developed “Tinder for Jobs” web app with HTML, CSS, JavaScript, OpenAI API</li>
                        <li>Implemented resume generator & animated landing page</li>
                        <li>Finalist among 10 competing teams</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}