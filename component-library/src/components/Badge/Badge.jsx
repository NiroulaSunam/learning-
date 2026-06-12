import styles from './Badge.module.css' // Since we are using CSS Modules, we have to import our styles and acess classes through that import 

function Badge({ label, variant="primary", size="medium" }) {
    return (
       <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
            {label}
       </span>
    )
}
export default Badge