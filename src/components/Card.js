import './Card.css'

function Card() {
    return (
        <div className="Card">
            <div className="img-container bg-pink">
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