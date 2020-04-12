# `EasyEditor`
A rich-text editor for Vue &amp; React base on Prosemirror


## `EasyEditor-React`

#### Useage
```js
import React from 'react';
import EasyEditor from 'easy-editor-react';

const options = {
    autoFocus: true,
    viewInstance: (view) => {
        console.log('react view', view);
    }
}

export default () => <EasyEditor {...options} />
```

#### Props

- `autoFocus` - Auto focus

- `viewInstance` - Instance of prosemirror view
    - `state` - Prosemirror state

    - `focused` - Focus status

    - `dom` - Root DOM

    - `dragging` - Draging Element

    - `lastClick` - Last click information
        - `time` - The time stamp
        - `x` - Position x of mouse
        - `y` - Position y of mouse
        - `type` - Single click or double click
    
    - `editable` - Can editor or not

    - `......`