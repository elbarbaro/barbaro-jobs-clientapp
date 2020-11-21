import './List.css'
import Card from './Card'

function List() {
    const list = [1,2,3,4,5,6,7,8,9];
    return (
        <div className="List">
            { list.map(i => {return <Card key={i}/>})}
        </div>
    );
}

export default List;