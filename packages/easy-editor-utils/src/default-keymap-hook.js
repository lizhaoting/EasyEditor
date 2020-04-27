import { keymap } from "easy-editor-core/prosemirror-keymap";
import {
    baseKeymap,
    deleteSelection,
    joinBackward,
    selectNodeBackward,
    joinForward,
    selectNodeForward,
    joinUp,
    joinDown,
    lift,
    newlineInCode,
    exitCode,
    createParagraphNear,
    liftEmptyBlock,
    splitBlock,
    splitBlockKeepMarks,
    selectParentNode,
    selectAll,
    wrapIn,
    setBlockType,
    toggleMark,
    autoJoin,
    chainCommands
} from "easy-editor-core/prosemirror-commands";

import { mac } from './user-agent-helper';

const chainCommandsHook = (beforeHook, afterHook, ...commands) => {
    if (typeof beforeHook === 'function') {
        afterHook();
    }
    return function (state, dispatch, view) {
        for (let i = 0; i < commands.length; i++) {
            if (commands[i](state, dispatch, view)) return true;
        }
        if (typeof afterHook === 'function') {
            afterHook(state, dispatch, view);
        }
        return false;
    }
}

export const backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward)
export const del = chainCommands(deleteSelection, joinForward, selectNodeForward)

export const pcBaseKeymap = {
    "Enter": chainCommandsHook('', '', newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
    "Mod-Enter": exitCode,
    "Backspace": backspace,
    "Mod-Backspace": backspace,
    "Delete": del,
    "Mod-Delete": del,
    "Mod-a": selectAll
}

export let macBaseKeymap = {
    "Ctrl-h": pcBaseKeymap["Backspace"],
    "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
    "Ctrl-d": pcBaseKeymap["Delete"],
    "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
    "Alt-Delete": pcBaseKeymap["Mod-Delete"],
    "Alt-d": pcBaseKeymap["Mod-Delete"]
}

for (let key in pcBaseKeymap) macBaseKeymap[key] = pcBaseKeymap[key]

const handleComputerType = (beforeCommandsHook, afterCommandsHook) => {
    return mac ? keymap(macBaseKeymap) : keymap(pcBaseKeymap);
}

export default handleComputerType;