import styles from './Card.module.css'
import Button from '../Button/Button'

function Card({ title, description, image, buttonLabel, onButtonClick, size='medium'}) {
    return (
        <div className={`${styles.card} ${styles[size]}`}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Button label={buttonLabel} onClick={onButtonClick} />
            </div>
        </div>
    )
}

export default Card