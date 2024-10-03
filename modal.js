const modalContainer = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.modal-overlay');
const modalButton = document.querySelector('.modal-button.show');
const closeButton = document.querySelector('.close-btn');

modalButton.addEventListener('click', () =>
  modalContainer.classList.add('active'),
);
modalOverlay.addEventListener('click', () =>
  modalContainer.classList.remove('active'),
);
closeButton.addEventListener('click', () =>
  modalContainer.classList.remove('active'),
);
