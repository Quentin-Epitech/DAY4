document.addEventListener('DOMContentLoaded', function () {
document.getElementById("productName").textContent = "Samsung 22";
document.getElementById("description").innerHTML = `
    <p>Never miss that perfect shot again.</p>
    <p>Designed to revolutionise video and photography, with beyond cinematic 16K resolution.</p>
    <p>Get yours now!</p>
    `;
document.querySelector('img').src = 'Samsung22.png'; 
let i = 0;
document.querySelector('.cart-btn').addEventListener('click', function (event) {
event.preventDefault();
    i++;
    document.getElementById('cartCount').textContent = i;
    });
    const info = document.createElement('p');
    info.innerHTML = `In cart: <span id="cartCount">0</span>`;
    document.querySelector('.content').appendChild(info);});


