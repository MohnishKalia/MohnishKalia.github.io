import React, { Component, useState } from 'react'
import Card, { CardData } from './Card';
import Media, { MediaData } from './Media'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Cards />
                <Iam />
                <Proficiencies />
                <Education />
                <Extra />
            </div>
        )
    }
}

export const Heading: React.FC<{ text: string }> = ({ text }) => <h3 className="col-md-12">{text}</h3>

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
            <div className="row">
                <div id="cards" className="card-deck">
                    <Card data={this.dsData} />
                    <Card data={this.apcsaData} />
                    <Card data={this.ctwData} />
                </div>
            </div>
        )
    }
}

export const Iam: React.FC = () =>
    <div id="iam" className="row">
        <h1>I Am... PLACEHOLDER</h1>
    </div>

export class Proficiencies extends Component<{}, { profs: MediaData[] }> {
    constructor(props: {}) {
        super(props);
        this.state = { profs: [] };
    }

    // profs: MediaData[] = [{
    //     "type": "backend",
    //     "name": "Java",
    //     "description": "Data structures, algorithms, business logic design",
    //     "confidence": 4
    // },
    // {
    //     "type": "backend",
    //     "name": "CSharp",
    //     "description": "MVC with .NET and EFCore",
    //     "confidence": 3
    // },
    // {
    //     "type": "webdevkit",
    //     "name": "Javascript",
    //     "description": "DOM interaction, REST APIs, async/await, Browser API",
    //     "confidence": 5
    // },
    // {
    //     "type": "webdevkit",
    //     "name": "Node.js",
    //     "description": "API requests, API design, npm, full-stack JSE + deployment",
    //     "confidence": 3
    // },
    // {
    //     "type": "webdevkit",
    //     "name": "React",
    //     "description": "This page is made with React! Working out hooks",
    //     "confidence": 2
    // },
    // {
    //     "type": "webdevkit",
    //     "name": "Typescript",
    //     "description": "Static typing made simple, 2nd nature from JS background",
    //     "confidence": 4
    // },
    // {
    //     "type": "scripting",
    //     "name": "Python",
    //     "description": "Starting with web scrapers, file manipulation, algorithms",
    //     "confidence": 2
    // },
    // {
    //     "type": "scripting",
    //     "name": "Coming Soon",
    //     "description": "This is not ready to be revealed yet...",
    //     "confidence": 5
    // }]

    async componentDidMount() {
        const res = await fetch('./profs.json');
        const profs = await res.json() as MediaData[];
        this.setState({ profs });
    }

    getMedia(filter: string) {
        const items: JSX.Element[] = [];
        if (this.state.profs)
            for (const med of this.state.profs.filter(media => media.type === filter))
                items.push(<Media data={med} key={med.name} />)
        return items;
    }

    render() {
        return (
            <div id="profs">
                <div id="backend" className="row">
                    <Heading text="Backend" />
                    {this.getMedia('backend')}
                </div>
                <div id="webdevkit" className="row">
                    <Heading text="Web Devkit" />
                    {this.getMedia('webdevkit')}
                </div>
                <div id="scripting" className="row">
                    <Heading text="Scripting" />
                    {this.getMedia('scripting')}
                </div>
            </div>
        )
    }
}

export const Education: React.FC = () =>
    <div id="edu" className="row">
        <h1>Education PLACEHOLDER</h1>
    </div>

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

