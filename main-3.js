// Hàm kiểm tra xem chuỗi có chứa số hay không
function containsNumbers(str) {
    return /\d/.test(str);
}

function handleRegister() {
    const u = document.getElementById('reg-user').value;
    const p = document.getElementById('reg-pass').value;

    if (!u || !p) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Kiểm tra không cho phép nhập số vào tên tài khoản
    if (containsNumbers(u)) {
        alert("Tên tài khoản hoặc Gmail không được phép chứa chữ số!");
        document.getElementById('reg-user').style.borderColor = "red";
        return;
    }

    StorageManager.saveAccount(u, p);
    alert("Đăng ký thành công! Dữ liệu đã được lưu.");
}

function handleLogin() {
    const u = document.getElementById('login-user').value;
    const p = document.getElementById('login-pass').value;
    const account = StorageManager.getAccount();

    if (!u || !p) {
        alert("Vui lòng nhập tài khoản và mật khẩu!");
        return;
    }

    // Kiểm tra tính hợp lệ trước khi so khớp
    if (containsNumbers(u)) {
        alert("Tài khoản không hợp lệ");
        return;
    }

    if (u === account.user && p === account.pass && u !== null) {
        showProfile();
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
}

function logout() {
    if (confirm("Bạn có chắc muốn đăng xuất?")) showHome();
}