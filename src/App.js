import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skill from './components/skills/skill';
import Service  from './components/services/service';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollUp.js/scrollUp';
import Work from './components/work/work';
function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skill />
        <Service />
        <Qualification />
        <Work/>
        <Contact />
        <ScrollUp/>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
