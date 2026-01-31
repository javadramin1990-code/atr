<script>
window.addEventListener('DOMContentLoaded', init);

function init() {
  Tabletop.init({
    key: 'SPREADSHEET_ID', // اینجا Spreadsheet ID رو بذار
    callback: showProducts,
    simpleSheet: true
  });
}

function showProducts(data) {
  const container = document.querySelector('.products');
  container.innerHTML = ''; // پاک کردن محتوای قبلی

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item['لینک عکس']}" alt="${item['نام محصول']}">
      <h2>${item['نام محصول']}</h2>
      <p>${item['توضیح کوتاه']}</p>
      <div class="price">قیمت: ${item['قیمت']} تومان</div>
      <a href="${item['لینک ثبت سفارش']}" target="_blank">سفارش محصول</a>
    `;
    container.appendChild(card);
  });
}
</script>
