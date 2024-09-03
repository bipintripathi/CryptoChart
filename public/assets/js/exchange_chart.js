var options = {
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      ]
    }],
    chart: {
      toolbar: {
        show: false
      },
      type: 'candlestick',
      height: '100%',
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3EBF81',
          downward: '#FC774A'
        }
      }
    },

    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#D2D9E4'
        }
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tooltip: {
        enabled: false,
        // followCursor: true
      },
      labels: {
        show: false,
      }
    },
    grid: {
      borderColor: '#242F40',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
    },
    tooltip: {
      enabled: true,
      theme: false
    },
  };

  var chart = new ApexCharts(document.querySelector("#exchangeChart"), options);
  chart.render();

  // Deep chart

  var deepoptions = {
    chart: {
      height: '100%',
      type: "area",
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 88, 75, 91, 73, 62, 93, 66, 72, 55, 63, 67, 94, 45]
      }
    ],
    tooltip: {
      enabled: true,
      theme: false
    },
    colors: ['#3EBF81'],
    fill: {
      colors: '#11764B',
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "vertical",
        shadeIntensity: 0.3,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: []
      },
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: '#D2D9E4'
        }
      },
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
      ],

    },
    yaxis: {
      tooltip: {
        enabled: false,
        // followCursor: true
      },
      labels: {
        show: false,
      },
    },
  };

  var deepchart = new ApexCharts(document.querySelector("#deepChart"), deepoptions);

  deepchart.render();



  // donut chart
  var donutoptions = {
    series: [30, 55, 51],
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