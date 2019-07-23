import React, { Component } from 'react';

import classes from './Pin.css';
import PinTable from './PinTable/PinTable';

class Pin extends Component {
    render() {
        return (
            <div className={classes.Pin}>
                <div className={classes.inbox}>

                    <section className={classes.profile}>
                        <div></div>
                        <blockquote>
                            <h4>Robin An</h4>
                            <p>anrobin719@gmail.com</p>
                        </blockquote>
                    </section>

                    <section className={classes.table}>
                        <PinTable />
                    </section>
                </div>
            </div>
        );
    }
}

export default Pin;