import React from "react";

import CountUp from "react-countup";

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

const Cards: React.FunctionComponent<ICovidData> = (props: ICovidData) => {
  console.log("Props in Cards", props);
  //   console.log("into an array", Object.values(props));
  //   const arrayType = Object.values(props);
  const dataFinal = { ...props };
  console.log("dataFinal in Cards", dataFinal);

  return (
    <div className="flex flex-row justify-center items-center space-x-9 mb-10 ">
      <div className="flex flex-col bg-white   border-2 border-b-[10px] border-b-indigo-400 rounded-lg w-80 h-40 pl-6 pt-3 pr-9 drop-shadow-lg">
        <p className="text-blue-600 font-sans mb-2 text-[23px]">Infected</p>
        {/* <span>{dataFinal.infected}</span> */}

        <CountUp
          start={0}
          end={dataFinal.infected}
          duration={2.5}
          separator=","
          className="font-bold italic mb-1"
        />
        <p className="font-sans italic mb-1">
          {new Date(dataFinal.lastUpdatedApify).toDateString()}
        </p>
        <p className="font-sans">Number of active cases of covid-19</p>
      </div>

      <div className="flex flex-col bg-white   border-2 border-b-[10px] border-b-green-300 rounded-lg w-80 h-40 pl-6  pr-9 drop-shadow-lg">
        <p className="text-blue-600 font-sans mb-2 text-[23px]">Recovered</p>
        <CountUp
          start={0}
          end={dataFinal.recovered}
          duration={2.5}
          separator=","
          className="font-bold italic mb-1"
        />
        <p className="font-sans italic mb-1">
          {new Date(dataFinal.lastUpdatedApify).toDateString()}
        </p>
        <p className="font-sans">Number of active cases of covid-19</p>
      </div>
      <div className="flex flex-col bg-white  border-2 border-b-[10px] border-b-red-300 rounded-lg   w-80 h-40 pl-6  pr-9 drop-shadow-2xl">
        <p className="text-blue-600 font-sans mb-2 text-[23px]">Deaths</p>
        <CountUp
          start={0}
          end={dataFinal.deceased}
          duration={2.5}
          separator=","
          className="font-bold italic mb-1"
        />
        <p className="font-sans italic mb-1">
          {new Date(dataFinal.lastUpdatedApify).toDateString()}
        </p>
        <p className="font-sans">Number of active cases of covid-19</p>
      </div>
    </div>
  );
};

export default Cards;
