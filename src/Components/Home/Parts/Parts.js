import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='lg:px-24 mx-auto mb-24 mt-10 px-5'>
            <h2 className='md:text-4xl text-2xl mb-8 font-bold uppercase text-center'>We Provide</h2>

            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;