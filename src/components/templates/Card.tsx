import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import ThemeContext from '../../ThemeContext';

export type CardData = {
    type: "repo" | "ref" | "proj",
    title: string
    description: string,
    repo?: string,
    notesPath?: string
}

const Card: React.FC<{ data: CardData }> = (data) => {
    const headers = {
        repo: 'Repository',
        ref: 'Reference Notes',
        proj: 'Project'
    }
    const { data: { type, title, description, repo, notesPath } } = data;
    const repoBlacklist = ['DataStructures', 'IndividualWork'];

    const getName = (repo: string) => repo.replace(/\./g, '')

    return (
        <div className="card">
            <div className="card-header">{headers[type]}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                {repo && <>
                    <a href="#/" className="card-link" data-toggle="modal" data-target={`#${getName(repo)}Modal`}>Inspect Repo</a>
                    <Modal data={data.data} getName={getName} repoBlacklist={repoBlacklist} />
                </>}
                {notesPath && <a href={notesPath} className="card-link">View Notes</a>}
            </div>
        </div>
    )
}

export const Modal: React.FC<{ data: CardData, getName: (repo: string) => string, repoBlacklist: string[] }> = ({ data: { type, title, description, repo, notesPath }, getName, repoBlacklist }) => {
    const checkBlacklist = (repoBlacklist: string[]) => {
        let valid = true;
        for (const rep of repoBlacklist) {
            valid = repo !== rep;
            if (!valid)
                break;
        }
        return valid;
    }
    const validRepo = matchMedia('(min-width: 768px)').matches && checkBlacklist(repoBlacklist);

    const [theme] = useContext(ThemeContext);

    return createPortal(
        <div className="modal fade" id={`${getName(repo!)}Modal`} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                {validRepo &&
                                    <div className="col-md-6 d-none d-md-block">
                                        <iframe
                                            src={`https://codesandbox.io/embed/github/MohnishKalia/${repo}${title === 'Portfolio' ? '/tree/dev' : ''}?codemirror=1&fontsize=12&view=editor&runonclick=1&theme=${theme ? 'dark' : 'light'}`}
                                            style={{ border: 'none', width: '100%', height: '100%' }}
                                            title={`${getName(repo!)}CSB`}
                                        ></iframe>
                                    </div>
                                }
                                <div className={`col-12${validRepo ? ' col-md-6' : ''}`}>
                                    <iframe
                                        src={`https://mohnishkalia.github.io${title === 'Portfolio' ? '' : `/${repo}`}`}
                                        style={{ border: 'none', width: '100%', height: '70vh' }}
                                        title={`${getName(repo!)}GHP`}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    );
}

export default Card;
