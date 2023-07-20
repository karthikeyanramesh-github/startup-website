let cartCount = 0;

function updateCartCount() {
  const cartCountElement = document.querySelector(".cart-count");
  cartCountElement.textContent = cartCount;
}

function showCartPopup() {
  cartPopup.style.display = "block";
}

function closeCartPopup() {
  cartPopup.style.display = "none";
}

function checkout() {
  // Perform checkout logic here
}

// Add event listener to the "Add to Cart" button
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount++;
    updateCartCount();
  });
});
const cartPopup = document.getElementById("cartPopup");








