import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
function Map() {
    const [searchParams , setSearchParams] = useSearchParams();
    const navigation = useNavigate();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return (
        <div className={styles.mapContainer} onClick={()=> navigation("form")}>
            Map
            <h1>position {lat} , {lng}</h1>
            <button onClick={() => setSearchParams({lat : 50 , lng : 30})}>chang pos</button>
        </div>
    )
}

export default Map
