import react from 'react';

const Card = ({ id, name, username, email, phone}) => {
    return (
        <div className="card-container">
            <p>id :{id}</p>
            <p>Name :{name}</p>
            <p>Username :{username}</p>
            <p>Email :{email}</p>
            <p>Phone :{phone}</p>
        </div>
    )
}

export default Card;