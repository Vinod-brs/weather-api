import axios from 'axios';

const BaseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const Key = "60bbd59ec7556e88c0f6b5a2080aebaa";
 // https://api.openweathermap.org/data/2.5/weather?q=kakinada&units=metric&APPID=60bbd59ec7556e88c0f6b5a2080aebaa

export const HttpGet = async(aParams) => {
  const oURL = BaseURL + aParams + "&units=metric&APPID=" + Key;
  let oResponse = await axios.get(oURL);
  return oResponse?.data;
}