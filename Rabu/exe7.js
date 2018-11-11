function urutkanAbjad(str) {
  var kata = "";
  var kata2 = [];
  for(let i = 0; i < str.length; i++){
  		kata = kata + str[i];
  		kata2.push(kata);
  		kata = "";
  }
  // return kata2;
  // console.log(kata2.length);
  var tukar = "";
  for(let j = 1; j < kata2.length; j++){
  	for(let k = 0; k < kata2.length; k++){
  		if (kata2[k] > kata2[j]) {
  			tukar = kata2[k];
  			kata2[k] = kata2[j]
  			kata2[j] = tukar
  		}
  		// console.log(kata2);
  	}
  }
  
  var tampung = ""
  for(let l = 0; l < kata2.length; l++){
  	tampung = tampung + kata2[l];
  }
  return tampung;
  
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'