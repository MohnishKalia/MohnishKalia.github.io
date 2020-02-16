import React from 'react'
import ThemeContext from '../../ThemeContext';

export type CardData = {
    type: "repo" | "ref",
    title: string
    description: string,
    repo?: string,
    notesPath?: string
}

const Card: React.FC<{ data: CardData }> = ({ data: { type, title, description, repo, notesPath } }) => {
    const headers = {
        repo: 'Repository',
        ref: 'Reference Notes',
        proj: 'Project'
    }

    const [theme] = React.useContext(ThemeContext);

    return (
        <>
            <div className="card">
                <div className="card-header">{headers[type]}</div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    {repo && <a href="#" className="card-link" data-toggle="modal" data-target={`#${repo.replace(/\./g, '')}Modal`}>Inspect Repo</a>}
                    {notesPath && <a href={notesPath} className="card-link">View Notes</a>}
                </div>
            </div>

            {repo &&
                <div className="modal fade" id={`${repo.replace(/\./g, '')}Modal`} tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 d-none d-md-block">
                                            <iframe
                                                src={`https://codesandbox.io/embed/github/MohnishKalia/${repo}${title === 'Portfolio' ? '/tree/dev' : ''}?codemirror=1&fontsize=12&view=editor&runonclick=1&theme=${theme ? 'dark' : 'light'}`}
                                                style={{ border: 'none', width: '100%', height: '100%' }}
                                                title={`${repo.replace(/\./g, '')}CSB`}
                                            ></iframe>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <iframe
                                                src={`https://mohnishkalia.github.io${title === 'Portfolio' ? '' : `/${repo}/index.html`}`}
                                                style={{ border: 'none', width: '100%', height: '70vh' }}
                                                title={`${repo.replace(/\./g, '')}GHP`}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Card;
