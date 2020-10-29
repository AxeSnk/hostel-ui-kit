import Inputmask from 'inputmask';

const today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) dd = `0 ${dd}`;
if (mm < 10) mm = `0 ${mm}`;

const dayMax = `${dd}/${mm}/${yyyy}`;
const selector = document.getElementsByClassName('js-masked');
const im = new Inputmask('datetime', {
  inputFormat: 'dd/mm/yyyy',
  min: '01/01/1900',
  max: dayMax,
});
im.mask(selector);
