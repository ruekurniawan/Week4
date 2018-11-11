function checkAB(num) {
	var posA = "";
	var posB = "";
	var tampungA = [];
	var tampungB = [];
	for(let i = 0; i < num.length; i++){
		if(num[i] === "a"){
			posA = posA + i
			tampungA[tampungA.length] = Number(posA);
			posA = "";
		}	
		else if(num[i] === "b"){
			posB = posB + i;
			tampungB[tampungB.length] = Number(posB);
			posB = "";
		}
	}
	// console.log(tampungA);
	// console.log(tampungB);
	for(let j = 0 ; j < tampungA.length; j++){
		for(let k = 0; k < tampungB.length; k++){
			if(Math.abs(tampungA[j] - tampungB[k]) === 4){
				return true
			}
		}
	}
	
	return false;
}

// cara awal
// function checkAB(num) {
//   for(let i = 0; i < num.length; i++){
//   	if(num[i] === "a" && num[i+4] === "b"){
//   		return true;
//   	}
//   	else if(num[i] === "b" && num[i+4] === "a"){
//   		return true;
//   	}
//   }
//   return false
// }

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false