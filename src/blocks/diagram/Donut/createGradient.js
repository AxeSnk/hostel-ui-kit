import { createElementNS } from './createElements';

function createGradient(gradient) {
  let linearGradient = createElementNS('linearGradient', {
    id: `${gradient.name}`
  });

  gradient.values.forEach(item => {
    let stop = createElementNS('stop', {
      offset: `${item.offset}`,
      'stop-color': `${item.color}`
    });
    linearGradient.appendChild(stop);
  });

  return linearGradient;
}

export default createGradient;
