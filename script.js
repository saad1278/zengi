// عرض النموذج عند النقر على زر "Add Product"
document.getElementById("add-product-btn").addEventListener("click", function () {
    document.getElementById("product-form").style.display = "block";
});

// إغلاق النموذج
function closeModal() {
    document.getElementById("product-form").style.display = "none";
}

