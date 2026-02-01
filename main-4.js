// File này chuyên đi kiểm tra xem người dùng có bỏ trống ô nào không
function validateForm(ids) {
    let isValid = true;
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el || !el.value) {
            if(el) {
                el.style.borderColor = "red";
                el.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(5px)' },
                    { transform: 'translateX(-5px)' },
                    { transform: 'translateX(0)' }
                ], { duration: 200, iterations: 2 });
            }
            isValid = false;
        } else {
            el.style.borderColor = "#ccc";
        }
    });
    return isValid;
}