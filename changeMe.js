function changeMe(arr) {
  var result = {};
  for(let i = 0; i < arr.length; i++) {
    var fullName = arr[i][0]+" "+arr[i][1];
    var age = 2019;
    result.firstName = arr[i][0];
    result.lastName = arr[i][1];
    result.gender = arr[i][2];
    result.age = 0;


    console.log(result)
  }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
 // var object = {};
 //  var fullname = '';
 //  var age = 0;
 //  if(arr.length === 0) {
 //    console.log('""');
 //  }
 //    for(let i = 0; i < arr.length; i++) {
 //  		fullname = arr[i][0]+" "+arr[i][1];
 //  		object.firstName = arr[i][0],
 //  		object.lastName = arr[i][1],
 //  		object.gender = arr[i][2],
 //  		object.age = 0
  		
 //  		age = 2019 - arr[i][3];
 //  		if(arr[i][3] > 2019 || arr[i][3] === undefined) {
 //  			object.age = 'Invalid Birth Year'
 //  		}
 //  		else {
 //  			object.age = age;
 //  		}
 //  		console.log((i+1)+". "+fullname+ ":");
 //  		console.log(object)
 //  	}
 //  