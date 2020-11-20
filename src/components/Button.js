import './Button.css'

function Button(props) {
    return (
    <button className="Button">{props.value}</button>
    );
}

export default Button;