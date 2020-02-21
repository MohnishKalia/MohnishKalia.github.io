import React, { useState, useContext } from 'react';
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

export const DarkModeForm = () => {
    const elt = document.getElementById('theme') as HTMLLinkElement;

    const [theme, setTheme] = useState(matchMedia('(prefers-color-scheme: dark)').matches);
    const [, setContext] = useContext(ThemeContext);

    const changeTheme = (dark: boolean) => { if (elt) elt.href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${dark ? 'darkly' : 'flatly'}/bootstrap.min.css` }

    changeTheme(theme);

    return (
        <form className="form-inline">
            <span className="navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold">Dark Mode</span>
            <Switch onChange={theme => {
                setTheme(theme);
                changeTheme(theme);
                setContext(theme);
            }} checked={theme} />
        </form>
    );
}

export default App;
