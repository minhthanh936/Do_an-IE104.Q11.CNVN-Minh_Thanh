let backToTopBtn = document.getElementById("backToTopBtn");
// Cuon hon 400px hien nut
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.opacity = "1";
    } else {
        backToTopBtn.style.display = "none";
        backToTopBtn.style.opacity = "0";
    }
}
// Bam thi di len tren
function topFunction() {
    // Cuon muot :)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // Fallback
    document.documentElement.scrollTop = 0;
}