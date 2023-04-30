// eslint-disable-next-line no-unused-vars
import React from 'react';
import './QZone.css';
import kidsZone1 from '../../../assets/qZone1.png';
import kidsZone2 from '../../../assets/qZone2.png';
import kidsZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className=' text-center  mt-5 '>
            <h4>Q-Zone</h4>
            <div className='bg-light rounded p-1 py-4'>
                <img src={kidsZone1} alt="this is an image" />
                <img src={kidsZone2} alt="this is an image" />
                <img src={kidsZone3} alt="this is an image" />
            </div>


        </div>
    );
};

export default QZone;