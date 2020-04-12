import { schema } from "easy-editor-core/prosemirror-schema-basic";
import { EditorState } from "easy-editor-core/prosemirror-state";
import { EditorView } from "easy-editor-core/prosemirror-view";

class EasyEditor {
    constructor(options) {
        console.log('EasyEditor options', options);
        let state = EditorState.create({ schema });
        let view = new EditorView(document.body, { state });
    }
}

export default EasyEditor