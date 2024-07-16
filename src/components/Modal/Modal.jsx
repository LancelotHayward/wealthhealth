import "./Modal.scss"

function Modal({modalStatus=false, setModalStatus, text}) {
    // Usually dialog's "open" doesn't have a value, but React currently omits attributes when their value is falsy.
    return (
        <dialog open={modalStatus} onClick={e => setModalStatus(false)} className="modal">
            {text}
        </dialog>
    )
}

export default Modal