import { useContext } from "react";
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from "./Message";
import { CitiesContext } from "../contexts/CitiesContext";

function CityList() {
    const { cities, isLoading } = useContext(CitiesContext);

    if (isLoading) return <Spinner />;
    
    return (
        <div>
            <ul className={styles.cityList}>
                {cities.map(city => <CityItem city={city} key={city.id} />)}
            </ul>
        </div>
    );
}

export default CityList;
