import React, { useState } from 'react'
import { DarkModeForm } from '../App';

const Header = () =>
    <nav id="navbar" className="spiers d-md-none navbar navbar-expand-md navbar-dark p-md-0 py-2 fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#iam">Mohnish Kalia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav navbar-right ml-auto">
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
            </div>
        </div>
    </nav>

export default Header;

export const ProgressBar = () => {
    const body = document.querySelector('body') as HTMLElement;

    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollPercent = (win: HTMLElement) => (win.scrollTop / (win.scrollHeight - win.clientHeight) * 100)

    body.setAttribute('data-offset', '80');
    window.onscroll = () => setScrollProgress(scrollPercent(document.documentElement));

    return (
        <div className="progress" style={{ height: "2px" }}>
            <div className="progress-bar bg-success" role="progressbar" style={{
                width: `${scrollProgress}%`,
                transitionDuration: "0s"
            }} aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    );
}
