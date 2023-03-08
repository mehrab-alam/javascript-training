function btn_equal_click() {
    let input = getPreviousValue()
    let result = ""
    if (input.indexOf('+') >= 0) {
        let operands = input.split('+')
        result = Number(operands[0]) + Number(operands[1]);
    }
    else if (input.indexOf('*') >= 0) {
        let operands = input.split('*')
        result = Number(operands[0]) * Number(operands[1]);
    }
    else if (input.indexOf('-') >= 0) {
        let operands = input.split('-')
        result = Number(operands[0]) - Number(operands[1]);
    }
    else if (input.indexOf('/') >= 0) {
        let operands = input.split('/')
        result = Number(operands[0]) / Number(operands[1]);
    }
    else if (input.indexOf('%') >= 0) {
        let operands = input.split('%')
        result = (Number(operands[0]) / 100) * Number(operands[1]);
    }

    document.getElementById("output").innerText = result;
}