import styles from './Input.module.css'

function Input({ label, value, onChange, placeholder, error}) {
    return (
        <div className={styles.wrapper}>
           <label className={styles.label}>{label}</label>
           <input
                className={`${styles.input} ${error ? styles.error : ''}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    )
}

export default Input 