const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const SignLink = document.querySelector('.btnSign-up-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
});
SignLink.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
    wrapper.classList.add('active')
});

const pwshowhide = document.querySelectorAll('.icon');
pwshowhide.forEach(lock => {
    lock.addEventListener('click', () => {
        let pwfield = lock.parentElement.parentElement.querySelectorAll(".password");

        pwfield.forEach(password => {
            if (password.type === "password") {
                password.type = text;
            }
        })
    });
})

let previewContainer = document.querySelector('.products-priview');
let previewBox = previewContainer.querySelectorAll('.preview');
document.querySelectorAll('.product-container .product').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name1 = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target')
            if (name1 === target) {
                preview.classList.add('active')
            }
        });
    };
});
previewBox.forEach(close => {
    close.querySelector('.fas').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none';
    }
})
