import React from "react";

// import { Line, Bar } from "react-chartjs-2";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const Chart: React.FunctionComponent<ICovidData[]> = (props: ICovidData[]) => {
  return <>Hii</>;
};

export default Chart;
