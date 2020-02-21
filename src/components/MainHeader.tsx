import React from 'react';
import { DarkModeForm } from '../Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faChalkboardTeacher, faLaptopCode,faIdCard, faUserCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';

const MainHeader = () =>
    <nav className="spiers navbar navbar-dark fixed-top col-md-2 d-none d-md-block p-0 vh-100">
        <div className="navbar navbar-dark d-flex justify-content-center">
            <a className="navbar-brand" href="#iam">Mohnish Kalia</a>
        </div>
        <div className="navbar-nav d-flex flex-column text-center justify-content-around" style={{ height: 'calc(100% - 70px)' }}>
            <NavItem icon={faBookmark} href="#iam" text="I am..." />
            <NavItem icon={faLaptopCode} href="#cards" text="Past Projects" />
            <div className="dropdown">
                <FontAwesomeIcon icon={faIdCard} size={'3x'} />
                <a className="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#/" role="button" aria-haspopup="true" aria-expanded="false">Proficiencies</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#backend">Backend</a>
                    <a className="dropdown-item" href="#webdevkit">Web Devkit</a>
                    <a className="dropdown-item" href="#scripting">Scripting</a>
                    <a className="dropdown-item" href="#softwaredev">Software Development</a>
                </div>
            </div>
            <NavItem icon={faChalkboardTeacher} href="#edu" text="Education" />
            <NavItem icon={faUserCircle} href="#footer" text="Contact" />
            <DarkModeForm />
        </div>
    </nav>

export default MainHeader;

export const NavItem: React.FC<{ icon: IconDefinition, href: string, text: string }> = ({ icon, href, text }) =>
    <div className="position-relative">
        <FontAwesomeIcon icon={icon} size={'3x'} />
        <a className="nav-item nav-link stretched-link" href={href}>{text}</a>
    </div>