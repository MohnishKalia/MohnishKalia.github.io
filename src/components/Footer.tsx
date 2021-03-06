import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons'

const Footer = () =>
    <footer id="footer" className="pt-md-4 pb-4">
        <div className="row mx-3 mx-md-0">
            <BrandItem icon={faGithub} text={"MohnishKalia"} link={"https://github.com/MohnishKalia"} />
            <BrandItem icon={faEnvelopeOpenText} text={"mohnish.kalia@gmail.com"} link={"mailto:mohnish.kalia@gmail.com"} />
            <BrandItem icon={faLinkedin} text={"Mohnish Kalia"} link={"https://www.linkedin.com/in/mohnishkalia/"} />
        </div>
    </footer>

export default Footer;

export const BrandItem: React.FC<{ icon: IconDefinition, text: string, link: string }> = ({ icon, text, link }) =>
    <div className="col-md my-2 my-md-0 text-md-center text-muted">
        <FontAwesomeIcon icon={icon} className="mr-3" size="2x" />
        <a href={link} className="h5 stretched-link text-reset text-decoration-none">{text}</a>
    </div>
