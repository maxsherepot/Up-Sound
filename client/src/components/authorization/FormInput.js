import React from 'react';



const FormInput = props => {
    const { htmlFor, label, value, changeHandler, type, id, name, errors } = props;

    return (
        <div className="form-outline mb-4">
            <label
                className="form-label text-light mb-0"
                htmlFor={htmlFor}>{label}</label>
            <input
                value={value}
                onChange={event => changeHandler(event)}
                type={type}
                id={id}
                className="form-control"
                name={name}
            />
            {errors && <span className="position-absolute text-danger">{errors}</span>}
        </div>
    );
};



export default FormInput;