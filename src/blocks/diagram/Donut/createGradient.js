import { createElementNS } from './createElements';

function createGradient(gradient, name) {
  let linearGradient = createElementNS('linearGradient', {
    id: `${name}`,
    x1: '0',
    x2: '0',
    y1: '0',
    y2: '1'
  });

  gradient.forEach(item => {
    let stop = createElementNS('stop', {
      offset: `${item.offset}%`,
      'stop-color': `${item.color}`
    });
    linearGradient.appendChild(stop);
  });

  return linearGradient;
}

export default createGradient;
