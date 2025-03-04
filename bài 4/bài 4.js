let str = String(prompt('Nhập chuỗi'));
let search = String(prompt('Nhập chuỗi cần tìm'));
let nStr = str.trim().split(' ');
let count = 0;
for(let i = 0; i < nStr.length; i++){
    if (nStr[i] == search) {
        console.log('Tồn tại từ cần tìm kiếm');
        count++;
        break;
    }
} if(!count) {
    console.log('Không tồn tại từ cần tìm kiếm');
}