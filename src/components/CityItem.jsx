import styles from './CityItem.module.css'
import { Link } from 'react-router-dom';
function CityItem({city}) {
    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
      }).format(new Date(date));
    const {citeName , emoji , date , id , position } = city;
    
    return (
        <div>
            <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <li>
                    <span className={styles.emoji}>{emoji}</span>
                    <span className={styles.name}>{citeName}</span>
                    <span className={styles.date}>{formatDate(date)}</span>
                    <button className={styles.deleteBtn}>&times;</button>
                </li>
            </Link>
        </div>
    )
}

export default CityItem
