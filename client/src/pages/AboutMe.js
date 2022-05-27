import AboutMeImg from '../images/aboutme.png'
import Resume from '../images/resume.pdf'
import TechImg from '../images/tech.png'

const AboutMe = () => {
    return (
        <div className='aboutme-div'>
            <div className='resume-div'>
                <img src={AboutMeImg} alt="aboutme" width={600}/>
                <a href={Resume}>Resume</a>
            </div>
            <div className='techimg-div'>
                <img src={TechImg} alt="aboutme" width={250}/>
                
            </div>
        </div>
    )
}

export default AboutMe