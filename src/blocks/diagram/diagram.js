// import ApexCharts from 'apexcharts';
import Donut from './Donut/Donut';

$(document).ready(() => {
  const config = {
    size: 70,
    total: 1040,
    labels: {
      show: true,
      unit: 'голосов'
    },
    sectors: [
      {
        name: 'Великолепно',
        value: 520,
        gradient: [
            { offset: 0, color: '#FFE39C' },
            { offset: 100, color: '#FFBA9C' }
        ]
      },
      {
        name: 'Хорошо',
        value: 260,
        gradient: [
            { offset: 0, color: '#6FCF97' },
            { offset: 100, color: '#66D2EA' }
        ]
      },
      {
        name: 'Удовлетворительно',
        value: 260,
        gradient: [
            { offset: 0, color: '#BC9CFF' },
            { offset: 100, color: '#8BA4F9' }
        ]
      },
      {
        name: 'Разочарован',
        value: 0,
        gradient: [
          { offset: 0, color: '#919191' },
          { offset: 100, color: '#3D4975' }
        ]
      }
    ]
  };

  $('.js-diagram').each((i, root) => new Donut(root, config));
});
// const options = {
//   dataLabels: {
//     enabled: false
//   },
//   plotOptions: {
//     pie: {
//       customScale: 1.08,
//       offsetX: -10,
//       offsetY: 5,
//       donut: {
//         size: '90%',
//         labels: {
//           show: true,
//           name: {
//             show: false
//           },
//           value: {
//             show: true,
//             fontSize: '24px',
//             fontFamily: 'OpenSans, sans-serif',
//             fontWeight: 'bold',
//             color: '#BC9CFF'
//           },
//           total: {
//             show: true
//           }
//         }
//       }
//     }
//   },
//   series: [260, 260, 520, 0],
//   labels: ['Удовлетворительно', 'Хорошо', 'Великолепно', 'Разочарован'],
//   legend: {
//     fontSize: '14px',
//     fontFamily: 'Montserrat, sans-serif',
//     offsetY: 0,
//     markers: {
//       width: 10,
//       height: 10,
//       fillColors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#919191']
//     },
//     itemMargin: {
//       horizontal: 0,
//       vertical: 4
//     }
//   },
//   fill: {
//     colors: ['#BC9CFF', '#6FCF97', '#FFE39C', '#919191']
//   },
//   chart: {
//     type: 'donut'
//   },
//   tooltip: {
//     enabled: false
//   }
// };

// $(document).ready(() => {
//   if (document.querySelector('.diagram')) {
//     var chart = new ApexCharts(document.querySelector('.diagram'), options);
//     chart.render();
//   }
// });
