import react from 'react';

const Card = ({name, institution, address}) => {
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
        </div>
    )
}

export default Card;