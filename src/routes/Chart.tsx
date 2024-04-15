import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
  isDark: boolean;
}

function Chart({coinId, isDark}:ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(
    ["ohlcv", coinId], 
    () => fetchCoinHistory(coinId),
    /* {
      refetchInterval: 10000
    } */
  );
  return (
    <div>{isLoading ? 
      (
        "Loading Chart"
      ) : (
        <ApexCharts 
          type='line' 
          series={[
            {
              name: "Price",
              data: data?.map(price => parseFloat(price.close)) ?? []
            }
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light"
            },
            chart : {
              width: 500, 
              height: 300,
              toolbar: {
                show: false
              },
              background: 'transparent'
            },
            grid: {show: false},
            stroke: {
              curve: 'smooth',
              width: 5
            },
            yaxis: {show: false},
            xaxis: {
              type: 'datetime',
              axisBorder: {show: false},
              axisTicks: {show: false},
              labels: {show: false},
              categories: data?.map(price => price.time_close)
            },
            fill: {
              type: 'gradient', 
              gradient:{gradientToColors: ['#0be881'], stops: [0, 100]}
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (value: number) => `$ ${value.toFixed(3)}`
              }
            }
          }}
        />
      )}
    </div>)
}

export default Chart;