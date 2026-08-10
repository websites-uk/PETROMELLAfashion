
// WhatsApp Buy Now
const whatsappNumber = "234XXXXXXXXXX";

document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        const message =
            "Hello PETROMELLA Fashion, I would like to make an order.";

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    });
});


// Navbar shadow when scrolling
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";
    } else {
        nav.style.boxShadow = "none";
    }
});


// Reveal products when they enter the screen
const products = document.querySelectorAll(".product");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.1
});


products.forEach(product => {

    product.style.opacity = "0";
    product.style.transform = "translateY(25px)";
    product.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(product);

});
