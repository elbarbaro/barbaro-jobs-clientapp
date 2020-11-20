import Input from './Input.js'
import CheckBox from './CheckbBox'
import Button from './Button'
import './InputBar.css'
import icon from '../lupa.svg'
import iconLocation from '../location.svg'

function InputBar() {
    return(
        <div className="InputBar">
            <Input icon={icon} col={6} placeholder="Filter by title, companies, expertise"/>
            <Input icon={iconLocation} col={3} placeholder="Filter by location..."/>
            <div className="InputBar-actions">
                <CheckBox text="Full Time Only" value={2}/>
                <Button value="Search"/>
            </div>
        </div>
    );
}

export default InputBar;