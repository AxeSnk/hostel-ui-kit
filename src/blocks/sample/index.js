import PhotoSlider from './script/PhotoSlider';

document
  .querySelectorAll('.js-sample-image')
  .forEach(item => new PhotoSlider(item));
