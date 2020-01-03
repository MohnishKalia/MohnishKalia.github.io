import React, { Component } from 'react'
import { CardData } from './types'

export default class Card extends Component<{ data: CardData }> {

    headers = {
        repo: 'Repository',
        ref: 'Reference Notes',
        proj: 'Project'
    }

    render() {
        const { type, title, description, repoPath, notesPath } = this.props.data;
        return (
            <div className="card">
                <div className="card-header">{this.headers[type]}</div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    {repoPath && <a href={repoPath + "index.html"} className="card-link">Repo Page</a>}
                    {notesPath && <a href={notesPath} className="card-link">View Notes</a>}
                </div>
            </div>
        )
    }
}
