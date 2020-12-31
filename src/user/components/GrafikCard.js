import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";



const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "DD/MM/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
const buildChartData = (dataGrafik, casesType = "jumlah_positif") => {
  let chartDatax = [];
  let chartDatay = [];

  dataGrafik.map(data => {
    const { key_as_string: date } = data
    let d = new Date(date);
    let dDate = d.toLocaleDateString('pt-PT');
    // let newDataPointx = dDate;
    // let newDataPointy = data[casesType];
    chartDatax.push(dDate);
    chartDatay.push(data[casesType]);
  })
  const chartData = { x: chartDatax, y: chartDatay }
  return chartData;
};

const GrafikCard = ({ dataGrafik }) => {
  const [dataGrafik2, setDataGrafik] = useState({});
  const coba1 = buildChartData(dataGrafik, "jumlah_positif_kum");
  const chart = () => {
    setDataGrafik(coba1)
  }

  useEffect(() => {
    chart()
  }, []);


  // labels: ['senin', 'selasa', 'rabu', 'kamis', 'jumat'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //       ],
  //       borderWidth: 4
  //     }]

  const styles = {
    marginTop: "1.2rem",
  };

  return (
    <div
      className="col s12 center-align blue-grey lighten-5 rounded black-text "
      style={styles}
    >
      <div className="card">
        <div className="card-image peta ">
          {dataGrafik2 !== null  && (
            console.log(dataGrafik2.y),
            <Line
              data={{
                labels: dataGrafik2.x,

                datasets: [
                  {
                    label: '# of Votes',

                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                    data: dataGrafik2.y,
                  },
                ],
              }}
              options={options}
            />
          )
          }

        </div>
      </div>
    </div>
  );
};

export default GrafikCard;
