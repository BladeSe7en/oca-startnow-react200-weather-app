import { connect } from "react-redux";
import CityInfo from "./CityInfo";

function mapStoreToProps(store) {
  return {
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    lat: store.search.lat,
    long: store.search.long,
    windSpeed: store.search.windSpeed,
    cityName: store.search.cityName,
    weatherIcon: store.search.weatherIcon
  };
}

export default connect(mapStoreToProps)(CityInfo);