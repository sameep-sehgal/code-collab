import React from "react";
import {Controlled as CodeMirror} from 'react-codemirror2';

const CodeMirrorEditor = ({onCodeChange, code}) => {

    var defaultOptions =  {
        mode: { name: 'javascript', json: true },
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        outerHeight:'200px',
        innerHeight:'190px',
        lineWrapping:true
    };

    return (
        <CodeMirror 
            value={code} 
            onBeforeChange={(editor, data, value) => {
                onCodeChange(value);
            }}
            onChange={(editor, data, value) => { }}
            options={defaultOptions} 
            autoScroll={true}
            autoCursor={true}
        />
    )
};

export default CodeMirrorEditor;