const ctx2 = document.getElementById("chart_2").getContext("2d");
const ctx3 = document.getElementById("chart_3").getContext("2d");
const ctx4 = document.getElementById("chart_4").getContext("2d");
const ctx5 = document.getElementById("chart_5").getContext("2d");

function createGradientSm(ctx, colors) {
  var gradient = ctx.createLinearGradient(10, 10, 10, 55);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  return gradient;
}

var myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: [20, 14, 22, 17, 27, 19, 20, 16],
        fill: true,
        backgroundColor: createGradientSm(ctx2, ["#18975B", "#171F2A"]),
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
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
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
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
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
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
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
const stars = document.querySelectorAll('.star');
stars.forEach(star => star.addEventListener('click', function () {
  star.classList.toggle('secondary')
}))