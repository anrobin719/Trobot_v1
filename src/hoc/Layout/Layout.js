import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Troubles from '../../containers/Troubles/Troubles';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Toolbar />
                <Troubles />
            </Aux>
        );
    }
}

export default Layout;