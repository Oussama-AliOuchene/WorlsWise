import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from "./Message"
function CountryList({citys , isLoding}) {
    if(isLoding) return <Spinner />
    console.log(citys.length)
    if(!citys.length) return <Message message="Add your first city by clicking on a city on the map"/>
    const countries = citys.reduce((arr , city) =>{
        if(!arr.map(el => el.country).includes(city.country)) return [...arr , {country : city.country , emoji : city.emoji}]
        else
        return arr;
    } , []);
    return (
       
        <div>
            
            <ul className={styles.countryList}>
               {countries.map(country => <CountryItem country={country} />)}
            </ul>
        </div>
    )
}

export default CountryList
