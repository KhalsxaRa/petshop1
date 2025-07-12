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

    const pengguna = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Ambil elemen pertama

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
// saya menggunakan penyimpanan sementara untuk login lalu location href itu untuk mengarahkan login ke halaman home

    const penggunas = localStorage.setItem('username',pengguna);
    window.location.href='home-ans.html';
   
    return true;
}
    // const users = sessionStorage.getItem('username', pengguna);
    // const loginheader = document.getElementsByClassName('login-header');
    // if (!users) {
    //     // Mengubah teks tombol Sign In menjadi "Welcome, [username]"
        
    //     // loginheader.href = "#user"; // Ubah href jika perlu
    //     return false;
    // }
    // loginheader.innerText = `Selamat datang ${users}`;
    // window.location.href="home-1.html"
   // Form valid

// coba

// function  updatesignin(){
//     var penggunas = localStorage.getItem("regUsername");
//     if(penggunas){
//         document.getElementById("username").innerText=`selamat datang kembali ${penggunas}`;
        
//         return true;
//     }
//     // document.getElementsByTagName
    
    
//     window.onload = function(){
//         updatesignin();
//     }
//     return false;
//     }