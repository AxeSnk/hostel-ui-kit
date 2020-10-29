import { createElementNS } from './createElements';

function createGradient(gradient) {
  const linearGradient = createElementNS('linearGradient', {
    id: `${gradient.name}`,
    x1: '0',
    x2: '0',
    y1: '0',
    y2: '1',
  });

  gradient.scenenodes.forEach((item) => {
    const { offset, color } = item;
    const stop = createElementNS('stop', {
      offset,
      'stop-color': color,
    });
    linearGradient.appendChild(stop);
  });

  return linearGradient;
}

export default createGradient;
