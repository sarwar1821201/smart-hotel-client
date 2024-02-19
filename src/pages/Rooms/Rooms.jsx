import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import { useParams, useSearchParams } from 'react-router-dom';

const Rooms = () => {

     const [params, setParams ]= useSearchParams();
     const category= params.get('category')

    const [rooms, setRooms] = useState([])
   // const [loading,setLoading] = useState(false)

    useEffect( ()=> {
       // setLoading(true)
        fetch('rooms.json')
        .then(res=> res.json() )
        .then( (data)=> {
              if(category){
                 const filtered= data.filter( (room)=> room.category===category )
                 setRooms(filtered)
              }
              else{
                setRooms(data)
              }
             
            // setLoading(false)
        } )
    } , [category]  )

    return (
        <Container>
            <div className=' mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ' >

                {
                    rooms.map ( (room,index)=> <Card 
                      key={index}
                      room={room}
                    >

                    </Card>  )
                }

            </div>
        </Container>
    );
};

export default Rooms;