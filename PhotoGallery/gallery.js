var modal = document.querySelector('.modal');
var img = document.getElementById('modal-img');
var images = document.querySelectorAll('.thumbnail');
var close = document.querySelector('.close');
var knowMoreLinks = document.querySelectorAll('.know-more');

images.forEach(function(image) {
    image.addEventListener('click', function() {
        var fullsizeSrc = image.getAttribute('data-src');
        img.src = fullsizeSrc;
        modal.style.display = 'block';
    });
});

knowMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var image = link.closest('.image-container').querySelector('.thumbnail');
        image.click();
    });
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
