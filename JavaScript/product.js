// PRODUCTS
let productsHTML = document.querySelector(".products-container");

fetch("JavaScript/products.json")
  .then((r) => r.json())
  .then((r) => {
    const cameras = r.Products.Cameras;
    cameras.forEach((e) => {
      productsHTML.innerHTML += `
      <!-- Start of Product -->
      <section class="product">
        <!-- Product Image -->
        <section class="product-image">
          <img
            class="thumbnail-image"
            src="${e.image}"
          />
        </section>
        <!-- Title/Review -->
        <section class="product-information">
          <section>
            <h1 class="product-title">
              ${e.name}
            </h1>
            <p class="review-stars">${
              Number(e.reviews) > 0
                ? "&#9733;".repeat(e.reviews)
                : "&#9734;".repeat(5)
            }</p>
          </section>
          <!-- Description/Cost -->
          <section class="product-information__description">
            <!-- Description -->
            <section class="product-description">
              <h1 class="description-title">Key Features</h1>
              <p class="description">
                - ${e.keyFeatures[0]}<br />
                - ${e.keyFeatures[1]}<br />
                - ${e.keyFeatures[2]}<br />
                <span class="four-feature">- ${e.keyFeatures[3]}</span>
              </p>
            </section>
            <!-- Cost -->
            <section class="product-information__pricing">
              <p class="delivery-date">${
                e.availability === "CS"
                  ? "Coming Soon!"
                  : `Est. Delivery ${e.availability} days`
              }</p>
              <h1 class="price">$${e.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</h1>
              <button class="add-to-cart-btn">
              ${e.availability === "CS" ? "Pre-Order" : "Add to cart"}
              </button>
            </section>
          </section>
        </section>
      </section>
      <!-- End of Product -->`;
    });
  });
