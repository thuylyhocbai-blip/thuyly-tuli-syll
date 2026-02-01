// File này chuyên trách việc lưu và lấy dữ liệu từ máy tính người dùng (LocalStorage)
const StorageManager = {
    saveAccount: (user, pass) => {
        localStorage.setItem('storedUser', user);
        localStorage.setItem('storedPass', pass);
    },
    getAccount: () => {
        return {
            user: localStorage.getItem('storedUser'),
            pass: localStorage.getItem('storedPass')
        };
    }
};