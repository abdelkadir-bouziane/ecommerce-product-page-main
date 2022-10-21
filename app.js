const product_image = document.querySelector(".image-product");
const list_images = document.querySelectorAll(".list-images-product div");

list_images.forEach((image_span) => {
  image_span.addEventListener("click", function () {
    const smallSrc = this.firstChild.nextSibling.src;
    const longSrc = smallSrc.replace("-thumbnail", "");
    product_image.src = longSrc;
    list_images.forEach((image_span) =>
      image_span.classList.remove("selected-image")
    );
    image_span.classList.add("selected-image");
  });
});

const plus_btn = document.querySelector("#plus-btn");
const minus_btn = document.querySelector("#minus-btn");
const article_number = document.querySelector("#article-number");

plus_btn.addEventListener("click", () => {
  article_number.value = +article_number.value + 1;
});

minus_btn.addEventListener("click", () => {
  article_number.value = Math.max(0, article_number.value - 1);
});

const cart_btn = document.querySelector("#cart-btn");
const cart = document.querySelector(".cart");

cart_btn.addEventListener("click", () => {
  cart.style.display = cart.style.display === "none" ? "block" : "none";
});
