// Quản lý việc ẩn/hiện các phân đoạn của trang web
function hideAll() {
    const pages = ['home', 'auth-page', 'profile', 'review-page'];
    pages.forEach(id => document.getElementById(id).classList.add('hidden'));
}

function showAuth() { hideAll(); document.getElementById('auth-page').classList.remove('hidden'); }
function showHome() { hideAll(); document.getElementById('home').classList.remove('hidden'); }
function showProfile() { hideAll(); document.getElementById('profile').classList.remove('hidden'); }

// Hiệu ứng chữ chào mừng tại trang chủ
window.onload = function() {
    const text = "Chào mừng bạn đã đến với sơ yếu lí lịch ";
    let i = 0;
    const target = document.getElementById("typing-title");
    if (target) {
        target.innerHTML = "";
        function type() {
            if (i < text.length) {
                target.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        type();
    }
};