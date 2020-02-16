import React, { useState, useContext } from 'react'
import { Container } from './templates/Bootstrap'
import Switch from 'react-switch'
import tech from '../images/tech.jpg'
import fullstack from '../images/fullstack.jpg'
import bc from '../images/bc.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faUser, faMicrochip, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../ThemeContext'

const Header = () =>
    <div>
        <div className="fixed-top">
            <nav id="navbar" className="navbar navbar-expand-md navbar-dark">
                <Container>
                    <a className="navbar-brand" href="#">Mohnish Kalia</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navbar-right ml-auto">
                            <a className="nav-item nav-link" href="#iam">I am...</a>
                            <a className="nav-item nav-link" href="#cards">Past Projects</a>
                            <div className="dropdown">
                                <a className="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Proficiencies</a>
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
                </Container>
            </nav>
            <ProgressBar />
        </div>
        <Iam />
    </div>

export default Header;

export const DarkModeForm = () => {
    const elt = document.getElementById('theme') as HTMLLinkElement;

    const [theme, setTheme] = useState(matchMedia('(prefers-color-scheme: dark)').matches);
    const [, setContext] = useContext(ThemeContext);

    const changeTheme = (dark: boolean) => elt.href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${dark ? 'darkly' : 'flatly'}/bootstrap.min.css`

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

export const ProgressBar = () => {
    const body = document.querySelector('body') as HTMLElement;

    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollPercent = (win: HTMLElement) => (win.scrollTop / (win.scrollHeight - win.clientHeight) * 100)

    body.setAttribute('data-offset', '80');
    window.onscroll = () => setScrollProgress(scrollPercent(body));

    return (
        <div className="progress" style={{ height: "2px" }}>
            <div className="progress-bar bg-success" role="progressbar" style={{
                width: `${scrollProgress}%`,
                transitionDuration: "0s"
            }} aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    );
}

export const Iam = () =>
    <div id="iam" className="carousel slide mb-5" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#iam" data-slide-to={0} className="active" />
            <li data-target="#iam" data-slide-to={1} />
            <li data-target="#iam" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
            <CarouselItem heading="17 years old" description="Aiming towards college and a career" icon={faUser} active={true} img={bc} />
            <CarouselItem heading="Full-stack developer" description="Hands on with MVC, MERN" icon={faLayerGroup} active={false} img={fullstack} />
            <CarouselItem heading="General tech enthusiast" description="Mobile, Embedded, Consoles, RasPi" icon={faMicrochip} active={false} img={tech} />
            <a className="carousel-control-prev" href="#iam" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#iam" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

export const CarouselItem: React.FC<{ img: string, heading: string, description: string, icon: IconDefinition, active: boolean }> = ({ img, heading, description, icon, active }) =>
    <div className={`carousel-item${active ? " active" : ""}`} style={{ backgroundImage: `url(${img})` }}>
        <div className="carousel-caption">
            <h1 className="font-weight-bold">{heading}</h1>
            <p className="lead my-3">{description}</p>
            <FontAwesomeIcon icon={icon} size={"4x"} fixedWidth />
        </div>
    </div>
