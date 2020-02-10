import React, { Component } from 'react';
import { Container } from './templates/Bootstrap'
import Card, { CardData } from './templates/Card';
import Media, { MediaData } from './templates/Media';
import Featurette from './templates/Featurette'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUniversity, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Cards from '../data/cards';
import Profs from '../data/profs';

const Main: React.FC = () =>
    <Container>
        <Featurette>
            <CardDeck />
        </Featurette>
        <Proficiencies />
        <Education />
    </Container >

export default Main;

export const Heading: React.FC<{ text: string }> = ({ text }) => <h3 className="col-md-12">{text}</h3>

export const Item: React.FC<{ heading: string, description: string, icon: IconDefinition }> = ({ heading, description, icon }) =>
    <li className="list-group-item">
        <div className="row">
            <div className="col-9">
                <h5 className="mb-1">{heading}</h5>
                <p className="mb-1 text-muted">{description}</p>
            </div>
            <div className="col-3 text-right">
                <FontAwesomeIcon icon={icon} size={"4x"} fixedWidth />
            </div>
        </div>
    </li>

export const Construction: React.FC = () =>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning! This site is under constuction.</strong> Content within is not reflective of finished product.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

export class CardDeck extends Component<{}, { cards: CardData[] }> {
    constructor(props: {}) {
        super(props);
        this.state = { cards: Cards };
    }

    getDecks() {
        const { cards } = this.state;
        const decks: JSX.Element[][] = [[], []];
        for (const [i, card] of cards.entries()) {
            const index = Math.floor(i / 3);
            const cur = decks[index];
            cur.push(<Card data={card} key={card.title} />);
        }
        return decks.map((arr, i) => <div className="col-md-12" key={i}><div className={`card-deck${i > 0 ? ' mt-md-4' : ''}`}>{arr}</div></div>);
    }

    render() {
        return (
            <div id="cards" className="row">
                {this.getDecks()}
            </div>
        )
    }
}



export class Proficiencies extends Component<{}, { profs: MediaData[] }> {
    constructor(props: {}) {
        super(props);
        this.state = { profs: Profs };
    }

    getMedia(filter: string) {
        return this.state.profs.filter(media => media.type === filter).map(media => <Media data={media} key={media.name} />);
    }

    render() {
        const sections: { [id: string]: string } = {
            'backend': 'Backend',
            'webdevkit': 'Web Devkit',
            'scripting': 'Scripting',
            'softwaredev': 'Software Development',
        }
        return (
            <div id="profs">
                {Object.keys(sections).map(key =>
                    <Featurette key={key}>
                        <div id={key} className="row">
                            <Heading text={sections[key]} />
                            {this.getMedia(key)}
                        </div>
                    </Featurette>
                )}
            </div>
        )
    }
}

export const Education: React.FC = () =>
    <div id="edu" className="row mb-4">
        <Heading text="Education" />
        <div className="col-md-12">
            <ul className="list-group list-group-flush">
                <Item heading="Brookfield Central High School" description="General studies and LAUNCH, 2020" icon={faGraduationCap} />
                <Item heading="Marquette University" description="COSC 2100 Data Structures and Algorithms" icon={faUniversity} />
            </ul>
        </div>
    </div>

export const Extra: React.FC = () =>
    <div id="extra">
        <div className="jumbotron my-4">
            <h1 className="display-4">Hello, everybody!</h1>
            <p className="lead">
                One of the most fun ways to manipulate a web page is by changing some key elements
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