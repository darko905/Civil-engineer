import About from './About/About';
import './App.css';
import Contact from './Contacts/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Qualification from './Qualification/Qualification';
import Service from './Services/Service';
import Stats from './Stats/Stats';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Qualification/>
        <Service/>
        <Stats/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
