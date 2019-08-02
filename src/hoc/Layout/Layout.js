import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuth} />
                {/* <SideDrawer /> */}
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);