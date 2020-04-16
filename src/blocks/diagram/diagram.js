import ApexCharts from 'apexcharts';

var options = {
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      customScale: 1.08,
      offsetX: -10,
      offsetY: 5,
      donut: {
        size: '90%',
        labels: {
          show: true,
          name: {
            show: false
          },
          value: {
            show: true,
            fontSize: '24px',
            fontFamily: 'OpenSans, sans-serif',
            fontWeight: 'bold',
            color: '#BC9CFF'
          },
          total: {
            show: true
          }
        }
      }
    }
  },
  series: [260, 260, 520],
  labels: ['Удовлетворительно', 'Хорошо', 'Великолепно', 'Разочарован'],
  legend: {
    fontSize: '14px',
    fontFamily: 'Montserrat, sans-serif',
    offsetY: 0,
    markers: {
      width: 10,
      height: 10,
      fillColors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#919191']
    },
    itemMargin: {
      horizontal: 0,
      vertical: 4
    }
  },
  fill: {
    colors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#919191'],
  },
  chart: {
    type: 'donut'
  },
  tooltip: {
    enabled: false
  }
};

var chart = new ApexCharts(document.querySelector('.diagram'), options);
chart.render();
