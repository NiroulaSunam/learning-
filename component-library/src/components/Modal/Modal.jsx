import styles from './Modal.module.css'

function Modal({title, content, isOpen, onClose}) {
    return (
        <div>
            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.content}>{content}</p>
                        <button onCLick={onClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal