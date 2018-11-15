function totalDigitRekursif(angka) {
  var str = String(angka);
  // console.log(str.length)
  // var i = 0;
  if(str.length === 1)
  {
  		return Number(str);
  }
  else
  {		var jdAngka = Number(str[0])
  		str = str.slice(1);
  		return jdAngka + totalDigitRekursif(Number(str));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5