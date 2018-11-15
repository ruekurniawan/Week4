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
  		}
  	}
  	if(cek === false){
  		cetak = cetak+str[i];
  	}
  }
  return cetak;
}

function reverseWord (str) {
  var reverse = "";
  for(var k = str.length-1; k >= 0; k--)
  {
      reverse += str[k]; 
  }
  return reverse;
}

function setLowerUpperCase (str) {
    var set = "";
    for(var l = 0; l < str.length; l++)
    {
        if(str[l] === str[l].toUpperCase())
        {
            set += str[l].toLowerCase();
        }
        else if(str[l] === str[l].toLowerCase())
        {
            set += str[l].toUpperCase();
        }
    }
    return set;
}

function removeSpaces (str) {
  var space = "";
  var hasilRemove = "";
  for(var m = 0; m < str.length; m++)
  {
      if(str[m] !== " ")
      {
          space += str[m]; 
      }
      else if(str[m]>0)
      {
          hasilRemove += space;
      }   
  }
  if(str.length > 0)
  {
      hasilRemove += space;
  }

  return hasilRemove;
}

function passwordGenerator (name) {
  if(name.length < 5)
  {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var change = changeVocals(name);
  var reverseKata = reverseWord(change);
  var tukarBesarKecil = setLowerUpperCase(reverseKata);
  var spaceRemover = removeSpaces(tukarBesarKecil);
  return spaceRemover;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'