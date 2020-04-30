import Inputmask from 'inputmask';

$(document).ready(() => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
var today = dd + '/' + mm + '/' + yyyy;
  let selector = document.getElementsByClassName('js-masked');
  let im = new Inputmask("datetime", {
    inputFormat: "dd/mm/yyyy",
    min: "01/01/1900",
    max: today
  });
  im.mask(selector);
});
