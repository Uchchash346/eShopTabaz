import React from 'react';
import { Fragment } from 'react';
import LocationMap from '../../components/contact/LocationMap';
import LayoutOne from '../../layouts/LayoutOne';



const StoreLocation = () => {

    //  23.783536747568714, 90.39246228413516
    return (
        <Fragment>
            <LayoutOne>
                <div className='container store-location-map'>
                    <LocationMap latitude="23.783536747568714" longitude="90.39246228413516" />
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default StoreLocation;