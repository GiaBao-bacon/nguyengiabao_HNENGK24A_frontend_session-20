let input = Number(prompt('Nhập số'));
if (!isNaN(input) && Math.sign(input) === 1) {
    let reverse = 0, nRem = 0, nInput = input;
      while(nInput !== 0){
        nRem = nInput % 10;
        reverse = (reverse * 10) + nRem;
        nInput = Math.floor(nInput / 10);;
      }
    console.log(reverse == input ? `${input} là số đối xứng` : `${input} không phải số đối xứng`);   
    
} else {
    console.log('Dữ liệu nhập vào không hợp lệ');
}