import { Link } from "react-router-dom";
import "./NavigationBar.css"

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/createCharacter">Create Characters</Link>
                <Link to="/charList">Character List</Link>
            </div>
        </nav>
    )
}

export default NavigationBar;