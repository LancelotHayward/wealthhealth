import "./Modal.scss"

function Modal({modalStatus=false, setModalStatus, text}) {
    if (!modalStatus) return
    return (
        <dialog open onClick={e => setModalStatus(false)} className="modal">
            {text}
        </dialog>
    )
}

export default Modal