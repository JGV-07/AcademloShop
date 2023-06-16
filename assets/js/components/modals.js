function details(db) {
  const productDOM = document.querySelector('.products__container');
  const modal = document.querySelector('.modal');
  const modalDOM = document.querySelector('.modal__container');

  function printModal(id) {
    let htmlModal = '';
    const product = db.find(p => p.id === id);

    if (product.length === 0) {
      htmlModal += `
        <div class="modal__empty">
          <p class="modal__empty--text">No hay productos en el carrito</p>
        </div>
      `;
    } else {
      htmlModal += `
        <article class="modal__detail">
          <h2 class="modal__title">${product.name}</h2>
          <div class="modal__image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="modal__content">
            <p class="modal__paragraph">Descripcion: ${product.description}</p>
            <span class="modal__price">Precio: ${product.price}</span>
            <span class="modal__category">Categoria: ${product.categoria}</span>
            <span class="modal__quantity">Cantidad: ${product.quantity}</span>
            <button type="button" class="modal__close" data-id="${product.id}">
              Cerrar Modal
            </button>
          </div>
        </article>
      `;
    }

    modalDOM.innerHTML = htmlModal;
  }

  const showProductButton = document.querySelector('.btn__detail');
  const closeButton = document.querySelector('.cart__btn.btn--close');

  showProductButton.addEventListener('click', function () {
    modal.classList.add('active');
    printModal();
  });

  closeButton.addEventListener('click', function () {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal__close')) {
      modal.classList.remove('active');
    }
  });

  return {
    printModal
  };
}

export default details;