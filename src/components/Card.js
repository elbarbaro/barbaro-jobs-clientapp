import './Card.css'

function Card() {

    const randomColor = () => {
        
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        return `${r},${g},${b}`;
    }
    return (
        <div className="Card">
            <div className="img-container" style={{backgroundColor: `rgb(${randomColor()})`}}>
                <img />
            </div>
            <div className="Card-content">
                <div className="Card-header">
                    <p>5h ago</p>
                    <span> . </span>
                    <p>Full Time</p>
                </div>
                <h3 className="Card-title">Job Title</h3>
                <p className="paragraph">Company Name.</p>
                <div className="Card-footer">
                    <p>Remote, Seul, Tokyo, Mountain View, San Francisco</p>
                </div>
            </div>
        </div>
    );
}

export default Card;