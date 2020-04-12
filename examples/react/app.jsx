import React from 'react';
import EasyEditor from 'easy-editor-react';

const options = {
    autoFocus: true,
    viewInstance: (view) => {
        console.log('react view', view);
    }
}

export default () => <div>
    <EasyEditor {...options} />
</div>