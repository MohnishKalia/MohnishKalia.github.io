import React from 'react'
import { DarkModeForm } from '../Utils';

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
