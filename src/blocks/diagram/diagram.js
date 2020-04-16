import ApexCharts from 'apexcharts';

var options = {
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        size: '90%',
        labels: {
          show: true,
          name: {
            show: false
          },
          value: {
            show: true,
            color: '#BC9CFF',
            formatter: function(val) {
              return val + `\t` + 'голосов';
            }
          }
        }
      }
    }
  },
  series: [260, 260, 520],
  labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  legend: {
    markers: {
      fillColors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#919191']
    }
  },
  fill: {
    colors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#919191']
  },
  chart: {
    type: 'donut'
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};

var chart = new ApexCharts(document.querySelector('.diagram'), options);
chart.render();
