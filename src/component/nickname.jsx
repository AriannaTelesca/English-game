import React from "react";
import './popup.css';

const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;