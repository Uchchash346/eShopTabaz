import React, { Fragment } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import LayoutOne from '../../layouts/LayoutOne';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
    return (
        <Fragment>
            <LayoutOne>
                <h1 className='text-center pt-5'>FAQ</h1>
                <div className='container pt-3 pb-5'>
                    <Accordion allowZeroExpanded>
                        {/* Question 1 */}
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I change my billing address?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Yes, please note tha  this service is only available for our registered users.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* Question 2 */}
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I use voucher as a mode of payment?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Yes, you can use Demand eVoucher purchased online or in store as a mode of payment.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* Question 3 */}
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Do I have to sign up for an Tabaz account to buy something at Tabaz Website?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    You do not have to create an account to place an order. You have the option to proceed as a guest shopper. However, you may be missing out on several benefits available to registered users - such as checking order status, order history.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* Question 4 */}
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I ship different items in my order to different shipping addresses?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Currently we process one shipping address per order. If you would like to ship to different addresses, you may place separate orders and make payments for them separately.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        {/* Question 5 */}
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How do I check my order status?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    If you are a registered user you can check your order status any time by going to Order History from My Account.  After logging onto your account, click the Order History tab to see order details.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default FAQ;