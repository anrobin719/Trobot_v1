import React from 'react';

import classes from './Footer.css';

const Footer = () => (
    <footer className={classes.Footer}>
        <div className={classes.inbox}>
            <h4>Contact Us</h4>
            <blockquote>
                <div>
                    <h5>E-mail</h5>
                    <p>anrobin719@gmail.com</p>
                </div>
                
                <div>
                    <h5>Address</h5>
                    <p>서울시 강동구 고덕로 3길 5, 301</p>
                </div>
                
            </blockquote>
        </div>
        
    </footer>
);

export default Footer;