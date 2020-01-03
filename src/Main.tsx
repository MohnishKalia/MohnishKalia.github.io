import React, { Component } from 'react'
import { CardData } from './types';
import Card from './Card';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Cards />
                <Extra />
            </div>
        )
    }
}

export class Cards extends Component {

    dsData: CardData = {
        type: 'repo',
        title: 'Data Structures',
        description: 'Assignment Java source code + book files for Data Structures @ Marquette University.',
        repoPath: '/DataStructures/',
        notesPath: 'https://docs.google.com/document/d/e/2PACX-1vQcWbUfrRR6N6h5BxdnzteHXayVCi9nv1hvHtMouggw2LDqTTiv7itdBcaWeXcZQRe8zkZ8B7KZuAT-/pub'
    };

    apcsaData: CardData = {
        type: 'repo',
        title: 'AP Computer Science A',
        description: 'Collection of Java samples and assignments used and created during my junior year computer science class.',
        repoPath: '/IndividualWork/',
        notesPath: 'https://docs.google.com/document/d/127zV5BPuIynxdtRpARvU-n5dMDOOjuRxIB88nCfP6ec/pub'
    }

    ctwData: CardData = {
        type: 'ref',
        title: 'Code the Way',
        description: 'Notes accrued throughout the CTW 2019 master class. This is more listed text than actual images.',
        notesPath: 'https://docs.google.com/document/d/e/2PACX-1vQWmHEEKGJrUIU6FswHLYe0v9bzLJQIW6P9e1f1FikISQrFTDie71-aBZKFFINakS8lNKYOu6ZJQb5C/pub'
    }

    render() {
        return (
            <div className="row card-deck">
                <Card data={this.dsData} />
                <Card data={this.apcsaData} />
                <Card data={this.ctwData} />
            </div>
        )
    }
}

export class Extra extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron my-4">
                    <h1 className="display-4">Hello, everybody!</h1>
                    <p className="lead">One of the most fun ways to manipulate a web page is by changing some key elements
                        </p>
                    <hr />
                    <p>If you wish, click the button below to change the tab's icon.</p>
                    <p className="lead">
                        <button id="switch" className="btn btn-primary btn-lg" disabled>Currently Under Construction</button>
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="alert alert-info h-100" role="alert">
                            <h4 className="alert-heading">If you can see this, my webpage worked!</h4>
                            <p>Just for fun, here is a testing link for <a href="https://latinlexicon.org/" target="_blank"
                                rel="noopener noreferrer" className="alert-link">Latin Lexicon</a> within the alert.</p>
                            <hr />
                            <p className="mb-0">
                                arma virumque canō, Trōiae quī prīmus ab ōrīs<br />
                                Ītaliam fātō profugus Lāvīniaque vēnit<br />
                                lītŏra, multum ille et terrīs iactātus et altō<br />
                                vī superum, saevae memorem Iūnōnis ob īram
                            </p>
                            <hr />
                            <p className="mb-0">Remember that the most elegant solutions are (sometimes) the best.<br />Working on the progress.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-sm-0">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-reponsive-item" src="https://www.youtube.com/embed/PsO6ZnUZI0g" title="stronger"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

