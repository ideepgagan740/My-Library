import React from 'react'

function Alert(props) {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">{props.alert}</h4>
            </div>
        </div>
    )
}

export default Alert
