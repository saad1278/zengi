function openProductPage(productPage) {
    window.location.href = productPage;
}

function translatePage() {
    const isEnglish = document.querySelector('html').lang === 'en';
    document.querySelector('html').lang = isEnglish ? 'ar' : 'en';

    document.getElementById('site-title').textContent = isEnglish ? 'متجر زنجي' : 'Zengi Store';
    document.getElementById('translate-btn').textContent = isEnglish ? 'الإنجليزية' : 'Arabic';

    const productTitles = document.querySelectorAll('.product-card h2');
    const prices = [10, 15, 13.5, 11, 12, 10.5];

    productTitles.forEach((title, index) => {
        title.textContent = isEnglish ? `المنتج ${index + 1}` : `Product ${index + 1}`;
        document.querySelectorAll('.product-card p')[index].textContent = isEnglish ? `${prices[index]} دولار` : `$${prices[index]}`;
    });

    document.querySelector('footer p').textContent = isEnglish ? 'Made by Saad' : 'تم الصنع من قبل سعد';
}
