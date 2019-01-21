function shoppingTime(memberId, money) {
  var brandSale = [
                    ['Sepatu brand Stacattu', 1500000],
                    ['Baju brand Zoro', 500000],
                    ['Baju brand H&N', 250000],
                    ['Sweater brand Uniklooh', 175000],
                    ['Casing Handphone', 50000]
                  ];
  if(memberId === undefined || memberId === ' ' || memberId.length === 0) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  if(money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }

  var shopMember = {};
  shopMember.memberId = memberId,
  shopMember.money = money,
  shopMember.listPurchased = [],
  shopMember.changeMoney = 0

  // for(let i = 0; i < brandSale.length; i++) {
  //   // console.log(brandSale[i]);
  //   if(money >= brandSale[i][1]) {
  //     shopMember.listPurchased.push(brandSale[i][0]);
  //     money -= brandSale[i][1];
  //   }
  // }
  // shopMember.changeMoney = money;
  return shopMember;
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