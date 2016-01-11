const F2M_FACTOR = 3.2808;

const api = {
  rectArea(l, w) { return l * w; },
  feet2Meters(ft) { return ft / F2M_FACTOR; }
};

export default api;
