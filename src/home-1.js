let cartCount = 0;

document.querySelectorAll('.card').forEach(card => {
  const decreaseBtn = card.querySelector('.berkurang');
  const bertambahBtn = card.querySelector('.bertambah');
  const addToCartBtn = card.querySelector('.add-to-cart');
  const angkaSpan = card.querySelector('.angka');

  let angka = 0;

  // Fungsi untuk menambah jumlah
  
  bertambahBtn.addEventListener('click', () => {
    angka++;
    angkaSpan.textContent = angka;
    
  });

  // Fungsi untuk mengurangi jumlah
  decreaseBtn.addEventListener('click', () => {
    if (angka > 0) {
      angka--;
      angkaSpan.textContent = angka;
    }
  });

  // Fungsi untuk menambahkan ke keranjang
  addToCartBtn.addEventListener('click', () => {
    if (angka > 0) {
      cartCount += angka;
      document.getElementById('cart-count').textContent = cartCount;
      angka = 0; // Reset jumlah di card
      angkaSpan.textContent = angka;
    }
  });
});

let card=[
  {
    id: "1",
    item: "Shirt"
  },
  {
    id: "2",
    item: "Jeans"
  },
  {
    id: "3",
    item: "T-shirt"
  },
  {
    id: "4",
    item: "Denim Jacket"
  },
  {
    id: "5",
    item: "Casual Shoes"
  }

];



function signup(){
    let users = sessionStorage.getItem('regUsername', pengguna)
buttonsignin=document.getElementById('signin')

if (users) {
    // Mengubah teks tombol Sign In menjadi "Welcome, [username]"
    buttonsignin.textContent = `${users}`;
    buttonsignin.href = "home-1.html"; // Ubah href jika perlu
    return true;
}
return false;
}