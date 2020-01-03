import React, { Component } from 'react'
import Switch from 'react-switch'

export default class Header extends Component<{}, { checked: boolean }> {
    constructor() {
        super({});
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked: boolean) {
        this.setState({ checked });
        (document.getElementById('theme') as HTMLLinkElement).href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${checked ? 'darkly' : 'litera'}/bootstrap.min.css`
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-danger sticky-top mb-3">
                <div className="container">
                    <a className="navbar-brand" href="#">Mohnish Kalia</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navbar-right ml-auto">
                            <a className="nav-item nav-link" href="/DataStructures">Data Structures</a>
                            <a className="nav-item nav-link" href="/IndividualWork">AP Computer Science A</a>
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
