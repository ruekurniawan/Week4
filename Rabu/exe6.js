function digitPerkalianMinimum(angka) {
  var hasil = [];
  for(var i = 0; i <= angka; i++){
  	for(var j = 0; j <= angka; j++){
  		if(i * j === angka){
  			var kali = String(i) + String(j);
  			// console.log(kali);
  			hasil.push(kali);
  		}
  	}
  }
  var minimDigit = hasil[0].length;
  for(let k = 1; k < hasil.length; k++){
  	if(hasil[k].length < minimDigit){
  		minimDigit = hasil[k].length
  	}
  }
  return minimDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2