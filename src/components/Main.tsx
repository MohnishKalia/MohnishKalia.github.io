import React, { useState } from 'react';
import Card from './templates/Card';
import Media from './templates/Media';
import Featurette from './templates/Featurette'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUniversity, faLayerGroup, faUser, faMicrochip, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Cards from '../data/cards';
import Profs from '../data/profs';

const Main = () =>
    <div className="col-md-9 ml-sm-auto col-lg-10 px-0">
        <Iam />
        <div className="container">
            <Featurette>
                <CardDeck />
            </Featurette>
            <Proficiencies />
            <Education />
            <Footer />
        </div>
    </div>


export default Main;

export const Iam = () =>
    <div id="iam" className="carousel slide mb-5" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#iam" data-slide-to={0} className="active" />
            <li data-target="#iam" data-slide-to={1} />
            <li data-target="#iam" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
            <CarouselItem heading="17 years old" description="Aiming towards college and a career" icon={faUser} active={true} />
            <CarouselItem heading="Full-stack developer" description="Hands on with MVC, MERN" icon={faLayerGroup} active={false} />
            <CarouselItem heading="General tech enthusiast" description="Mobile, Embedded, RasPi" icon={faMicrochip} active={false} />
            <a className="carousel-control-prev" href="#iam" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#iam" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

export const CarouselItem: React.FC<{ img: string, heading: string, description: string, icon: IconDefinition, active: boolean }> = ({ img, heading, description, icon, active }) =>
    <div className={`carousel-item${active ? " active" : ""}`} style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }}>
        <div className="carousel-caption">
            <h1 className="font-weight-bold">{heading}</h1>
            <p className="lead my-3">{description}</p>
            <FontAwesomeIcon icon={icon} size={"4x"} fixedWidth />
        </div>
    </div>

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
