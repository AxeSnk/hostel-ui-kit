function createElement(tag, props) {
  const element = document.createElement(tag);

  Object.keys(props).forEach((key) => element.setAttribute(key, props[key]));

  return element;
}

function createElementNS(tag, props) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);

  Object.keys(props).forEach((key) => element.setAttribute(key, props[key]));

  return element;
}

export { createElement, createElementNS };
