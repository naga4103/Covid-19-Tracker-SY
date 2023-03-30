import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import fetchData from "./api";
import Statistics from "./Statistics";

interface ICovidData {
  infected: number;
  tested: string;
  recovered: number;
  deceased: number;
  country: string;
  moreData: string;
  historyData: string;
  sourceUrl: string;
  lastUpdatedApify: string;
}

function App() {
  const [covidData, setCovidData] = useState<ICovidData[]>([]);
  const [country, setCountry] = useState<string>("Algeria");
  const [cardData, setCardData] = useState<ICovidData>({
    infected: 271023,
    tested: "NA",
    recovered: 182526,
    deceased: 6881,
    country: "Algeria",
    moreData: "",
    historyData: "",
    sourceUrl: "",
    lastUpdatedApify: "23-03-2034",
  });

  console.log("covidData before useEffect", covidData);
  console.log("Country before useEffect", country);
  console.log("Card Data before useEffect", cardData);

  useEffect(() => {
    (async () => {
      console.log("1.Calling  useEffect()");
      const response = await fetchData();
      console.log("Data is ", response);
      if (response?.status === 200) {
        console.log("Yesss");
        // console.log(response.data);
        setCovidData(response?.data);
      }
    })();
  }, []);

  // useEffect(() => {
  //   (() => {
  //     console.log("Setting the Country...", country);
  //     console.log("Covid Data", covidData);

  //     const filterData = covidData.filter((f) => {
  //       return f.country === country;
  //     });
  //     console.log("Filter Data", filterData);
  //     setCardData(filterData[0]);
  //   })();
  // }, [covidData, country]);

  // console.log("Filter Data", cardData);

  return (
    <div className="bg-[#fafafa] flex flex-col items-center  min-h-[100vh] p-10">
      <img
        alt="Covid-19"
        src="https://i.ibb.co/7QpKsCX/image.png"
        className="mb-10"
      />

      <Cards {...cardData} />

      <form className="mb-10">
        <label htmlFor="country" className="mr-5">
          Choose a Country:
        </label>
        <select
          name="country"
          id="country"
          className="border-2 border-transparent"
          onChange={(e) => {
            console.log("Country value onChange", e.target.value);
            setCountry(e.target.value);
            const filterData = covidData.filter((f) => {
              return f.country === country;
            });
            console.log("Filter Data", filterData);
            setCardData(filterData[0]);
          }}
        >
          {covidData.map((eachData, index) => {
            return (
              <option
                value={eachData.country}
                key={index}
                defaultValue={"Algeria"}
              >
                {eachData.country}
              </option>
            );
          })}
        </select>
      </form>

      <Statistics {...cardData} />
    </div>
  );
}

export default App;
