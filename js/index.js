$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.animate-on-scroll').each(function() {
            if (isElementInViewport($(this))) {
                $(this).addClass('animated');
            }
        });
    });

    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

const toggleContainerLink = document.getElementById("toggleContainer");
const container = document.getElementById("container");
const backButton = document.getElementById("backButton");

toggleContainerLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    container.style.display = "block";
});

backButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    container.style.display = "none";
});