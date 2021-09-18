import axios from 'axios'

const CountryService = async (coords) => {
  const apiKey = '55082dd8fb7e473db8dab86a33518599';
  const { latitude, longitude } = coords;

  const apiUrl = process.envREACT_APP_LOCATION_API_URL

  const requestUrl = process.REACT_APP_LOCATION_API_KEY
  + '?'
  + 'key=' + apiKey
  + '&q=' + encodeURIComponent(latitude + ',' + longitude)
  + '&pretty=1'
  + '&no_annotations=1';

  let results = await axios.get(requestUrl)
  console.log("results")
  return results.data.results[0].components.country_code
}

export default CountryService