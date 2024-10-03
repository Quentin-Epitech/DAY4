window.onresize = function() {
    alert("Size matters");};
window.onload = function() {
    const Image = document.querySelector("img[src='../Iphone22.png']");
    Image.addEventListener("mouseover", function() {
        alert("Pretty, isn't it?");
    });};

    
