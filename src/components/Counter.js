import React from 'react';
import PropTypes from "prop-types";
export default class Counter extends React.Component {
    constructor(props)
    {
        super(props); 
        this.state = 
        {
            counter: props.initionalCount,
        };
    }
    handleClick = () =>
    {
        this.setState({counter: this.state.counter + 1});
    };

    handleClickDicrement = () =>
    {
        this.setState({counter: this.state.counter - 1});
    };

    render() {

           
        let { text } = this.props;
        const {counter} = this.state;
        return (
            <>
                <div>Заголовок: {text}</div>
                <div>Состояние счетчика:{counter}</div>
                <button onClick = {this.handleClick}>+</button>
                <button onClick = {this.handleClickDicrement}>-</button>
            </>
        );
    }
}
Counter.propTypes = {

    text: PropTypes.string,
    initionalCount: PropTypes.number

};
Counter.defaultProps = {

    text: 'TEST',
    initionalCount: 0

};