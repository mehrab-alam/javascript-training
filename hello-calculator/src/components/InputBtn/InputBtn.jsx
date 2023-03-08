import "./InputBtn.css"

const InputBtn = ({ calculatorBtn, clickHandler }) => (
    <button onClick={(e) => clickHandler(calculatorBtn)}>{calculatorBtn}</button>

)

export default InputBtn;