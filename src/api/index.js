import axios from "axios";
const url =
  "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true";

const fetchData = async () => {
  try {
    // const response = await axios.get(url);
    // console.log(response);

    // const {
    //   data: { country, deceased, infected, lastUpdatedApify, recovered },
    // } = await axios.get(url);
    // const modifiedData = {
    //   country,
    //   deceased,
    //   infected,
    //   lastUpdatedApify,
    //   recovered,
    // };

    const data = await axios.get(url);

    return data;
  } catch (error) {}
};

export default fetchData;
