import React from 'react';
import { Fragment } from 'react';
import LayoutOne from '../../layouts/LayoutOne';

const RefundPolicy = () => {
    return (
        <Fragment>
            <LayoutOne>
                <div className='container pt-4 pb-4'>
                    <h1 className='text-bold'>Refund Policy</h1>
                    <hr />
                    <h4 className='text-bold'>Return and Exchange :</h4>
                    <p>✔ Please Retain your bill/proof of purchase receipt.</p>
                    <p>✔ Merchandise bought could be exchanged within 7-10 days only if it is in its original condition and is accompanied with the Tag and the Sale Receipt.</p>
                    <p>✔ It may exchange for goods of the same value or higher value only by paying the balance.</p>
                    <p>✔ No exchange would be allowed after alteration of the garments.</p>
                    <p>✔ Please read wash & care instructions for all products.</p>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default RefundPolicy;