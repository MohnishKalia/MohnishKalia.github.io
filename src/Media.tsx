import React, { Component } from 'react'

export type MediaData = {
    type: string,
    name: string,
    description?: string,
    confidence: 1 | 2 | 3 | 4 | 5
}

export default class Media extends Component<{ data: MediaData }> {

    render() {
        const { name, description, confidence } = this.props.data;
        return (
            <div className="media my-4 col-md-6">
                <img src={`./lib/${name}.png`} className="align-self-center mr-3" alt="Loading..." width="128" />
                <div className="media-body">
                    <h5 className="mt-0">{name}</h5>
                    {description && <p>{description}</p>}
                    <div className="progress" style={{ height: 30 }}>
                        <div className="progress-bar" style={{ width: `${confidence / 5 * 100}%` }} role="progressbar">{`${confidence}/5`}</div>
                    </div>
                </div>
            </div>
        )
    }
}