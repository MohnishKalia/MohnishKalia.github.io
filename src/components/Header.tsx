import React, { Component } from 'react'
import { Container } from './templates/Bootstrap'
import Switch from 'react-switch'

export default class Header extends Component<{}, { checked: boolean, scrollProgress: number }> {
    constructor(props: {}) {
        super(props);
        this.state = { checked: matchMedia('(prefers-color-scheme: dark), (prefers-color-scheme: no-preference)').matches, scrollProgress: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked: boolean) {
        this.setState({ checked });
        const elt = document.getElementById('theme') as HTMLLinkElement;
        elt.href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${checked ? 'darkly' : 'flatly'}/bootstrap.min.css`;
    }

    scrollPercent(win: HTMLElement) {
        return (win.scrollTop / (win.scrollHeight - win.clientHeight) * 100);
    }

    componentDidMount() {
        const body = document.querySelector('body') as HTMLElement;
        const navbar = document.getElementById('navbar') as HTMLElement;
        body.setAttribute('data-offset', String(navbar.offsetHeight + 15));
        const win = document.documentElement;
        // setInterval(() => this.setState({ scrollProgress: this.scrollPercent(win) }), 50);
        window.onscroll = () => this.setState({ scrollProgress: this.scrollPercent(win) });
    }

    render() {
        return (
            <div className="mb-3 sticky-top">
                <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-danger">
                    <Container>
                        <a className="navbar-brand" href="#">Mohnish Kalia</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav navbar-right ml-auto">
                                <a className="nav-item nav-link" href="#cards">Past Projects</a>
                                <a className="nav-item nav-link" href="#iam">I am...</a>
                                <div className="dropdown">
                                    <a className="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Proficiencies</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#backend">Backend</a>
                                        <a className="dropdown-item" href="#webdevkit">Web Devkit</a>
                                        <a className="dropdown-item" href="#scripting">Scripting</a>
                                    </div>
                                </div>
                                <a className="nav-item nav-link" href="#edu">Education</a>
                                {/* <a className="nav-item nav-link" href="#extra">...</a> */}
                                <a className="nav-item nav-link" href="#footer">Contact</a>
                                <form className="form-inline">
                                    <span className="navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold">Dark Mode</span>
                                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                                </form>
                            </div>
                        </div>
                    </Container>
                </nav>
                <div className="progress" style={{ height: "2px" }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{
                        width: `${this.state.scrollProgress}%`,
                        transitionDuration: "0.2s"
                    }} aria-valuenow={this.state.scrollProgress} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
            </div>
        )
    }
}
