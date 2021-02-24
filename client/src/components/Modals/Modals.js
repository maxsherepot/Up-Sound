import React from 'react';
import "../../css/popup.css"


const Modals = () => {


    return (

        <div className="alert">
            <div className="container">
                <div className="alert__button">
                    <button className="error__btn">error</button>
                    <button className="successfully__btn">successfully</button>
                    <button className="message__btn">message</button>
                    <button className="warning__btn">warning</button>
                    <button className="action__btn">action</button>
                </div>

                <div className="error"
                //style={{display: "none"}}
                >
                    <div className="error__title">ошибка</div>
                    <div className="error__text">
                        Допускается не более трех неудачных попыток ввода пароля. Вы будете
                        возращены к выбору email
                    </div>
                    <div className="error__close">
                        <div className="error__close-item"></div>
                        <div className="error__close-item"></div>
                    </div>
                    <button className="error__btn btn">Продолжить</button>
                </div>

                <div className="successfully"
                //style="display: none"
                >
                    <div className="successfully__title">успешно</div>
                    <div className="successfully__text">
                        Допускается не более трех неудачных попыток ввода пароля. Вы будете
                        возращены к выбору email
                    </div>
                    <div className="successfully__close">
                        <div className="successfully__close-item"></div>
                        <div className="successfully__close-item"></div>
                    </div>
                    <button className="successfully__btn btn">Продолжить</button>
                </div>

                <div className="message"
                // style="display: none"
                >
                    <div className="message__title">Сообщение</div>
                    <div className="message__text">
                        Допускается не более трех неудачных попыток ввода пароля. Вы будете
                        возращены к выбору email
        </div>
                    <div className="message__close">
                        <div className="message__close-item"></div>
                        <div className="message__close-item"></div>
                    </div>
                    <button className="message__btn btn">Продолжить</button>
                </div>

                <div className="warning"
                // style="display: none"
                >
                    <div className="warning__title">ошибка</div>
                    <div className="warning__text">
                        Допускается не более трех неудачных попыток ввода пароля. Вы будете
                        возращены к выбору email
        </div>
                    <div className="warning__close">
                        <div className="warning__close-item"></div>
                        <div className="warning__close-item"></div>
                    </div>
                    <button className="warning__btn btn">Продолжить</button>
                </div>

                <div className="action"
                //style="display: none"
                >
                    <div className="action__title">Выберите действие</div>
                    <div className="action__close">
                        <div className="action__close-item"></div>
                        <div className="action__close-item"></div>
                    </div>
                    <div className="action__close-block">
                        <button className="action__button btn">Отключится</button>
                        <button className="action__button action__button-green btn">
                            Обновить расписание
          </button>
                    </div>
                    <div className="action__text">
                        Расписание можно также обновить скроллом вверх/вниз
        </div>
                </div>
            </div>
        </div>
    );
};


export default Modals;
