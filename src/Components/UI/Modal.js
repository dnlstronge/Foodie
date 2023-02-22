import { ReactDOM } from "react";
import React, { Fragment }from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div classNam={classes.backdrop}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal( <Backdrop/>)}
            {ReactDOM.createPortal( <ModalOverlay>{props.children}</ModalOverlay>)}
        </Fragment>
    )
};

export default Modal;