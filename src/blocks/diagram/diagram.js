// import ApexCharts from 'apexcharts';
import Donut from './Donut/Donut';

$(document).ready(() => {
  const config = {
    size: 70,
    sectors: [
      {
        gradient: {
          name: 'satisfactorily',
          values: [
            { offset: 0, color: '#BC9CFF' },
            { offset: 100, color: '#8BA4F9' }
          ],
        },
        value: 20
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
