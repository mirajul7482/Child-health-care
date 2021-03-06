import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const [service, setService] = useState([])
    const {id} = useParams();
    
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data => setService(data.find(x => x.id === +id)))
    }, [])
    return (
        <div>

            <h2>service id : {id}</h2>
            <div className="service pb-3">
                <img src={service.img} alt="" />
                <h2>Service: {service.service}</h2>
                <p>{service.details}</p>
                
            </div>
            
        </div>
    );
};

export default Details;