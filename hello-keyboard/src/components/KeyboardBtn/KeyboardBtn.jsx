
import "./KeyboardBtn.css"

const KeyboardBtn = ({ letter, clickHandler }) => (
    <button onClick={(e) => clickHandler(letter)}>{letter}</button>
)

export default KeyboardBtn