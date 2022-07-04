import './App.css';
//imported components
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Project from './Components/Project';
import Service from './Components/Service';

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Service/>
        <Project/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
