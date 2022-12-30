import About from './About/About';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Qualification from './Qualification/Qualification';
import Service from './Services/Service';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Qualification/>
        <Service/>
      </main>
    </>
  );
}

export default App;
