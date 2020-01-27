import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export class Editor extends React.Component<{}, { code: string, language: string }> {
    constructor(props: {}) {
        super(props);
        const placeholder = [
            'This is a live code inspector',
            '',
            'Nothing here as of yet, link me a url!',
            'If you need some examples, try:',
            'https://raw.githubusercontent.com/facebook/react/master/scripts/babel/transform-replace-console-calls.js',
            'or',
            'https://raw.githubusercontent.com/google/gson/master/gson/src/main/java/com/google/gson/JsonParser.java'
        ].join('\n\t')
        this.state = {
            code: `/*\n\t${placeholder}\n*/`,
            language: 'javascript'
        }
    }

    getCode = async () => {
        const elt = document.getElementById("url") as HTMLInputElement;
        const url = elt.value;
        if (url.trim() === '') return;
        const res = await fetch(url);
        const text = await res.text();
        //need convert for js, ts, cs
        const dots = url.match(/\.(\w+)/gi);
        let ext = dots ? dots[dots.length - 1].substring(1) : 'javascript';
        switch (ext) {
            case 'js':
                ext = 'javascript';
                break;
            case 'ts':
                ext = 'typescript';
                break;
            case 'cs':
                ext = 'csharp';
                break;
        }
        console.log(ext);
        this.setState({ code: text, language: ext });
    }

    render() {
        const { code, language } = this.state;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <div className="row d-none d-md-block">
                <div className="col-md-12">
                    <div className="input-group my-3">
                        <input type="url" id="url" className="form-control" placeholder="Enter source URL here..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={this.getCode}>Fetch</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <MonacoEditor
                        height="30vh"
                        theme="vs-dark"
                        language={language}
                        value={code}
                        options={options}
                    />
                </div>
            </div>
        );
    }
}