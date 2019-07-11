import './simplePagination.js';

// $('#pagination-demo').twbsPagination({
//     totalPages: 35,
//     visiblePages: 7,
//     onPageClick: function (event, page) {
//       $('#page-content').text('Page ' + page);
//     }
//   });

  $('#pagination-demo').pagination({
    items: 15,
    itemOnPage: 1,
    currentPage: 2,
    displayedPages: 5,
    cssStyle: '',
    prevText: '<span aria-hidden="true"><i class="material-icons">arrow_back</i></span>',
    nextText: '<span aria-hidden="true"><i class="material-icons">arrow_forward</i></span>',
    onInit: function () {
        // fire first page loading
    },
    onPageClick: function (page, evt) {
        // some code
    }
});

// $(function() {
//     $('#pagination-demo').pagination({
//         items: 15,
//         itemOnPage: 15,
//         displayedPages: 5,
//         cssStyle: ''
//     });
// });