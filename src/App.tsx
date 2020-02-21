import React, { useState } from 'react';
import Header, { DarkModeForm } from './components/Header'
import Main from './components/Main'
import './App.css';
import ThemeContext from './ThemeContext'

const App = () => {
    const themeHook = useState(matchMedia('(prefers-color-scheme: dark)').matches);
    return (
        <ThemeContext.Provider value={themeHook}>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <MainHeader />
                    <Main />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export const MainHeader = () =>
    <nav className="spiers col-md-2 p-0 d-none d-md-block bg-dark sidebar">
        <div className="sidebar-sticky">
            <div className="navbar navbar-dark d-flex justify-content-center">
                <a className="navbar-brand" href="#iam">Mohnish Kalia</a>
            </div>
            <div className="nav flex-column">
                <a className="nav-link" href="#iam">I am...</a>
                <a className="nav-link" href="#cards">Past Projects</a>
                <a className="nav-link" href="#profs">Proficiencies</a>
                <a className="nav-link" href="#edu">Education</a>
                <a className="nav-link" href="#footer">Contact</a>
                <DarkModeForm />
            </div>
        </div>
    </nav>

export default App;
