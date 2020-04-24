export const removeStyleLink = function (linkID) {
    const styleLink = document.getElementById(linkID);
    if (styleLink) styleLink.remove();
}

export const injectCSS = (css, id = '') => {
    removeStyleLink('injectCSSID');
    console.group('%c inject css', 'color: #329FD9');
    console.log(css);
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    style.id = id;
    const { head } = document;
    const { firstChild } = head;

    if (firstChild) {
        head.insertBefore(style, firstChild);
    } else {
        head.appendChild(style);
    }
    console.groupEnd();
}