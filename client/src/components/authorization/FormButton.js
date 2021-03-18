import React from 'react';



const FormButton = props => {
    const { onClick,loading,className,title} = props;


    return (
        <button
            onClick={event => onClick(event)}
            disabled={loading}
            className={className}
        >{title}</button>
    );
};


export default FormButton