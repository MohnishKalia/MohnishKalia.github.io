import React, { Component } from 'react'
import Switch from 'react-switch'

export default class Header extends Component<{}, { checked: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked: boolean) {
        this.setState({ checked });
        const elt = document.getElementById('theme');
        if (elt) elt.remove();
        else this.createLight();
        //(document.getElementById('theme') as HTMLLinkElement).href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${checked ? 'darkly' : 'litera'}/bootstrap.min.css`
    }

    createLight() {
        const pop = document.createElement('link');
        pop.href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css';
        pop.id = 'theme';
        pop.rel = 'stylesheet';
        pop.crossOrigin = 'anonymous';
        document.querySelector('head')?.append(pop);
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-danger sticky-top mb-3">
                <div className="container">
                    <a className="navbar-brand" href="https://github.com/MohnishKalia">Mohnish Kalia</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navbar-right ml-auto">
                            <a className="nav-item nav-link" href="#cards">Past Projects</a>
                            <a className="nav-item nav-link" href="#iam">I am...</a>
                            <a className="nav-item nav-link" href="#profs">Proficiencies</a>
                            <a className="nav-item nav-link" href="#edu">Education</a>
                            <a className="nav-item nav-link" href="#footer">Contact</a>
                            <form className="form-inline">
                                <span className="navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold">Dark Mode</span>
                                <Switch onChange={this.handleChange} checked={this.state.checked} />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
