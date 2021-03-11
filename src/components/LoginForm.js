import React from 'react';
class LoginForm extends React.Component {
    handlClick = () => {
        const { handleLoginClick } = this.props;
        handleLoginClick(true);
    }
    render() {



        return <div className="inputName">
            <input className="input" type="text" name="key" placeholder="Введите ваше имя"></input>
            <button onClick={this.handlClick} className="buttonInput"> Войти </button>
        </div>;

    }
}

export default LoginForm;