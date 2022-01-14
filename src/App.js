import React, {useState} from 'react'
import './assets/css/App.css';
import About from './components/About'
import ContactForm from './components/Contact'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  const [sections] =useState([
    {
      name: 'Portfolio',
    },
    {
      name: 'Resume'
    }
]);

  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [contactSelected, setContactSelected] = useState(false)
  const [aboutSelected, setAboutSelected] = useState(true)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)
  return (
    <div className="flex-wrapper">
      <Nav  
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
     <main>
      {contactSelected && <ContactForm></ContactForm>}
        
      {aboutSelected && <About></About>}
         
      {portfolioSelected && <Portfolio currentSection></Portfolio>}

      {resumeSelected && <Resume currentSection></Resume>}

     </main>
     <footer>
     <h2>Created by Marvin Ren with React</h2>
     <ul>
        <li><a href="mailto:marvin.ren@yahoo.com" rel="nofollow">Email</a></li>
        <li><a href="https://www.linkedin.com/in/marvin-ren-b35719105/" rel="nofollow"target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/mr2447" rel="nofollow" target="_blank">Github</a></li>
        <li><a href="https://stackoverflow.com/users/17896057/mrdal?tab=profile"  target="_blank" rel="nofollow">Stack Overflow</a></li>
      </ul>
     </footer>
    </div>
  );
}

export default App;
