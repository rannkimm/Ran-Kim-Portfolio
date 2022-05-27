import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='app-div'>
      <Nav />
      <Routes>
        <Route path='Ran-Kim-Portfolio/' element={<Home/>}/>
        <Route path='Ran-Kim-Portfolio/aboutme' element={<AboutMe/>}/>
        <Route path='Ran-Kim-Portfolio/projects' element={<Projects/>}/>
      </Routes>
      <Contact />

      
    </div>
  );
}

export default App;
