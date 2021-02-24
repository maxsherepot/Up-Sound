import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const LoginModal = (props) => {
    return (
        <div className="alert">
            <div className="container">
                <div className="error">
                    <div className="error__title">ошибка</div>
                    <div className="error__text">
                        Пароль или логин неверны
        </div>
                    <div onClick={props.continueAfterError}
                        className="error__close">
                        <div className="error__close-item"></div>
                        <div className="error__close-item"></div>
                    </div>
                    <button onClick={props.continueAfterError} className="error__btn btn">Попробывать снова</button>
                </div>
            </div>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    continueAfterError: () => dispatch(continueAfterError())
});


export default withRouter(
    connect(null, mapDispatchToProps)(LoginModal)
);
