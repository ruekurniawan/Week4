// console.log(3.75/4);
function makanTerusRekursif(waktu) {
var tambahMakan = 0 ;
	if(waktu === 0)
  	{		
  		return tambahMakan;
	}
	
	if(waktu > 0 && waktu < 15){
		return 1;
	}
	else 
	{
		tambahMakan++
  		return tambahMakan + makanTerusRekursif(waktu-15)
  	}
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0