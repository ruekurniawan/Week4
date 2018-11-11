function cariModus(arr) {
  var hitung = 0;
  var modus = 0;
  for(var i = 0; i < arr.length; i++){
  	var hitung2 = 0;
  	for(var j = 0; j < arr.length; j++){
  		if(arr[i] === arr[j] && i !==j){
  			hitung2 = hitung2 + 1;
  			if (hitung2 > hitung) {
  				hitung = hitung2
  				modus = arr[i];
  			}
  		}
  	}
  }

  if(modus === 0){
  	return -1;
  }
  
  if(hitung2 === arr.length-1){
  	return -1;
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1