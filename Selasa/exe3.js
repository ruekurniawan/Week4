function cariMedian(arr) {
  var indexTengah = (arr.length - 1) / 2;
  // console.log(indexTengah);
  if(indexTengah % 2 === 0){
  	return arr[indexTengah];
  }
  else{
  	var indexSebelumnya = Math.floor(indexTengah);
  	var indexSetelahnya = Math.round(indexTengah);
  	var hasilMedian = (arr[indexSebelumnya]+arr[indexSetelahnya]) / 2;
  	return hasilMedian;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5