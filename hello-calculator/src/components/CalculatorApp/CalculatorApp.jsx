import InputBtn from "../InputBtn/InputBtn";
import React from "react";
import "./CalculatorApp.css"
const CalculatorApp = ({ btns }) => {
    const [state, setOutPut] = React.useState({ outputValue: "" })
    const btnClickHandler = (calculatorBtn) => {
        setOutPut({
            outputValue: state.outputValue + calculatorBtn
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

        return output;
    }


    return (
        <div className="calculator">
            <input type="text" value={state.outputValue} />
            <div className="result"><EqualBtn />
            </div>
            <hr />
            <div className="calulatorBtns">
                {btns.map((n, i) => <InputBtn clickHandler={btnClickHandler} calculatorBtn={n} key={i} />)}
                <button onClick={EqualBtn()}>=</button>
            </div>
            <hr />
        </div >
    )
}

export default CalculatorApp;