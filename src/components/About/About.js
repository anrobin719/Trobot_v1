import React from 'react';

import classes from './About.css';

const About = () => (
    <div className={classes.About}>
        <section className={classes.head}>
            <div className={classes.inbox}>
                <div className={classes.headBlock}>
                    <h2>What is Trobot?</h2>
                    <p>and about what you will get here</p>
                </div>
            </div>
        </section>

        <section className={classes.cont}>
            <div className={classes.inbox}>
                <div className={classes.contBlock}>
                    <h3>Ut enim ad minim</h3>
                    <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                <div className={classes.box4}></div>
                <div className={classes.box4}></div>
                <div className={classes.box4}></div>
                <div className={classes.box4}></div>
                
                <div className={classes.contBlock}>
                    <h3>Ut enim ad minim</h3>
                    <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                <div className={classes.box2}></div>
                <div className={classes.box2}></div>
            </div>
        </section>
    </div>
);

export default About;