document.addEventListener('DOMContentLoaded', () => {
    
    const changeColorBtn = document.querySelector('.cart-btn'); 
    changeColorBtn.textContent = 'CHANGE COLOR'; 

    changeColorBtn.addEventListener('click', (evenement) => {
        evenement.preventDefault(); 
        document.body.style.backgroundColor = getRandomColor(); 
    });

    function getRandomColor() {
        const lettres = '0123456789ABCDEF';
        let couleur = '#';
        for (let i = 0; i < 6; i++) {
            couleur += lettres[Math.floor(Math.random() * 16)]; 
        }
        return couleur;
    }
});
