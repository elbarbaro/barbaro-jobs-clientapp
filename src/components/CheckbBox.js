import './CheckBox.css'

function CheckBox(props) {
    return (
        <label className="CheckBox">{props.text}
            <input type="checkbox" value={props.value} />
            <span className="checkmark"></span>
        </label>
    );
}

export default CheckBox;