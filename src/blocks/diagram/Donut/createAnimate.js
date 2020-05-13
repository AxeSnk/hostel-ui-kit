import { createElementNS } from "./createElements";

function createAnimate(name, from, to, begin) {
  const animate = createElementNS('animate', {
    attributeName: `${name}`,
    from: `${from}`,
    to: `${to}`,
    dur: '300ms',
    begin: `${begin}`,
    fill: 'freeze'
  });

  return animate
}

export default createAnimate;
