import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import RiseLoader from "react-spinners/RiseLoader";
import Services from '../Services/Services';

const LoadServices = () => {

    const override = css`
    margin: 0 auto;
`;

    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log("datfgfffa", data)
                setservices(data)
            })
    }, [])

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap sm:flex-grow-1 sm:pl-6">
                {
                    services.length === 0 && <RiseLoader css={override} color='#808080'></RiseLoader>
                }
                {
                    services.map(service => <Services service={service} ></Services>)
                }
            </div>


        </div>
    );
};

export default LoadServices;