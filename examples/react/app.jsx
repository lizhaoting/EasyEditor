import React from 'react';
import EasyEditor from 'easy-editor-react';
// import * as injectCSS from './inject.css';

const options = {
    autoFocus: true,
    viewInstance: (view) => {
        // console.log('react view', view);
    },
    injectEditableCSS: `
        .ProseMirror {
            border: 1px solid #329FD9;
            outline: none;
            padding: 8px
        }
    `,
}

export default () => <div>
    <EasyEditor {...options} />
</div>