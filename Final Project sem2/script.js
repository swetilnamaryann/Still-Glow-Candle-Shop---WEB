
window.addEventListener('scroll', function() {
    const image = document.querySelector('.masthead img'); // Image element
    const header = document.getElementById("header"); // Header element
    let scrollPosition = window.scrollY;

    // Parallax effect
    let translateValue = scrollPosition * 0.5;
    if (image) {
        image.style.transform = `translateY(${translateValue}px)`;
    }

    // Change header color on scroll
    if (scrollPosition > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Feedback popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const feedbackBtn = document.querySelector('.feedback-btn');
    const feedbackPopup = document.querySelector('.feedback-popup');
    const closeBtn = document.querySelector('.close-btn');

    feedbackBtn.addEventListener('click', function() {
        feedbackPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        feedbackPopup.style.display = 'none';
    });
});

// Review form submission functionality
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    const reviewSubmittedMsg = document.getElementById('review-submitted');
    const feedbackPopup = document.querySelector('.feedback-popup');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        reviewSubmittedMsg.style.display = 'block';
        setTimeout(function() {
            feedbackPopup.style.display = 'none';
        }, 2000);
    });
});

// Add to cart and wishlist functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const addToWishlistBtn = document.querySelector('.add-to-wishlist-btn');
    const addToCartMsg = document.getElementById('add-to-cart-message');
    const addToWishlistMsg = document.getElementById('add-to-wishlist-message');

    addToCartBtn.addEventListener('click', function () {
        addToCartMsg.style.display = 'block';
        setTimeout(function () {
            addToCartMsg.style.display = 'none';
        }, 2000);
    });

    addToWishlistBtn.addEventListener('click', function () {
        addToWishlistMsg.style.display = 'block';
        setTimeout(function () {
            addToWishlistMsg.style.display = 'none';
        }, 2000);
    });
});


// Contact form submission
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const sentMsg = document.getElementById('sent-msg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            sentMsg.style.display = 'block';
            sentMsg.style.color = 'green';
            sentMsg.style.fontSize = '18px';
            sentMsg.style.fontWeight = 'bold';
            sentMsg.innerText = 'Message sent!';
            setTimeout(() => {
                sentMsg.style.display = 'none';
            }, 3000);
        });
});