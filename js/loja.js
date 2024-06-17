document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const totalPriceElement = document.getElementById('total-price');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function calculateTotalPrice() {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += parseFloat(item.price) * item.quantity;
        });
        return totalPrice.toFixed(2);
    }

    function updateCartModal() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <p>${item.name}</p>
                    <p>R$ ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <label for="quantity-${index}">Qtd:</label>
                    <input type="number" id="quantity-${index}" value="${item.quantity}" min="1">
                </div>
                <a class="remove-button" data-index="${index}">
                    <img src="/img/lixeira.png" alt="Remover" class="trash-icon">
                </a>
            `;
            cartItemsContainer.appendChild(cartItem);

            const quantityInput = cartItem.querySelector(`#quantity-${index}`);
            quantityInput.addEventListener('change', (event) => {
                const newQuantity = event.target.value;
                cart[index].quantity = newQuantity;
                updateCartModal();
            });

            const removeButton = cartItem.querySelector('.remove-button');
            removeButton.addEventListener('click', () => {
                removeFromCart(index);
            });
        });

        totalPriceElement.textContent = `R$ ${calculateTotalPrice()}`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartCount();
        updateCartModal();
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const image = product.querySelector('img').src;
            const name = product.querySelector('.product-name').textContent;
            const price = product.querySelector('.product-price').textContent.split(' ')[0];

            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({
                    image,
                    name,
                    price,
                    quantity: 1
                });
            }

            updateCartCount();
            updateCartModal();
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });

    cartIcon.addEventListener('click', () => {
        updateCartModal();
        cartModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio. Adicione itens ao carrinho antes de finalizar a compra.');
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'finalizar-compra.html';
        }
    });

    closeModalButton.addEventListener('click', () => {
        closeModal();
    });
});

function openProductModal(image, name, price) {
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-product-img');
    const modalName = document.getElementById('modal-product-name');
    const modalPrice = document.getElementById('modal-product-price');

    modalImg.src = image;
    modalName.textContent = name;
    modalPrice.textContent = price;

    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const productImages = document.querySelectorAll('.product img');
    productImages.forEach(image => {
        image.addEventListener('click', () => {
            const product = image.closest('.product');
            const imageSrc = image.src;
            const productName = product.querySelector('.product-name').textContent;
            const productPrice = product.querySelector('.product-price').textContent;

            openProductModal(imageSrc, productName, productPrice);
        });
    });
});

function closeModal() {
    const productModal = document.getElementById('product-modal');
    productModal.style.display = 'none';
}
