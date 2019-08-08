import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import ProTypes from 'prop-types';

const Room = ({room}) => {
    const {name, slug, images, price} = room;
    
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
};

// set requied for props
Room.proTypes = {
    room: ProTypes.shape({
        name: ProTypes.string.isRequired,
        slug: ProTypes.string.isRequired,
        images: ProTypes.arrayOf(ProTypes.string).isRequired,
        price: ProTypes.string.isRequired
    })
}

export default Room;