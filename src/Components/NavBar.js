import './NavBar.css'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h3>Winterbelle.dev</h3>
            <nav>
                <ul className="nav-bar-links">
                    <li className="link"><a href='/'>Home</a></li>
                    <li className="link"><a href='#about'>About</a></li>
                    <li className="link"><a href='#projects'>Projects</a></li>
                    <li className="link"><a href='#resume'>Resume</a></li>
                    <li className="link"><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}