// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. 
// Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi 
//   memberId, money, 
//   listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"

// Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"

// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan 
// akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

function shoppingTime(memberId, money) {
  var object = {};
  if(memberId === "" || memberId === " " || (memberId === undefined && money === undefined)){
    return ("Mohon maaf, toko X hanya berlaku untuk member saja")
  }
  else {
    if(money < 50000){
      return ("Mohon maaf, uang tidak cukup");
    }
    else
      object.memberId = memberId;
    // console.log(object.memberId);
      object.money = money;
      var total = 0;
      var listPurchased = [];
      if(money > 1500000){
        // var list = "Sepatu brand Stacattu";
        listPurchased.push("Sepatu brand Stacattu");
        money = money - 1500000;
      }
      if (money > 500000) {
        // list = "Baju brand Zoro";
        listPurchased.push("Baju brand Zoro");
        money = money - 500000;
      }
      if(money > 250000){
        // list = "Baju brand H&N";
        listPurchased.push("Baju brand H&N");
        money = money - 250000;
      }
      if(money > 175000){
        // list = "Sweater brand Uniklooh";
        listPurchased.push("Sweater brand Uniklooh");
        money = money - 175000;
      }
      if (money >= 50000) {
        // list = "Casing Handphone";
        listPurchased.push("Casing Handphone");
        money = money - 50000;
      }
      // listPurchased[listPurchased.length] += listPurchased;
      // console.log(listPurchased);
      object.listPurchased = listPurchased;
      object.changeMoney = money;
  }
  return object;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja