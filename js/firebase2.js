// Khởi tạo Firebase  
const firebaseConfig = {  
    apiKey: "AIzaSyAL55gOaE5Vm4Oit39eKyokn3UPExj4KDA",  
    authDomain: "jsi31-19351.firebaseapp.com",  
    databaseURL: "https://jsi31-19351-default-rtdb.firebaseio.com",  
    projectId: "jsi31-19351",  
    storageBucket: "jsi31-19351.firebasestorage.app",  
    messagingSenderId: "522525831589",  
    appId: "1:522525831589:web:9a878305707d5a13aaf84c",  
    measurementId: "G-HB66MS1MVV"  
  };  

// Xử lý đăng nhập  
document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Ngăn chặn form submit mặc định  

    const email = document.getElementById('loginEmail').value;  
    const password = document.getElementById('loginPassword').value;  

    auth.signInWithEmailAndPassword(email, password)  
        .then((userCredential) => {  
            // Đăng nhập thành công  
            const user = userCredential.user;  
            alert("Đăng nhập thành công!");  
            console.log("Đăng nhập thành công:", user);  

            // Chuyển hướng đến trang chính index.html 
            window.location.href = "index.html"; 
        })  
        .catch((error) => {  
            // Xử lý lỗi  
            console.error("Lỗi đăng nhập:", error);  
            alert("Lỗi đăng nhập: " + error.message);  
        });  
});  