import './simplePagination.js';

  $('#pagination-demo').pagination({
    items: 15,
    // itemsOnPage: 15,
    currentPage: 1,
    displayedPages: 3,
    edges: 1,
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
