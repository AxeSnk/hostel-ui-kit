import { createElementNS } from './createElements';

function createGradient(gradient) {
  let linearGradient = createElementNS('linearGradient', {
    id: `${gradient.name}`,
    x1: '0',
    x2: '0',
    y1: '0',
    y2: '1'
  });

  gradient.scenenodes.map(item => {
    const { offset, color } = item;
    let stop = createElementNS('stop', {
      offset,
      'stop-color': color
    });
    linearGradient.appendChild(stop);
  });

  return linearGradient;
}

export default createGradient;
