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

let beforeHook = undefined;
let afterHook = undefined;

const chainCommandsHook = (...commands) => {
    return function (state, dispatch, view) {
        // before
        if (typeof beforeHook === 'function') {
            // debugger
            const status = beforeHook(state, dispatch, view, currentCommands);
            // if beforeHook return false
            // stop current command
            if (!status) return false;
        }
        // commands
        for (let i = 0; i < commands.length; i++) {
            if (commands[i](state, dispatch, view)) {
                // after
                if (typeof afterHook === 'function') {
                    afterHook(state, dispatch, view, currentCommands);
                }
                return true;
            }
        }
        return false;
    }
}

export const backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
export const del = chainCommands(deleteSelection, joinForward, selectNodeForward);
export const enter = chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock);

export const currentCommands = {
    selectAll,
    exitCode,
    backspace,
    del,
    enter: chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock)
};

export const pcBaseKeymap = {
    "Enter": chainCommandsHook(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
    "Mod-Enter": exitCode,
    "Backspace": backspace,
    "Mod-Backspace": backspace,
    "Delete": del,
    "Mod-Delete": del,
    "Mod-a": selectAll
}

export let macBaseKeymap = {
    "Ctrl-h": backspace,
    "Alt-Backspace": backspace,
    "Ctrl-d": del,
    "Ctrl-Alt-Backspace": del,
    "Alt-Delete": del,
    "Alt-d": del,
    ...pcBaseKeymap
}

const handleComputerType = (beforeCommandsHook, afterCommandsHook) => {
    beforeHook = beforeCommandsHook;
    afterHook = afterCommandsHook;
    return mac ? keymap(macBaseKeymap) : keymap(pcBaseKeymap);
}

export default handleComputerType;