if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();