import "./Modal.scss"

function Modal({text, reference}) {
    return (
        <dialog ref={reference} onClick={e => reference.current.close()} className="modal">
            {text}
        </dialog>
    )
}

export default Modal