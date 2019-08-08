import React, {Fragment} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
    return (
        <Fragment>
            <Hero hero="roomsHero">
                <Banner title="our rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/" className="btn-primary">return rooms</Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </Fragment>
    );
};

export default Rooms;