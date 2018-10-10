import { types } from './searchAction';

const defaultState = {
    city: '',
    temp: 'F',
    pressure: 0,
    humidity: 0,
    lowestTemp: 'F',
    highestTemp: 'F',
    lat: 0,
    long: 0,
    windSpeed: 'mph',
    cityName: 'City Name',
    weatherIcon: 'Weather Icon',
    prevSearch: []
};

export default function currentSearch(state = defaultState, action) {
   const { type, payload } = action;

   switch(type) {
       case types.NEW_CALL: {
           console.log(payload);
           return {
               ...state,
                temp: `${payload.data.main.temp} F`,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowestTemp: `${payload.data.main.temp_min} F`,
                highestTemp: `${payload.data.main.temp_max} F`,
                lat: payload.data.coord.lat,
                long: payload.data.coord.lon,
                windSpeed: `${payload.data.wind.speed} mph`,
                cityName: payload.data.name,
                weatherIcon: `https://openweathermap.org/img/w/${payload.data.weather[0].icon}.png`,
                prevSearch: [...state.prevSearch, 
                    {
                        name: payload.data.name,
                        date: new Date().toLocaleDateString(), 
                        time: new Date().toLocaleTimeString()
                    }
                ]      
                
           }
       }

       case types.NEW_INPUT: {
           return {
                ...state,
                city: payload
           };
       }

       case 'NEW_CALL_REJECTED': {
           return {
               ...state,
               prevSearch: [...state.prevSearch, 
                {
                    name: 'City Not Found Try Again!',
                    date: new Date().toLocaleDateString(), 
                    time: new Date().toLocaleTimeString()
                }
            ] 
           }
       }

       default: {
           return state;
       }
   }
}