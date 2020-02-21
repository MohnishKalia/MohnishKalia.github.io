import React, { useState, useContext, useEffect } from 'react';
import Header from './components/Header'
import Switch from 'react-switch'
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
    <nav className="spiers navbar navbar-dark fixed-top col-md-2 d-none d-md-block p-0 vh-100">
        <div className="navbar navbar-dark d-flex justify-content-center">
            <a className="navbar-brand" href="#iam">Mohnish Kalia</a>
        </div>
        <div className="nav navbar-nav flex-column text-center">
            <a className="nav-item nav-link" href="#iam">I am...</a>
            <a className="nav-item nav-link" href="#cards">Past Projects</a>
            <div className="dropdown">
                <a className="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#/" role="button" aria-haspopup="true" aria-expanded="false">Proficiencies</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#backend">Backend</a>
                    <a className="dropdown-item" href="#webdevkit">Web Devkit</a>
                    <a className="dropdown-item" href="#scripting">Scripting</a>
                    <a className="dropdown-item" href="#softwaredev">Software Development</a>
                </div>
            </div>
            <a className="nav-item nav-link" href="#edu">Education</a>
            <a className="nav-item nav-link" href="#footer">Contact</a>
            <DarkModeForm />
        </div>
    </nav>

export const DarkModeForm = () => {
    const [elt] = useState(document.getElementById('theme') as HTMLLinkElement);
    const [dark, setDark] = useContext(ThemeContext);

    useEffect(() => {
        if (elt) elt.href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${dark ? 'darkly' : 'flatly'}/bootstrap.min.css`
    }, [dark, elt]);

    return (
        <form className="form-inline justify-content-center mt-auto">
            <span className="navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold">Dark Mode</span>
            <Switch onChange={theme => setDark(theme)} checked={dark} />
        </form>
    );
}

export default App;
