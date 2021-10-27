import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    console.log(data);

    return (
        <div>
            <div style={{display: 'flex', width:'92%',margin:'16px auto'}}>
                <div style={{width:'30%'}}>
                    <img src={data.img} alt="" />
                </div>
                <div style={{width: "70%", textAlign: 'left'}}>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <h1>${data.price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Booking;