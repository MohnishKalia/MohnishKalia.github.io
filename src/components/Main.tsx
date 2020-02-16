import React, { useState } from 'react';
import { Container } from './templates/Bootstrap'
import Card, { CardData } from './templates/Card';
import Media, { MediaData } from './templates/Media';
import Featurette from './templates/Featurette'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUniversity, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Cards from '../data/cards';
import Profs from '../data/profs';

const Main = () =>
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

export const Construction = () =>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning! This site is under constuction.</strong> Content within is not reflective of finished product.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

export const CardDeck = () => {
    const [cards] = useState(Cards);

    const getDecks = () => {
        const decks: JSX.Element[][] = [[], []];

        for (const [i, card] of cards.entries()) {
            const index = Math.floor(i / 3);
            const cur = decks[index];
            cur.push(<Card data={card} key={card.title} />);
        }

        return decks.map((arr, i) =>
            <div className="col-md-12" key={i}>
                <div className={`card-deck${i > 0 ? ' mt-md-4' : ''}`}>
                    {arr}
                </div>
            </div>
        );
    };

    return (
        <div id="cards" className="row">
            {getDecks()}
        </div>
    );
}

export const Proficiencies = () => {
    const sections: { [id: string]: string } = {
        'backend': 'Backend',
        'webdevkit': 'Web Devkit',
        'scripting': 'Scripting',
        'softwaredev': 'Software Development',
    };

    const [profs] = useState(Profs);

    const getMedia = (filter: string) => profs
        .filter(media => media.type === filter)
        .map(media => <Media data={media} key={media.name} />);

    return (
        <div id="profs">
            {Object.keys(sections).map(key =>
                <Featurette key={key}>
                    <div id={key} className="row">
                        <Heading text={sections[key]} />
                        {getMedia(key)}
                    </div>
                </Featurette>
            )}
        </div>
    );
}

export const Education = () =>
    <div id="edu" className="row mb-4">
        <Heading text="Education" />
        <div className="col-md-12">
            <ul className="list-group list-group-flush">
                <Item heading="Brookfield Central High School" description="General studies and LAUNCH, 2020" icon={faGraduationCap} />
                <Item heading="Marquette University" description="COSC 2100 Data Structures and Algorithms" icon={faUniversity} />
            </ul>
        </div>
    </div>
