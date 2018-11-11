function angkaPrima(angka){
	for(var i = 2; i < angka; i++){
		if(angka % i === 0){
			// console.log(i);
			return false;
		}
	}
	if(angka < 2 ){
		return false;
	}

	return true;
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));

// cara yang pertama:
// function angkaPrima(angka){
// if(angka == 2 || angka == 3 || angka == 5 || angka == 7){
// 		return true
// 	}
// 	else if(angka % 2 === 0 || angka % 3 === 0 || angka % 5 === 0 || angka % 7 === 0)
// 	{
// 		return false;
// 	}
// 	else
// 		return true;
// }