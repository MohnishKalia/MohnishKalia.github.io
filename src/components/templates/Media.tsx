import React, { Component } from 'react'
import Icon from '../../images/Logos'

export type MediaData = {
    type: string,
    name: string,
    description?: string,
    confidence: 1 | 2 | 3 | 4 | 5
}

const Media: React.FC<{ data: MediaData }> = ({ data: { name, description, confidence } }) =>
    <div className="media my-4 col-md-6">
        <Icon name={name} className="d-flex align-self-center justify-content-center mr-3" width="128px" />
        <div className="media-body">
            <h5 className="mt-0">{name}</h5>
            {description && <p>{description}</p>}
            <div className="progress" style={{ height: 30 }}>
                <div className="progress-bar" style={{ width: `${confidence / 5 * 100}%` }} role="progressbar">{`${confidence}/5`}</div>
            </div>
        </div>
    </div>

export default Media;
