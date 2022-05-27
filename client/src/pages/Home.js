import HomePage from '../images/homepage.png'
import HomeDecor from '../images/homedecor.png'
const Home = () => {


    return (
        <div className='home-div'>
            <img className='home-image' src={HomePage} alt='homepage' width={600}/>
            <img className='home-decor' src={HomeDecor} alt='homedecor' width={400}/>
        </div>
    )
}

export default Home