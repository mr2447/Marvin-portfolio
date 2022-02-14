import React, { useEffect, useState }from 'react';
import './nav.css'
import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'

function Nav(props) {
// DARK MODE FUNCTION 
    const [active, setActive] = useState(false)

    const handleChangeActive = () => {
        // background to dark
        const element=document.body;
        element.classList.toggle("dark-mode")
        setActive((previousStar)=> {
            return !previousStar
        })
    }

    function darkMode() {
    // element and classList style found in index.css

    }

// NAVBAR FUNCTIONS
    const {
        sections = [],
        setCurrentSection,
        currentSection,
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
    } = props;
    
    useEffect(()=> {
        document.title = currentSection.name
    }, [currentSection])

    return (
        <header className="navBarContainer flex-row px-1"> 
            <h2>
                <a className="porfolio-title" href="/">
                    Marvin Ren's Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row ">
                    <li className={`mx-2 ${!resumeSelected && !portfolioSelected && !contactSelected && aboutSelected && 'navActive'}`}>
                        <span href="#about" onClick={() => 
                        
                        [setContactSelected(false),
                            setAboutSelected(true),
                            setPortfolioSelected(false),
                            setResumeSelected(false)
                        ]
                        }>
                            Home
                        </span>
                    </li>
                    <li className={`mx-2 ${!aboutSelected && !resumeSelected && !portfolioSelected && contactSelected && 'navActive'}`}>
                        <span onClick={()=> 
                            [setContactSelected(true),
                            setAboutSelected(false),
                            setPortfolioSelected(false),
                            setResumeSelected(false)
                            ]
                        }>Contact</span>
                    </li>
                    <li className={`mx-2 ${!contactSelected && !aboutSelected && !resumeSelected && portfolioSelected && 'navActive'}`}>
                        <span onClick={()=> 
                            [
                                setContactSelected(false),
                                setAboutSelected(false),
                                setPortfolioSelected(true),
                                setResumeSelected(false)
                            ]
                        }>Portfolio</span>
                    </li>
                    <li className={`mx-2 ${!contactSelected && !aboutSelected && !portfolioSelected && resumeSelected && 'navActive'}`}>
                        <span onClick={()=> 
                            [
                                setContactSelected(false),
                                setAboutSelected(false),
                                setPortfolioSelected(false),
                                setResumeSelected(true)
                            ]
                        }>Resume</span>
                    </li>
                    
                </ul>
            </nav>
            <div className="spacer">
            </div>
            <div className="toggle-container">
                {active ? (
                    <BsSun className="active" onClick={()=> handleChangeActive()}/>
                ) : (
                    <BiMoon 
                        className="inactive" 
                        onClick={()=> 
                            handleChangeActive()
                            
                        }/>
                )
                }    
            </div>
        </header>
        
    )
}

export default Nav;