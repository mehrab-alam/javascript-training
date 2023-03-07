

function getPreviousResult() {
    return document.querySelectorAll('display-container').value;
}

function btn_click(alphabets) {
    document.querySelectorAll('display-container').value = getPreviousResult() + alphabets
}

export { getPreviousResult, btn_click };