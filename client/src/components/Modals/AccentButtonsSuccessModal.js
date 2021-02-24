import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const AccentButtonsSuccessModal = (props) => {

    const closeButtonsModal = () => {
        props.closeButtonsModal();
    };


    return (
        <div className="alert">
            <div className="container">
                <div className="successfully">
                    <div className="successfully__title">успешно</div>
                    <div className="successfully__text">
                    Действие выполнено
                    </div>
                    <div
                        onClick={() => closeButtonsModal()}
                        className="successfully__close">
                        <div className="successfully__close-item"></div>
                        <div className="successfully__close-item"></div>
                    </div>

                    <button
                        onClick={() => closeButtonsModal()}
                        className="successfully__btn btn">Продолжить</button>
                </div>
            </div>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    closeButtonsModal: () => dispatch(closeButtonsModal())
});



export default withRouter(
    connect(null, mapDispatchToProps)(AccentButtonsSuccessModal)
);
