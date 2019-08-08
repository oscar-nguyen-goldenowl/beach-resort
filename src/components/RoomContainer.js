import React, {Fragment} from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

// xem cách export 1 bên file context.js
function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading/>
    }

    return (
        <Fragment>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </Fragment>
    )
}

export default withRoomConsumer(RoomContainer);






// xem cách export 2 bên file context.js

// import React, {Fragment} from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// const RoomContainer = () => {
//     return (
//         <Fragment>
//             <RoomConsumer>
//                 {
//                     (value) => {
//                         const {loading, sortedRooms, rooms} = value;

//                         if(loading){
//                             return <Loading/>
//                         }
//                         return (
//                                 <div>
//                                     Rooms RoomsContainer
//                                     <RoomFilter rooms={rooms}/>
//                                     <RoomList rooms={sortedRooms}/>
//                                 </div>
//                         )
//                     }
//                 }
//             </RoomConsumer>
//         </Fragment>
//     );
// };

// export default RoomContainer;