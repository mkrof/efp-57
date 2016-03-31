const api = {
  total(...items) { 
    return items.reduce(((p, c) => p + c), 0);
  },
  tax(total, rate) {
    return total * rate / 100;
  },
};

export default api;
