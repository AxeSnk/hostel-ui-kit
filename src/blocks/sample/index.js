import PhotoSlider from './script/PhotoSlider';

document
  .querySelectorAll('.js-sample__image')
  .forEach(item => new PhotoSlider(item));
