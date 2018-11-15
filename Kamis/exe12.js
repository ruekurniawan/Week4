// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1

// Function akan menerima array yang berisikan object pembeli 
// (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
// Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi 
// objek-objek barang dari toko X tersebut yang berisikan 
// info nama barang, siapa saja yang membeli, 
// sisa stock barang dan total pemasukan untuk barang tersebut

// Code
function countProfit(shoppers) {
	// console.log(shoppers[0].name.length);
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // console.log(listBarang[0][0].length);
  var object = {};
  if(shoppers.length === 0){
  	return shoppers;
  }

  var keuntungan = 
  [
  	{	
  		product : "Sepatu Stacattu",
  		shoppers : [],
  		leftOver : listBarang[0][2],
  		totalProfit : 0
  	},

  	{
  		product : "Baju Zoro",
  		shoppers : [],
  		leftOver : listBarang[1][2],
  		totalProfit : 0
  	},

  	{
  		product : "Sweater Uniklooh",
  		shoppers : [],
  		leftOver : listBarang[2][2],
  		totalProfit : 0
  	}
  ];
  // console.log(keuntungan.length);
  for(var i = 0; i < shoppers.length; i++){
  	if(shoppers[i].product === "Sepatu Stacattu" && keuntungan[0].leftOver >= shoppers[i].amount){
  		keuntungan[0].shoppers.push(shoppers[i].name);
  		keuntungan[0].leftOver = keuntungan[0].leftOver - shoppers[i].amount;
  		keuntungan[0].totalProfit = keuntungan[0].totalProfit + shoppers[i].amount * listBarang[0][1];
  	}

  	if(shoppers[i].product === "Baju Zoro" && keuntungan[1].leftOver >= shoppers[i].amount){
  		keuntungan[1].shoppers.push(shoppers[i].name);
  		keuntungan[1].leftOver = keuntungan[1].leftOver - shoppers[i].amount;
  		keuntungan[1].totalProfit = keuntungan[1].totalProfit + shoppers[i].amount * listBarang[1][1];
  	}

  	if(shoppers[i].product === "Sweater Uniklooh" && keuntungan[2].leftOver >= shoppers[i].amount){
  		keuntungan[2].shoppers.push(shoppers[i].name);
  		keuntungan[2].leftOver = keuntungan[2].leftOver - shoppers[i].amount;
  		keuntungan[2].totalProfit = keuntungan[2].totalProfit + shoppers[i].amount * listBarang[2][1];
  	}
  }
  return keuntungan;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
// console.log(countProfit([])); //[]