import { Chart } from "react-google-charts";

export const data = [
  ["Dia", "Receitas", "Despesas"],
  [1, 37.8, 80.8],
  [2, 30.9, 69.5],
  [3, 25.4, 57],
  [4, 11.7, 18.8],
  [5, 11.9, 17.6],
  [6, 8.8, 13.6],
  [7, 7.6, 12.3],
  [8, 12.3, 29.2],
  [9, 16.9, 42.9],
  [10, 12.8, 30.9],
];

export const options = {
  hAxis: {
    title: "Dia",
  },
  vAxis: {
    title: "R$",
  },
  series: {
    1: { curveType: "Function" },
  },

  colors: ["#5093FF", "#db1b1b"],
};

export function Charts() {
  return (
    <Chart
      chartType="LineChart"
      width="1220px"
      height="400px"
      font-family="Montserrat"
      data={data}
      options={options}
    />
  );
}
