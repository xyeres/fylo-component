const progressBar = document.getElementById('progressBar');

const updateWidth = (element, width) => {
  element.style.width = width
};

setTimeout(updateWidth, 200, progressBar, '77.77%');

clearTimeout();
