const chartOneLabels = ["Oct", "Nov", "Dec", "Jan", "Feb"];

const chartOneData = {
  labels: chartOneLabels,
  datasets: [
    {
      label: "Total Schedule",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [7, 10, 5, 10, 15],
      barThickness: 5,
      backgroundColor: ["red", "#6e317a", "#6e317a", "#6e317a", "#6e317a"],
    },
  ],
};

const chartOneConfig = {
  type: "bar",
  data: chartOneData,
  options: {
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          minRotation: 45,
          maxRotation: 45,
          font: {
            size: 16,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
          },
          callback: function (value, index, ticks) {
            if (index === ticks.length - 1) {
              return value + "+";
            } else {
              return value;
            }
          },
        },
      },
    },
  },
};

const chartOne = new Chart(
  document.getElementById("chart-one"),
  chartOneConfig
);

const chartTwoLabels = ["Completed", "Canceled"];

const chartTwoData = {
  labels: chartTwoLabels,
  datasets: [
    {
      label: "This Month Queue",
      data: [10, 9],
      barThickness: 5,
      backgroundColor: ["red", "#6e317a"],
    },
  ],
};

const chartTwoConfig = {
  type: "bar",
  data: chartTwoData,
  options: {
    indexAxis: "y",
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
          },
          callback: (value, index, ticks) => {
            if (index === ticks.length - 1) {
              return value + "+";
            } else {
              return value;
            }
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 16,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  },
};

const chartTwo = new Chart(
  document.getElementById("chart-two"),
  chartTwoConfig
);

const charThreeLabels = ["Mar", "April", "May"];

const chartThreeData = {
  labels: charThreeLabels,
  datasets: [
    {
      label: "Total Revenue",
      data: [1, -5, 4],
      tension: 0.2,
      fill: {
        target: "origin",
        above: "rgba(110, 49, 122, 0.2)", // Area will be red above the origin
        below: "rgba(255, 0, 0, 0.2)", // And blue below the origin
      },
    },
  ],
};

const chartThreeConfig = {
  type: "line",
  data: chartThreeData,
  options: {
    responsive: true,
    elements: {
      line: {
        borderWidth: 1,
        borderColor: '#6e317a'
      },
      point: {
        pointRadius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 16,
          },
          callback: (value, index, ticks) => {
            return "$" + value + "k";
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
    },
  },
};

const chartThree = new Chart(
  document.getElementById("chart-three"),
  chartThreeConfig
);
