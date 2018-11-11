function ubahHuruf(kata) {
  var hasil = [];
  var semuaHuruf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var array = kata.split("")
  for(let i = 0; i < array.length; i++){
  	var bandingHuruf = semuaHuruf.indexOf(array[i]);
  	var posisiHuruf = bandingHuruf + 1;
  	var hurufBaru = semuaHuruf[posisiHuruf];
  	hasil.push(hurufBaru);
  }

  return hasil.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu