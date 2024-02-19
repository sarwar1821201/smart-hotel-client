import React from 'react';
import Container from '../Shared/Container';
import RoomHeader from './RoomHeader';
import RoomInfo from './RoomInfo';
import RoomReservation from './RoomReservation';

const RoomsDetails = () => {
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto' >
                <div className='flex flex-col gap-6' >
              <div> <RoomHeader></RoomHeader>  </div>
              
             <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-6' >
             <div>   <RoomInfo></RoomInfo>  </div>
              <div  > <RoomReservation></RoomReservation> </div>
             </div>

                </div>

            </div>
        </Container>
    );
};

export default RoomsDetails;