# EasyEditor
A rich-text editor for Vue &amp; React base on Prosemirror


## EasyEditor-React

#### Useage
```js
import React from 'react';
import EasyEditor from 'easy-editor-react';

const options = {
    autoFocus: true,
    viewInstance: (view) => {
        console.log('react view', view);
    },
    beforeCommandsHook: (state, dispatch, view, commands) => {
        commands.selectAll(state, dispatch, view);
        return false;
    },
    afterCommandsHook: (state, dispatch, view, currentCommands) => {
        console.log('afterCommandsHook', state, dispatch, view, currentCommands);
    },
}

export default () => <EasyEditor {...options} />
```

#### Props

- autoFocus - Auto focus

- injectEditableCSS - Inject editable mode CSS
    - basic wrapper class name called ProseMirror

    - example
        ```css
        .ProseMirror {
            outline: none
        }
        ```

- injectPreviewCSS - Inject disabled mode CSS
    - example
        ```css
        .ProseMirror {
            outline: 1px solid #329FD9;
        }
        ```


- viewInstance - Instance of prosemirror view
    - state - Prosemirror state

    - focused - Focus status

    - dom - Root DOM

    - dragging - Draging Element

    - lastClick - Last click information
        - time - The time stamp
        - x - Position x of mouse
        - y - Position y of mouse
        - type - Single click or double click
    
    - editable - Can editor or not

    - ......

- beforeCommandsHook - Action before exec current keybord event
    ```javascript
    (state, dispatch, view, commands) => {
        commands.selectAll(state, dispatch, view);
        return false;
    }
    ```
    - return - Return true will continue current keybord event

    - params
        - state - Current Editor state
        - dispatch - Dispatch function
        - view - Current Editor view model
        - commands - Support keybord event
        
            - selectAll,
            - exitCode,
            - backspace,
            - del,
            - enter