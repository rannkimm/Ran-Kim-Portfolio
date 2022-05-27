import AboutMeImg from '../images/aboutme.png'
import Resume from '../images/resume.pdf'
import TechImg from '../images/tech.png'

const AboutMe = () => {
    return (
        <div className='aboutme-div'>
            <div className='resume-div'>
                <img className='aboutme-img' src={AboutMeImg} alt="aboutme" width={600}/>
                <a className='resume-link' href={Resume}>Resume</a>
            </div>
            <div className='techimg-div'>
                <img className='tech-img' src={TechImg} alt="aboutme" width={250}/>
                
            </div>
        </div>
    )
}

export default AboutMe