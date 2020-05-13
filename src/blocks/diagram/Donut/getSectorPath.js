function getSectorPath(x, y, diameter, a1, a2) {
  const halfDiameter = diameter / 2;
  const cr = halfDiameter;
  const degToRad = Math.PI / 180;
  const cy1 = -Math.cos(degToRad * a1) * cr + x;
  const cx1 = -Math.sin(degToRad * a1) * cr + y;
  const cy2 = -Math.cos(degToRad * a2) * cr + x;
  const cx2 = -Math.sin(degToRad * a2) * cr + y;

  return `M${cx1} ${cy1} A${cr} ${cr} 0 0 0 ${cx2} ${cy2}`;
}

export default getSectorPath;
