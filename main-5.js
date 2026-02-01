// Hàm kiểm tra chỉ chứa chữ (không chứa số)
function isOnlyLetters(str) {
    return /^[\p{L}\s]+$/u.test(str);
}

// Hàm kiểm tra chỉ chứa số (không chứa chữ)
function isOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function saveData() {
    const val = (id) => document.getElementById(id).value.trim();
    
    // 1. Kiểm tra Ngày sinh bản thân (Từ năm 2000 đến nay)
    const dob = new Date(val('f-dob'));
    const currentYear = new Date().getFullYear();
    if (isNaN(dob.getTime()) || dob.getFullYear() < 2000 || dob.getFullYear() > currentYear) {
        alert("Bạn đã nhập sai ngày sinh! Vui lòng nhập năm sinh từ 2000 đến hiện tại.");
        return;
    }

    // 2. Kiểm tra các trường chỉ được phép nhập CHỮ
    const textFields = [
        { id: 'f-name', name: 'Họ tên' },
        { id: 'f-major', name: 'Ngành học' },
        { id: 'f-nation', name: 'Dân tộc' },
        { id: 'f-religion', name: 'Tôn giáo' },
        { id: 'f-hometown', name: 'Quê quán' },
        { id: 'f-dad-name', name: 'Họ tên cha' },
        { id: 'f-dad-job', name: 'Nghề nghiệp cha' },
        { id: 'f-mom-name', name: 'Họ tên mẹ' },
        { id: 'f-mom-job', name: 'Nghề nghiệp mẹ' }
    ];

    for (let field of textFields) {
        if (!isOnlyLetters(val(field.id))) {
            alert(`Bạn đã nhập sai mục "${field.name}", vui lòng nhập lại (chỉ dùng chữ, không dùng số)!`);
            document.getElementById(field.id).focus();
            return;
        }
    }

    // 3. Kiểm tra các trường hợp chỉ được phép nhập SỐ
    const numberFields = [
        { id: 'f-cccd', name: 'CCCD' },
        { id: 'f-dad-phone', name: 'Số điện thoại cha' },
        { id: 'f-mom-phone', name: 'Số điện thoại mẹ' }
    ];

    for (let field of numberFields) {
        if (!isOnlyNumbers(val(field.id))) {
            alert(`Bạn đã nhập sai mục "${field.name}", vui lòng nhập lại (chỉ dùng số, không dùng chữ)!`);
            document.getElementById(field.id).focus();
            return;
        }
    }

    // 4. Kiểm tra để trống (gọi hàm cũ từ main-4.js nếu cần hoặc dùng logic đơn giản)
    const required = ['f-name', 'f-major', 'f-cccd', 'f-dad-name', 'f-mom-name'];
    if (validateForm(required)) {
        alert("Đã lưu hồ sơ thành công!");
        document.getElementById('view-btn').classList.remove('hidden');
    }
}
