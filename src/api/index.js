import axios from "axios";




//accept bounds
export const getPlacesData = async (type,sw,ne) => {
  
    try {
        //request, destructuring response
        const { data: {data} }= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
                  //fetch data within the page, bottom left, top right...
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })
        return data
    } catch (error) {
console.log("Error fetching data");
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
 const { data } = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/current', {
  params: {
    lon: lng,
     lat: lat
    },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
 })
 return data
  } catch (error) {
console.log("Error fetching weather data")
  }
}