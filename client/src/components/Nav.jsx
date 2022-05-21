import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    )
}

export default Nav