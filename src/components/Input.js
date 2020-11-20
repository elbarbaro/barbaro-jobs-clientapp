import './Input.css'

function Input(props) {
    return(
        <div className={`Input col-${props.col}`}>
            <img src={props.icon} width="40" height="40" />
            <input type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;