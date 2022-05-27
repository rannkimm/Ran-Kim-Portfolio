import { Link } from "react-router-dom"
import HomeImg from '../images/homepostit.png'
import AboutMeImg from '../images/aboutmepostit.png'
import ProjectsImg from '../images/projectspostit.png'

const Nav = () => {
    return (
        <div className="nav-div">
            <Link to='/'><img className="nav home-nav" src={HomeImg} alt='home' width={150}/></Link>
            <Link to='/aboutme'><img className="nav aboutme-nav" src={AboutMeImg} alt='aboutme' width={150}/></Link>
            <Link to='/projects'><img className="nav projects-nav" src={ProjectsImg} alt='projects' width={150}/></Link>
        </div>
    )
}

export default Nav