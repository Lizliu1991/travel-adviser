import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

//accept bounds
export const getPlacesData = async (sw,ne) => {
  
    try {
        //request, destructuring response
        const { data: {data} }= await axios.get(URL,{
            params: {
                  //fetch data within the page, bottom left, top right...
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': '0fdf5d5f62mshe82f5f4a528bb4ap1ea7bejsn930ceca804b9',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })
        return data
    } catch (error) {
console.log("Error fetching data");
    }
}