import axios from 'axios'

const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;population;currencies;'

const getAllcountries = async () => {
  try {
    const countries = await axios.get(url)
    return countries.data

  } catch (error) {
    console.log(error)
  }
}
export default{
    getAllcountries
}
