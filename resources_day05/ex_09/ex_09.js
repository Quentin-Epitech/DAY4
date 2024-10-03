document.addEventListener('DOMContentLoaded', function() {
    let carre = document.querySelector();
    let ecran = document.querySelector();
    let poids = 1; 
    const eau = 10; 
    function position() {
        let pousse = eau; 
        if (poids <= force) {
            let divis = poids / pousse;
            let max = 360; 
            let min = 800; 
            let top = max + (min - max) * divis;        
            carre.style.top = (top,"px");
        } else {        
            carre.style.top = "800px"; 
        }
    }
    carre.addEventListener('clique', function() {
        poids ++; 
        ecran.textContent = (poids,"kg");
        position();
    });
    position();});



