function previewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            // Thay đổi ảnh trên trang nhập liệu
            document.getElementById('display-avatar').src = e.target.result;
            
            // (Tùy chọn) Lưu vào LocalStorage để khi bấm "Xem hồ sơ" ảnh vẫn còn
            localStorage.setItem('userAvatar', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Khi hiển thị trang Review, bạn cũng nên cập nhật ảnh đã chọn vào đó
function showReview() {
    const savedAvatar = localStorage.getItem('userAvatar');
    // Code hiển thị review của bạn...
    // Nhớ thêm logic: if(savedAvatar) { document.getElementById('review-img').src = savedAvatar; }
}
function previewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            // Hiển thị ảnh tức thì trên form nhập
            document.getElementById('display-avatar').src = e.target.result;
            // Lưu tạm vào localStorage để khi bấm "Xem hồ sơ" vẫn còn ảnh
            localStorage.setItem('temp_avatar', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function showReview() {
    // 1. Ẩn tất cả và hiện trang Review
    hideAll();
    document.getElementById('review-page').classList.remove('hidden');

    // 2. Hàm hỗ trợ lấy dữ liệu nhanh
    const val = (id) => document.getElementById(id).value || "---";
    const avatar = localStorage.getItem('temp_avatar') || 'a 1.jpg';

    // 3. Tạo nội dung tổng hợp tất cả sơ yếu lý lịch
    const fullContent = `
        <div class="review-layout">
            <div class="review-avatar">
                <img src="${avatar}" alt="Avatar" style="max-width: 150px; border: 2px solid #3a5894; border-radius: 5px;">
                <p><strong>ẢNH CHÂN DUNG</strong></p>
            </div>
            
            <div class="review-details">
                <h2 style="color: #3a5894; border-bottom: 2px solid #3a5894; padding-bottom: 5px;">SƠ YẾU LÝ LỊCH</h2>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                    <p><b>Họ và tên:</b> ${val('f-name')}</p>
                    <p><b>Ngành học:</b> ${val('f-major')}</p>
                    <p><b>Ngày sinh:</b> ${val('f-dob')}</p>
                    <p><b>Giới tính:</b> ${val('f-gen')}</p>
                    <p><b>Dân tộc:</b> ${val('f-nation')}</p>
                    <p><b>Tôn giáo:</b> ${val('f-religion')}</p>
                    <p><b>Số CCCD:</b> ${val('f-cccd')}</p>
                    <p><b>Quê quán:</b> ${val('f-hometown')}</p>
                </div>

                <h3 style="margin-top: 20px; color: #3a5894;">THÔNG TIN GIA ĐÌNH</h3>
                <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                    <p><b>Họ tên Cha:</b> ${val('f-dad-name')} | <b>Nghề nghiệp:</b> ${val('f-dad-job')}</p>
                    <p><b>Năm sinh:</b> ${val('f-dad-dob')} | <b>SĐT:</b> ${val('f-dad-phone')}</p>
                    <hr>
                    <p><b>Họ tên Mẹ:</b> ${val('f-mom-name')} | <b>Nghề nghiệp:</b> ${val('f-mom-job')}</p>
                    <p><b>Năm sinh:</b> ${val('f-mom-dob')} | <b>SĐT:</b> ${val('f-mom-phone')}</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center;">
            <button onclick="showResume()" class="btn-primary" style="background-color: #2c3e50;">
                <i class="fas fa-edit"></i> Sửa hồ sơ
            </button>
            <button onclick="showHome()" class="btn-primary" style="background-color: #7f8c8d;">
                <i class="fas fa-arrow-left"></i> Quay lại trang chủ
            </button>
        </div>
    `;

    // 4. Đưa nội dung vào vùng hiển thị
    document.getElementById('review-content').innerHTML = fullContent;
}