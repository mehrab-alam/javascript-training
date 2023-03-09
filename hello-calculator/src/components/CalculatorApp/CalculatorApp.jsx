import InputBtn from "../InputBtn/InputBtn";
import React from "react";
import "./CalculatorApp.css"
const CalculatorApp = ({ btns }) => {
    const [state, setOutPut] = React.useState({ outputValue: "", result: 0 })
    const btnClickHandler = (calculatorBtn) => {
        setOutPut({
            ...state,
            outputValue: state.outputValue + calculatorBtn
        });
    }

    const reset = () => {
        setOutPut({
            result: 0,
            outputValue: ""
        });
    }
    const EqualBtn = () => {
        let input = state.outputValue
        let output = 0;
        if (input.indexOf("+") >= 0) {
            let operands = input.split("+")
            output = operands[0] + Number(operands[1])
        }
        else if (input.indexOf("*") >= 0) {
            let operands = input.split("*")
            output = Number(operands[0]) * Number(operands[1])
        } else if (input.indexOf("-") >= 0) {
            let operands = input.split("-")
            output = Number(operands[0]) - Number(operands[1])
        } else if (input.indexOf("/") >= 0) {
            let operands = input.split("/")
            output = Number(operands[0]) / Number(operands[1])
        } else if (input.indexOf("%") >= 0) {
            let operands = input.split("%")
            output = (Number(operands[0]) / 100) * Number(operands[1])
        }

        setOutPut({
            ...state,
            result: state.result + output
        });
    }




    return (
        <div className="calculator">
            <input type="text" value={state.outputValue} />
            <div className="result">
                {state.result}
            </div>
            <hr />
            <div className="calulatorBtns">
                <button onClick={(e) => reset()}>C</button>

                {btns.map((n, i) => <InputBtn clickHandler={btnClickHandler} calculatorBtn={n} key={i} />)}
                <button onClick={(e) => EqualBtn()}>=</button>
            </div>
            <hr />
        </div >
    )
}

export default CalculatorApp;