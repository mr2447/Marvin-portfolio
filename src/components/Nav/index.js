import React, { useEffect }from 'react';

function Nav(props) {
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
        setResumeSelected
    } = props;
    
    useEffect(()=> {
        document.title = currentSection.name
    }, [currentSection])

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header className="flex-row px-1">
            <h2>
                <a className="porfolio-title" href="/">
                    Marvin Ren's Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <span href="#about" onClick={() => 
                           [setContactSelected(false),
                            setAboutSelected(true),
                            setPortfolioSelected(false),
                            setResumeSelected(false)
                        ]
                        }>
                            About
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
                    <li className={`mx-1 ${!contactSelected && !aboutSelected && !resumeSelected && portfolioSelected && 'navActive'}`}>
                        <span onClick={()=> 
                            [
                                setContactSelected(false),
                                setAboutSelected(false),
                                setPortfolioSelected(true),
                                setResumeSelected(false)
                            ]
                        }>Portfolio</span>
                    </li>
                    <li className={`mx-1 ${!contactSelected && !aboutSelected && !portfolioSelected && resumeSelected && 'navActive'}`}>
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
        </header>
    )
}

export default Nav;