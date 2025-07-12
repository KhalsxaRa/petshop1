// function sign(){
//     document.getElementsByTagName('form').addEventListener('input', function sign(event){
//         const pass = document.getElementsByClassName('pass').minlength;
//         if(pass < 6 ){
//             alert('tes')
//             event.preventDefault();
//         }
        
        
//     })
   
// }

// // 
function sign(event) {
    // Mencegah pengiriman form
    event.preventDefault();

    const pengguna = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value; // Ambil elemen pertama
const emails = document.getElementById('regEmail').value;
    // Validasi pengguna
    if (pengguna.length < 4) {
        alert("pengguna harus memiliki minimal 4 karakter!");
        return false; // Mencegah form dari pengiriman
    }

    // Validasi password
    if (password.length < 6) {
        alert("Password harus memiliki minimal 6 karakter!");
        return false; // Mencegah form dari pengiriman
    }
 if(emails.length < 8){
    alert("email harxus memiliki minimal 6 karakter!");
    return false; // Mencegah form dari pengiriman

 }
 sessionStorage.setItem('regUsername', pengguna);
 window.location.href ="login.html";
    return true; // Form valid
}


// function myuser(){
//     const users = document.getElementById('regUsername').value;
//     localStorage.setItem("regUsername", users);
// updatesignin();
// window.location.href="login.html"
// }


