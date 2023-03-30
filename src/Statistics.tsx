import React from "react";
import { BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const Statistics = (props: any) => {
  console.log("Statisics props", props);

  const finalData = [props];

  const dataFormatter = (number: any) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`;
    }
    return number.toString();
  };
  return (
    <div className="border-2 border-indigo-600">
      <BarChart
        width={900}
        height={400}
        data={finalData}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="country"
          tick={{
            stroke: "#6c757d",
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: "Roboto",
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: "#6c757d",
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: "Roboto",
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: "center",
            fontSize: 12,
            fontFamily: "Roboto",
          }}
        />
        <Bar
          dataKey="infected"
          name="Infected"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize={60}
        />
        <Bar
          dataKey="recovered"
          name="Recovered"
          fill="#90ee90"
          radius={[10, 10, 0, 0]}
          barSize={60}
        />
        <Bar
          dataKey="deceased"
          name="Deceased"
          fill="#ffcccb"
          radius={[10, 10, 0, 0]}
          barSize={60}
        />
        {/* <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
          barSize="20%"
        /> */}
      </BarChart>
    </div>
  );
};

export default Statistics;
