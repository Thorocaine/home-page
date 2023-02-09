import React from 'react';
import code from './code.png';

const GuestWifi: React.FC = () => {
    console.debug('Guest Wifi QR: ', code)
    debugger;

    return (
        <figure
            className="w-64 mx-lg my-md border border-gray-300 rounded-lg p-4">
            <img src={code.src} alt="QR Code" className="mx-auto block"/>
            <figcaption className="text-center text-xl font-bold">Guest Wifi</figcaption>
        </figure>
    );
};

export default GuestWifi;