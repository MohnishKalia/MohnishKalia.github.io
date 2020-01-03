import React, { Component } from 'react'

export default class Header extends Component {
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
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
