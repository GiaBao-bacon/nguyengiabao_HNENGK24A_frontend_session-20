let a = Number ( prompt("Nhập số a"));
let b = Number (prompt("Nhập số b")) ;
let exponential = a;

if (!isNaN(a, b)){
    for (let i = 1 ; i < b; i++){
        exponential *= a;
    }   
        console.log(exponential);
}else {
    console.log("Không hợp lệ");
    
}