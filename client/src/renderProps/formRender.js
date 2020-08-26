import { Component } from 'react';


class FormRender extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.fields.reduce(function (acc, val) {
            return { ...acc, [val.name]: '' };
        }, {});

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        var { state, handleChange } = this;
        return this.props.render(state, handleChange);
    }
}



export default FormRender;