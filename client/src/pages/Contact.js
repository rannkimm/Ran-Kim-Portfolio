import ContactMe from '../images/contactme.png'

const Contact = () => {
    return (
        <div className='contact-div'>
            <img  src={ContactMe} alt="contactme" width={300}/>
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/rannkimm">GitHub</a>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/rankim/">LinkedIn</a>
        </div>
    )
}

export default Contact