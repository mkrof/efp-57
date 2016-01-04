export function yearsLeft(curAge, retAge) { return retAge - curAge; }

export function retYear(curAge, retAge, now) {
  return retAge - curAge + now.getFullYear();
}
