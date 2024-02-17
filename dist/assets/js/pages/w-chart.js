'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});
function floatchart() {
  (function () {
    var options = {
      chart: { type: 'bar', height: 100, sparkline: { enabled: true } },
      colors: ['#1890ff'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [
            220, 230, 240, 220, 225, 215, 205, 195, 185, 150, 185, 195, 80, 205, 215, 225, 240, 225, 215, 205, 80, 215, 225, 240, 215, 210,
            190
          ]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-1'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'area', height: 100, sparkline: { enabled: true } },
      colors: ['#ff4d4f'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [1800, 1500, 1800, 1700, 1400, 1200, 1000, 800, 600, 500, 600, 800, 500, 700, 400, 600, 500, 600]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'bar', height: 100, sparkline: { enabled: true } },
      colors: ['#faad14'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [
            220, 230, 240, 220, 225, 215, 205, 195, 185, 150, 185, 195, 80, 205, 215, 225, 240, 225, 215, 205, 80, 215, 225, 240, 215, 210,
            190
          ]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'area', height: 100, sparkline: { enabled: true } },
      colors: ['#1890ff'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [100, 140, 100, 240, 115, 125, 90, 100, 80, 150, 160, 150, 170, 155, 150, 160, 145, 200, 140, 160]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        curve: 'straight',
        width: 1.5
      },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-4'), options);
    chart.render();
  })();

  (function () {
    var options = {
      chart: {
        height: 450,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1890ff', '#13c2c2'],
      series: [{
        name: 'Page Views',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Sessions',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }
    };
    var chart = new ApexCharts(document.querySelector('#visitor-chart'), options);
    chart.render();
    var options1 = {
      chart: {
        height: 450,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1890ff', '#13c2c2'],
      series: [{
        name: 'Page Views',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
      }, {
        name: 'Sessions',
        data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }
    };
    var chart = new ApexCharts(document.querySelector('#visitor-chart-1'), options1);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 365,
        toolbar: {
          show: false
        }
      },
      colors: ['#13c2c2'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        data: [80, 95, 70, 42, 65, 55, 78]
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#income-overview-chart'), options);
    chart.render();
  })();

  (function () {
    var options = {
      chart: {
        type: 'line',
        height: 340,
        toolbar: {
          show: false
        }
      },
      colors: ['#faad14'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      stroke: {
        curve: 'smooth',
        width: 1.5
      },
      grid: {
        strokeDashArray: 4
      },
      series: [{
        data: [58, 90, 38, 83, 63, 75, 35, 55]
      }],
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-05-19T00:00:00.000Z',
          '2018-06-19T00:00:00.000Z',
          '2018-07-19T01:30:00.000Z',
          '2018-08-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-10-19T04:30:00.000Z',
          '2018-11-19T05:30:00.000Z',
          '2018-12-19T06:30:00.000Z'
        ],
        labels: {
          format: 'MMM'
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
    };
    var chart = new ApexCharts(document.querySelector('#analytics-report-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 355,
        toolbar: {
          show: false
        }
      },
      colors: ['#1890ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [{
        data: [100, 40, 60, 40, 40, 40, 80, 40, 40, 50, 40, 40]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
    };
    var chart = new ApexCharts(document.querySelector('#income-overview-tab-chart'), options);
    chart.render();
    var options1 = {
      chart: {
        type: 'area',
        height: 355,
        toolbar: {
          show: false
        }
      },
      colors: ['#1890ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [{
        data: [100, 20, 60, 20, 20, 80, 20]
      }],
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
    };
    var chart = new ApexCharts(document.querySelector('#income-overview-tab-chart-1'), options1);
    chart.render();
  })();

  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 430,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          borderRadius: 4
        }
      },
      stroke: {
        show: true,
        width: 8,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 10,
          height: 10,
          radius: '50%',
          offsexX: 2,
          offsexY: 2
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        }
      },
      colors: ['#faad14', '#1890ff'],
      series: [{
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145]
      }, {
        name: 'Revenue',
        data: [120, 45, 78, 150, 168, 99]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
    }
    var chart = new ApexCharts(document.querySelector('#sales-report-chart'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 10,
        markers: {
          width: 8,
          height: 8,
          radius: '50%'
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false
      },
      stroke: {
        colors: ['transparent'],
        width: 1
      },
      colors: ['#141414', '#13c2c2', '#1890ff'],
      series: [{
        name: 'Direct',
        data: [21, 17, 15, 13, 15, 13, 16, 13, 8, 14, 11, 9, 7, 5, 3, 3, 7]
      },
      {
        name: 'Referral',
        data: [28, 30, 20, 26, 18, 27, 22, 28, 20, 21, 15, 14, 12, 10, 8, 18, 16]
      },
      {
        name: 'Social',
        data: [50, 51, 60, 54, 53, 48, 55, 40, 44, 42, 44, 44, 42, 40, 42, 32, 16]
      }],
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
    }
    var chart = new ApexCharts(document.querySelector('#acquisition-chart'), options);
    chart.render();
  })();
}
