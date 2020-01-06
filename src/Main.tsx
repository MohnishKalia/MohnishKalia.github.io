import React, { Component } from 'react';
import Card, { CardData } from './Card';
import Media, { MediaData } from './Media';

const Main: React.FC = () =>
    <div>
        <Construction />
        <Cards />
        <Iam />
        <Proficiencies />
        <Education />
        <Extra />
    </div>

export default Main;

export const Heading: React.FC<{ text: string }> = ({ text }) => <h3 className="col-md-12">{text}</h3>

export const Item: React.FC<{ heading: string, description: string }> = ({ heading, description }) =>
    <li className="list-group-item">
        <h5 className="mb-1">{heading}</h5>
        <p className="mb-1 text-muted">{description}</p>
    </li>

export const Construction: React.FC = () =>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning! This site is under constuction.</strong> Content within is not reflective of finished product.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

export class Cards extends Component<{}, { cards: CardData[] }> {

    constructor(props: {}) {
        super(props);
        this.state = { cards: [] };
    }

    async componentDidMount() {
        const res = await fetch('./cards.json');
        const cards = await res.json() as CardData[];
        this.setState({ cards });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div id="cards" className="card-deck">
                        {this.state.cards.map(card => <Card data={card} key={card.title} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export const Iam: React.FC = () =>
    <div id="iam" className="row my-4">
        <Heading text="I Am..." />
        <div className="col-md-12">
            <ul className="list-group list-group-flush">
                <Item heading="17 years old" description="Looking towards college and a career" />
                <Item heading="Full-stack developer" description="Hands on with MVC, MERN" />
            </ul>
        </div>
    </div>

export class Proficiencies extends Component<{}, { profs: MediaData[] }> {
    constructor(props: {}) {
        super(props);
        this.state = { profs: [] };
    }

    async componentDidMount() {
        const res = await fetch('./profs.json');
        const profs = await res.json() as MediaData[];
        this.setState({ profs });
    }

    getMedia(filter: string) {
        return this.state.profs.filter(media => media.type === filter).map(media => <Media data={media} key={media.name} />);
    }

    render() {
        const be = 'backend', wd = 'webdevkit', sc = 'scripting';
        return (
            <div id="profs">
                <div id={be} className="row">
                    <Heading text="Backend" />
                    {this.getMedia(be)}
                </div>
                <div id={wd} className="row">
                    <Heading text="Web Devkit" />
                    {this.getMedia(wd)}
                </div>
                <div id={sc} className="row">
                    <Heading text="Scripting" />
                    {this.getMedia(sc)}
                </div>
            </div>
        )
    }
}

export const Education: React.FC = () =>
    <div id="edu" className="row">
        <Heading text="Education" />
        <div className="col-md-12">
            <ul className="list-group list-group-flush">
                <Item heading="Brookfield Central High School" description="General studies and LAUNCH, 2020" />
                <Item heading="Marquette University" description="COSC 2100 Data Structures and Algorithms" />
            </ul>
        </div>
    </div>

export const Extra: React.FC = () =>
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