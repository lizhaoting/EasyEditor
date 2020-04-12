import React from 'react';

import { schema } from "easy-editor-core/prosemirror-schema-basic";
import { EditorState } from "easy-editor-core/prosemirror-state";
import { EditorView } from "easy-editor-core/prosemirror-view";

import { defaultOptions } from 'easy-editor-utils';

// let state = EditorState.create({schema})
// let view = new EditorView(document.body, {state})

class EasyEditor extends React.Component {
    constructor(props) {
        super(props)
        // merge options
        this.options = { defaultOptions, ...props }

        // create ref as container
        this.editorRef = React.createRef();

        // init state from props or default
        this.state = this.initState();

        // init view
        this.view = this.initView();

        // this.view = new EditorView(document.body, {
        //     state: EditorState.create(schema),
        //     dispatchTransaction: transaction => {
        //         const { state, transactions } = this.view.state.applyTransaction(transaction)

        //         this.view.updateState(state)

        //         if (transactions.some(tr => tr.docChanged)) {
        //             this.props.onChange(state.doc)
        //         }

        //         this.forceUpdate()
        //     },
        //     attributes: this.props.attributes,
        //     nodeViews: this.props.nodeViews
        // })
    }

    componentDidMount() {
        this.editorRef.current.appendChild(this.view.dom);

        // application options
        if (this.options.autoFocus) this.view.focus();

        // exposed view instance
        if (this.options.viewInstance) this.props.viewInstance(this.view);
    }

    initState() {
        return EditorState.create({ schema });
    }

    initView() {
        return new EditorView(null, {
            state: this.state
        });
    }

    getHTML() {}

    getJSON() {}

    render() {
        const editor = <div ref={this.editorRef} />

        return this.props.render ? this.props.render({
            editor,
            view: this.view
        }) : editor
    }
}

export default EasyEditor;