import battleship from '../images/battleship.png'
import journal from '../images/journal.png'
import mindify from '../images/mindify.png'

const Projects = () => {
    return (
        <div className='projects-div'>
            <div className='battleship-div'>
                <img src={battleship} alt="battleship" width='410'/>
                <div>
                    <a target='_blank' rel="noopener noreferrer" href="https://rans-battleship.surge.sh/">Live Site</a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/rannkimm/BattleShip-Game">Code</a>
                </div>
            </div>
            <div className='journal-div'>
                <img src={journal} alt="journal" width='400'/>
                <div>
                    <a target='_blank' rel="noopener noreferrer" href="https://pacific-island-05171.herokuapp.com/">Live Site</a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/rannkimm/journal">Code</a>
                </div>
            </div>
            <div className='mindify-div'>
                <img src={mindify} alt="mindify" width='400'/>
                <div>
                    <a target='_blank' rel="noopener noreferrer" href="https://peaceful-falls-00710.herokuapp.com/">Live Site</a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/SEIfeoluwa/Mindify_Frontend">Code- Frontend</a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/chazcurlee/back-end-prj3">Code- Backend</a>
                </div>
            </div>

        </div>
    )
}

export default Projects


// details of project, link to github, deployed site, description of project?
// use carousel from bootstrap?
// use backend to share project?