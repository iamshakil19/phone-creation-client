import React from 'react';
import { useQuery } from 'react-query';
import Part from '../Part/Part';

const Parts = () => {

    const { data: parts, isLoading } = useQuery(['allParts'], () => fetch('https://phone-creation-server.up.railway.app/parts', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    const latestParts = parts?.slice(0, 6)


    return (
        <div className='lg:px-24 mx-auto mb-24 mt-10 px-5'>
            <h2 className='md:text-4xl text-2xl mb-8 font-bold uppercase text-center'>We Provide</h2>

            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    latestParts?.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }

            </div>
        </div>
    );
};

export default Parts;