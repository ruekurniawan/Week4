// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi 
// huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
function changeVocals (str) {
  var vokal = "aiueoAIUEO"
  // console.log(vokal.length);
  var changeVokals = "bjvfpBJVP"
  var cetak = "";
  for(var i = 0; i < str.length; i++){
  	var cek = false;
  	for(var j = 0; j < vokal.length; j++){
  		if(str[i] === vokal[j]){
  			cetak = cetak +changeVokals[j] ;
  			cek = true;
  			// str[i] = changeVokals[j];
  			// cetak = str[i];
  		}
  	}
  	if(cek === false){
  		cetak = cetak+str[i];
  	}
  }
  return cetak;
}

// function reverseWord (str) {
//   //code di sini
// }

// function setLowerUpperCase (str) {
//   //code di sini
// }

// function removeSpaces (str) {
//   //code di sini
// }

function passwordGenerator (name) {
  //code di sini
  var change = changeVocals(name);
  return change;
}

// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'