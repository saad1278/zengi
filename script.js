// عرض النموذج عند النقر على زر "Add Product"
document.getElementById("add-product-btn").addEventListener("click", function () {
    document.getElementById("product-form").style.display = "block";
});

// إغلاق النموذج
function closeModal() {
    document.getElementById("product-form").style.display = "none";
}
function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    const productsRef = database.ref('products');

    productsRef.on('value', (snapshot) => {
        const products = [];
        snapshot.forEach((childSnapshot) => {
            const product = childSnapshot.val();
            product.id = childSnapshot.key; // إضافة ID للمنتج
            products.push(product);
        });

        console.log("Products from Firebase:", products); // للتتبع

        productsContainer.innerHTML = "";

        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "col-md-4 mb-4";
            productCard.innerHTML = `
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                        <p class="card-text"><strong>Seller:</strong> ${product.seller}</p>
                        <p class="card-text"><strong>Phone:</strong> ${product.phone}</p>
                        <div class="mt-3">
                            <h6>Reviews:</h6>
                            ${product.reviews && product.reviews.length > 0
                                ? product.reviews.map(review => `
                                    <div class="mb-2">
                                        <strong>Rating:</strong> ${"⭐".repeat(review.rating)}<br>
                                        <strong>Comment:</strong> ${review.comment}
                                    </div>
                                `).join("")
                                : "<p>No reviews yet.</p>"
                            }
                        </div>
                    </div>
                </div>
            `;
            productCard.addEventListener("click", () => {
                localStorage.setItem("selectedProduct", product.id);
                window.location.href = "product.html";
            });
            productsContainer.appendChild(productCard);
        });
    });
}
