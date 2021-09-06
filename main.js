const progressBar = document.getElementById('progressBar');

const updateWidth = (element, width) => {
  element.style.width = width
};

setTimeout(updateWidth(progressBar, '77.77%'), 2000);

