function fpb(angka1, angka2) {
  var angkaMax = Math.max(angka1, angka2);
  var simpan = [];
  console.log(angkaMax)
  for(var i = 0; i < angkaMax; i++){
  	if(angka1 % i === 0 && angka2 % i === 0){
  		simpan.push(i)
  		console.log(simpan);
  	}
  }

  var max = simpan[0];
  for(var j = 1; j < simpan.length; j++){
  	if(simpan[j] > max){
  		max = simpan[j];
  	}
  }

  return max;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1