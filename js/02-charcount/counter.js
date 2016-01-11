export default (str) => {
  const s = str.trim();
  const len = s.length;
  return `${s} has ${len} character${len === 1 ? '' : 's'}.`;
};
