function changeMe(arr) {
  var objek = {};
  for(let i = 0; i < arr.length; i++){
    objek.firstName = arr[i][0];
    objek.lastName = arr[i][1];
    objek.gender = arr[i][2];
    // var age = 2018 - arr[i][3];
    // var age2 = typeof(arr[i][3]);
    // console.log(age2)
    if(arr[i][3] === undefined){
      objek.age = "Invalid Birth Year"
    }
    else {
      var age = 2018 - arr[i][3];
      objek.age = age; 
    }
    console.log(objek);
  }

  if(arr.length < 1){
    console.log([]);
  }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""