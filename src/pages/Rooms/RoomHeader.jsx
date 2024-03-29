import React from 'react';
import Heading from '../Shared/Heading';

const RoomHeader = () => {
    return (
        <div>
            <Heading 
                      title='No Rooms Avaliable in the Category!!!'
                      subtitle='Sideman, Indonesia '
                      
                    >

                    </Heading>

                    <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src='https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg'
          alt='header image'
        />
      </div>

        </div>
    );
};

export default RoomHeader;