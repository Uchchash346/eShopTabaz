import React, { Fragment } from 'react';
import LayoutOne from '../../layouts/LayoutOne';

const Return = () => {
    return (
        <Fragment>
            <LayoutOne headerTop="visible">
                <h1 className='text-center pt-5'>Return Policies</h1>
                <p className='text-center'>What do you want to know more about our business? Browse this page and find your relevant query answer! Do you need more information? Then call our hotline:</p>
                <h3 className='text-center text-success'>Phone: +880 1404 88 44 33</h3>

                <div className='container mt-5 mb-5 border border-1'>
                    <h2>HOW TO ORDER?</h2>
                    <p>- Follow these simple steps to successfully place your order on Demand website:</p>
                    <p>Step 1: Browse items by category</p>
                    <p>To browse the online store, use the main navigation panel(situated at the right side of main logo) which has the names of the different product categories – Men, Kids, eVoucher, Accessories, Exclusive)</p>
                    <p>Step 2: Select the item</p>
                    <p>Each subcategory of the products can be sorted based on price, name and color from the site. Once you see an individual item in the menu, you may click on that item to get the detail based on Product Description. Do not forget to specify the size and color if you are ordering apparel items.</p>
                    <p>Step 3: Add item to your CART</p>
                    <p>Click the item and press ADD TO CART button to add the item to your bag. A system generated message will pop up informing that the product has been successfully added to the bag. From there you may finalise your shopping and go for CHECKOUT or CONTINUE SHOPPING tab. Checkout will take you to further process the product and final checkout. Continue Shopping will redirect you to the MAIN PAGE for more shopping experience.</p>
                    <p>Step 4: Check your shopping cart</p>
                    <p>On the Shopping Cart page, you will be able to see the status of your order - item(s) added to the bag, quantity of the item(s) & the total amount. You have the option to remove an item you have decided not to buy or make changes to the product quantity & size and click the UPDATE SHOPPING CART. If you wish to browse for more items, you simply need to click CONTINUE SHOPPING.</p>
                    <p>Step 5: Checkout your order</p>
                    <p>Before moving to CHECKOUT, if you have any discount/promotional coupon, please place the coupon details on the REDEEM PROMOTIONS & COUPONS to get your discount. Now you may click the CHECKOUT button located at the lower right side of the page. At this point, you will be asked to login to your Aarong account. If you are not registered, you may REGISTER yourself by providing some information or you may proceed as a GUEST CUSTOMER.</p>
                    <p>Step 6: Registered/Guest user</p>
                    <p>By being a registered user, you can store your billing information to our system which will help you to quickly checkout and also for future purchases. You will also be able to see your order history, promotional and other information. If you are not willing to store your information in our system, you may simply checkout as GUEST CUSTOMER.</p>
                    <p>Step 7: Verify billing and shipping details</p>
                    <p>As a registered user, we have your billing and shipping address for shipment in our system. If required, you may also change the shipping address by selecting SHIP TO DIFFERENT ADDRESS. If you are checking out as a Guest User, you need to provide all billing & shipping information.</p>
                    <p>Please ensure that you are providing the complete and correct address detail in order to get the product delivered on time.</p>
                    <p>Step 8: Confirm your order</p>
                    <p>Once you click PLACE ORDER, you will be notified via confirmation SMS/email (your preferred contact method) that your checkout process is done.</p>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default Return;