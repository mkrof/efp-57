import ask from '../utils/ask';
import calc from './calc';

function *init() {
  const l = parseInt(yield ask('What is the length in feet?'), 10);
  const w = parseInt(yield ask('What is the width in feet?'), 10);
  const area = calc.rectArea(l, w);
  const areaInMeters = calc.feet2Meters(area);
  console.log(l, w, area, areaInMeters);
  return `
    Dimensions: ${l}ft x ${w}ft.
    Area: ${area} ft (${areaInMeters} meters).
  `;
}

const it = init();
it.next().value
  .then(l => it.next(l).value)
  .then(w => it.next(w).value)
  .then(output => console.log(output));
