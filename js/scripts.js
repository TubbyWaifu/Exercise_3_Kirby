
$(document).ready(function() {
    var currentImage = 'imgs/kirby_static.png';
    function nextImage(newImage) {
        $('#content-kirby').attr('src', newImage);
        currentImage = newImage;
    }
    $('.box').on('click', function() {
        var newImage = $(this).data('image');
        nextImage(newImage);
    });
});
