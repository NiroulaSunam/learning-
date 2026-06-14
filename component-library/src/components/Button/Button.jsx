import styles from './Button.module.css' // Since we are using CSS Modules, we have to import our styles and acess classes through that import 

function Button({ label, variant = 'primary', size = 'medium', disabled = false, onClick }) {
    return (
        <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`} 
        disabled={disabled}
        onClick={onClick}
        >   
        {/* here styles.button will always apply. and styles[variant] uses bracket notation to dynamically look up the class. */}
        {/* disable the button from being clicked */}    
        {/* disabled ? styles.disabled : '' is a ternary opeator. its saying if disabled is true, apply styles.disabled as class otherwise apply an empty string(nothing) */}
            {label}
        </button>
    )
}
export default Button