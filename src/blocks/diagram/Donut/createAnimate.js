import { createElementNS } from './createElements';

function createAnimate(name, from, to, begin) {
  const animate = createElementNS('animate', {
    attributeName: name,
    from,
    to,
    dur: '300ms',
    begin,
    fill: 'freeze',
  });

  return animate;
}

export default createAnimate;
