document.addEventListener("DOMContentLoaded", function() {
    var para = document.getElementsByTagName('p');
    for (var i = 0; i < para.length; i++) {
        para[i].innerHTML = i; 
    }});
    