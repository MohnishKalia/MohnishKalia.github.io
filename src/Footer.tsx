import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="border-top pt-3 my-3">
                <div className="row">
                    <div className="col-sm-6">
                        <h3 className="text-uppercase">Mohnish Kalia</h3>
                        <p className="text-muted">Please check the links for further information.<br />Do not hesitate to reachout.</p>
                        <p className="text-muted">My professional email is: <a href="mailto:mohnish.kalia@gmail.com">mohnish.kalia@gmail.com</a></p>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="text-uppercase">Helpful Resources</h3>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://beastscouttest.netlify.com">BEAST Scouting</a></li>
                            <li><a className="text-muted" href="https://shiffman.net">Helpful JS Teacher</a></li>
                            <li><a className="text-muted" href="https://github.com/MohnishKalia">GitHub Profile</a></li>
                            <li><a className="text-muted"
                                href="https://docs.oracle.com/en/java/javase/13/docs/api/index.html">Java 13 API</a>
                            </li>
                            <li><a className="text-muted" href="https://developer.mozilla.org/en-US/docs/Web">MDN</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12">
                        <p className="text-muted">This website and all content authored by Mohnish Kalia within is open source.</p>
                    </div>
                </div>
            </footer>
        )
    }
}
