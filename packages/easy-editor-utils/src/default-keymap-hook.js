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

console.log('mac', mac);

export default keymap(baseKeymap);