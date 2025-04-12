var typed = new Typed(".changing-text", {
    strings: ["Mohammed Shadofa", "Designer", "Developer"],
    typeSpeed: 70,
    backSpeed: 35,
    backDelay: 1000,
    loop: true
});

function filterSelection(category) {
    var items = document.getElementsByClassName('portfolio-item');
    if (category == 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}