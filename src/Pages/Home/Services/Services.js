import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services])


    const handleDelete = id => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    const rest = services.filter(service => service._id !== id)
                    setServices(rest);
                }
            })
    };

    return (
        <div>
            <div id="services">
                <h2 className="text-primary mt-5">Our services</h2>
                <div className="service-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            handleDelete={handleDelete}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <div>
                <button>
                    <Link to='/addService'>Add A New Service</Link>
                </button>
            </div>
        </div>
    );
};

export default Services;