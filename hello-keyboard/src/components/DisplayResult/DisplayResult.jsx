import KeyboardBtn from "../KeyboardBtn/KeyboardBtn";
import React from "react";
import "./DisplayResult.css"



const KeyBoardApp = ({ letters, midLetters, lowerLetters, spaceBar }) => {
    const [state, setOutPut] = React.useState({ outputValue: "" })
    const btnClickHandler = (letter) => {
        setOutPut({
            outputValue: state.outputValue + letter
        });
    }

    return (
        <div className="keyboard">
            <textarea rows={3} value={state.outputValue} />
            <div className="btns">
                {letters.map((l, i) => <KeyboardBtn clickHandler={btnClickHandler} letter={l} key={i} />)}
            </div>
            <div className="btns">
                {midLetters.map((l, i) => <KeyboardBtn clickHandler={btnClickHandler} letter={l} key={i} />)}
            </div>
            <div className="btns">
                {lowerLetters.map((l, i) => <KeyboardBtn clickHandler={btnClickHandler} letter={l} key={i} />)}
            </div>

            <div className="btns ">
                {spaceBar.map((l, i) => <KeyboardBtn className="spcbar" clickHandler={btnClickHandler} letter={l} key={i} />)}
            </div>
        </div >
    )
}
export default KeyBoardApp;