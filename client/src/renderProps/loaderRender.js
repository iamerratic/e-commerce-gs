import React, { Component } from 'react';

import LoaderComponent from '../components/loader/loader';

class Loader extends Component {

    state = {
        isLoading: false
    };

    startLoading = () => {
        this.setState({
            isLoading: true
        });
    }

    stopLoading = () => {
        this.setState({
            isLoading: false
        })
    }

    render() {
        var { state: { isLoading }, startLoading, stopLoading } = this;
        return isLoading ? <LoaderComponent /> : this.props.render(startLoading, stopLoading);
    }



}


export default Loader;