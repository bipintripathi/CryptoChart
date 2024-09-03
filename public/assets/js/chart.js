const ctx1 = document.getElementById("chart_1").getContext("2d");

function createGradient(ctx, colors) {
  var gradient = ctx.createLinearGradient(0, 0, 10, 300);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  return gradient;
}
function createGradientSm(ctx, colors) {
  var gradient = ctx.createLinearGradient(10, 10, 10, 55);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  return gradient;
}
var myChart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [42, 25, 50, 37, 32, 50, 54, 62, 28, 36, 48, 42],
        fill: false,
        backgroundColor: createGradient(ctx1, ["#10824F", "#171F2A"]),
        borderColor: "#3EBF81",
        borderWidth: 4,
        lineTension: 0.4,
      },
      {
        data: [14, 25, 60, 35, 42, 30, 44, 39, 38, 55, 38, 22],
        fill: true,
        backgroundColor: createGradient(ctx1, ["#10824F", "#171F2A"]),
        borderColor: "#3EBF81",
        borderWidth: 4,
        lineTension: 0.4,
      },
    ],
  },
  options: {
    animation: {
      easing: "easeInOutQuad",
      duration: 1200,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        // Disable the on-canvas tooltip
        enabled: false,

        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.innerHTML = "<table></table>";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set caret Position
          tooltipEl.classList.remove("above", "below", "no-transform");
          if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
            tooltipEl.classList.add("no-transform");
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
            const titleLines = tooltipModel.title || [];
            const bodyLines = tooltipModel.body.map(getBody);

            let innerHtml = "<thead>";

            titleLines.forEach(function (title) {
              innerHtml +=
                '<tr><th class="primary fw-bold">' + "Bitcoin" + "</th></tr>";
            });
            innerHtml += "</thead><tbody>";

            bodyLines.forEach(function (body, i) {
              const colors = tooltipModel.labelColors[i];
              let style = "background:" + colors.backgroundColor;
              style += "; border-color:" + colors.borderColor;
              style += "; border-width: 2px";
              const span =
                '<span class="heading bg-transparent text" style="' +
                style +
                '">' +
                "$220,342,12" +
                "</span>";
              innerHtml +=
                '<tr><td class="d-flex gap-3 align-items-center">' +
                span +
                "</td></tr>";
            });
            innerHtml += "</tbody>";

            let tableRoot = tooltipEl.querySelector("table");
            tableRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

          // Display, position, and set styles for font
          tooltipEl.style.opacity = 1;
          tooltipEl.style.padding = "10px 20px";
          tooltipEl.style.backgroundColor = "#212B39";
          tooltipEl.style.borderRadius = "15px";
          tooltipEl.style.position = "absolute";
          tooltipEl.style.left =
            position.left +
            window.pageXOffset +
            tooltipModel.caretX -
            150 +
            "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY - 80 + "px";
          tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding =
            tooltipModel.padding + "px " + tooltipModel.padding + "px";
          tooltipEl.style.pointerEvents = "none";
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: "easeInOutQuad",
      duration: 1200,
    },
    scales: {
      y: {
        ticks: {
          color: "#ffffff",
          callback: function (value, index, values) {
            return value + "K"; // add a percent sign to each label
          },
        },
        grid: {
          color: "#242F40",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#242F40",
        },
      },
    },
    elements: {
      point: {
        radius: 2,
        hoverRadius: 5,
      },
    },
  },
});

// Chart two charts
const ctx2 = document.getElementById("chart_2").getContext("2d");
const ctx3 = document.getElementById("chart_3").getContext("2d");
const ctx4 = document.getElementById("chart_4").getContext("2d");
const ctx5 = document.getElementById("chart_5").getContext("2d");

var myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: [20, 14, 22, 17, 27, 19, 20, 16],
        fill: true,
        backgroundColor: createGradientSm(ctx1, ["#18975B", "#171F2A"]),
        borderColor: "#0CAF60",
        borderWidth: 3,
        lineTension: 0.3,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 1200,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});
var myChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ],
    datasets: [
      {
        data: [1, 8, 16, 20, 14, 22, 17, 27, 19, 12, 25, 20, 16, 20, 1],
        fill: true,
        backgroundColor: createGradientSm(ctx3, ["#C86341", "#171F2A"]),
        borderColor: "#FC774A",
        borderWidth: 3,
        lineTension: 0.3,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 1200,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});
var myChart4 = new Chart(ctx4, {
  type: "line",
  data: {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ],
    datasets: [
      {
        data: [1, 8, 16, 20, 24, 12, 27, 7, 19, 22, 20, 9, 16, 20, 16],
        fill: true,
        backgroundColor: createGradientSm(ctx4, ["#18975B", "#171F2A"]),
        borderColor: "#0CAF60",
        borderWidth: 3,
        lineTension: 0.3,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 1200,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});
var myChart5 = new Chart(ctx5, {
  type: "line",
  data: {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ],
    datasets: [
      {
        data: [4, 8, 3, 24, 4, 12, 17, 27, 29, 12, 20, 24, 6, 20, 24],
        fill: true,
        backgroundColor: createGradientSm(ctx5, ["#18975B", "#171F2A"]),
        borderColor: "#0CAF60",
        borderWidth: 3,
        lineTension: 0.3,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 1200,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});

var donutoptions = {
  series: [20, 38, 27],
  chart: {
    type: 'donut',
    height: '220px'
  },
  colors: ['#0CAF60', '#FC774A', '#424A55',],
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 320,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  stroke: {
    show: false
  },
  legend: {
    show: false
  },

  plotOptions: {
    pie: {
      donut: {
        size: '50%',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Rubik',
            color: '#dfsda',
            offsetY: -6
          },
          value: {
            show: true,
            fontSize: '30px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#fff',
            offsetY: -6,
            formatter: function (val) {
              return val + '%'
            }
          },
          total: {
            show: true,
            color: '#171F2A',
            formatter: function (w) {
              var total = w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0);
              return total + "% ";
            }
          }
        }
      }
    }
  }
};

var dchart = new ApexCharts(document.querySelector("#donutchart"), donutoptions);
dchart.render();
