import React from 'react'
import './service.css';
import { Link, Outlet } from 'react-router-dom';

const Service = () => {
    return (
        <div className='service-container'>
            <h2 className='service-title'>Our Service</h2>
            <p className='service-subtitle'>This is the Service page of our website</p>

            <div className='service-link'>
                <Link to='/web-development' className='service-link web'>Web Development</Link>

                <Link to='/app-development' className='service-link app'>App Development</Link>

                <Link to='/design' className='service-link design'>Design</Link>
            </div>

            {/* nested route content */}
            <Outlet />
        </div>

    )
}

export default Service