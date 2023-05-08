import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div>
          
            <div className={`alert alert-${props.alertType} alert-dismissible fade show my-3 mx-3`} role="alert">
                <strong>{capitalize(props.alertType)}  !</strong>&nbsp; &nbsp;&nbsp;{props.alertMsg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </div>
    )
}
