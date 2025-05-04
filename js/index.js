//SPLIDE JS
var main = new Splide( '#main-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
  } );
  
  var thumbnails = new Splide( '#thumbnail-slider', {
    rewind          : true,
    fixedWidth      : 140,
    fixedHeight     : 76,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints : {
      100: {
        fixedWidth  : 66,
        fixedHeight : 40,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();



var dataMakanan = [
    'pancong',
    'kue kukus',
    'lemper',
    'cucur',
    'kue rangi',

]

var dataKopi = [
    'kopi hitam',
    'kopi luwak',
    'kopi gayo',
    'kopi kenangan',
    'kopi latte',
    'cappucino',
    'latte',
    'kopi liong',
]
console.log (data)

//tipe data
var dataString = 'hello Wordl'
var dataNumber = '0895619337388'
var dataBoolean = true

console.log(dataString)
console.log(dataNumber)
console.log(dataBoolean)

//perhitungan
var a = 5
var b = 10
var countKali = a * b
var countTambah = a + b
var countKurang = a - b
var countBagi   = a / b
var countSisahBagi  = a % b

console.log('perkalian',countKali)
console.log('penjumlahan',countTambah)
console.log('pengurangan',countKurang)
console.log('pembagian',countBagi)
console.log('sisah bagi',countSisahBagi)

//perbandingan
var resultTipeData= a === b
console.log('perbandingan',resultTipeData)

var resultKurangDari = a < b
console.log(resultKurangDari)

var resultLebihDari = a > b
console.log(resultLebihDari)

//logika
const nilaiUjian = 80
nilaiAbsensi = 100

const lulusUjian = nilaiUjian >=75
const lulusAbsensi = nilaiAbsensi >=85

const fullcertificate = lulusUjian && lulusAbsensi
const Partialcertificate = lulusUjian || lulusAbsensi
const nocertificate = !lulusUjian && !lulusAbsensi

console.log('FULL CERTIFICATE', fullcertificate)
console.log('PARTIAL CERTIFICATE',Partialcertificate)
console.log('NO SERTIFICATE', nocertificate)

//conditional
if(nilaiUjian >=80 ) {
    console.log('lulus')
} 
    else {
    console.log('tidak lulus')
}

//4 conditional
if(nilaiUjian>=75 && nilaiAbsensi>= 75){
    console.log('EXELLENT')
}   else if(nilaiUjian<75 && nilaiAbsensi>=75){
    console.log('BAIK')
} else if (nilaiUjian<75 && nilaiAbsensi>=75) {
    console.log ('Baik')
} else {
    console.log(Bad)
}

//Ternery Operator
const kelulusan = nilaiUjian >= 75 && nilaiAbsensi  >= 75? 'EXELLENT' : (nilaiUjian <75 && nilaiAbsensi >= 75)||(nilaiAbsensi<75 && nilaiUjian >=75)? 'good' : 'bad'
console.log(kelulusan)

// ARRAY METHODS(KONSEP / FUNGSI ARRAY)
console.log(dataKopi)
console.log(dataKopi.length)
console.log(dataKopi.toString())
console.log(dataKopi.join('_'))
console.log(dataKopi[5])

const dataGabung = dataKopi.concat(data)
console.table(dataGabung)

// //looping
// for(let index =0; index < dataGabung.length; index+++) {
//     console.log('DATA KE -' + index+ ':' +dataGabung[index])
// }

// const user = {
//     fullName : 'Ray'
//     email: 'Reynaldo@gmaik.co'
//     age : '25'
// }
// letdata user=''
// for(let data in user) {
//     dataUser+=user[data]+ ''
// }
// console.log dataUser

// const user =
// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://reqres.in/img/faces/7-image.jpg"
// },

// {
//     "id":8,
//     "email": "lindsay ferguson@reqres.in",
//     "first_name": "Lindsay",
//     "last_name": "Ferguson",
//     "avatar": "https://reqres.in/img/faces/8-image.jpg"
// },

// {
//     "id": 9,
//     "email": "tobias.funke@reqres.in",
//     "first_name": "Tobias",
//     "last_name": "Funke",
//     "avatar": "https://reqres.in/img/faces/9-image.jpg"
// },

// {
//     "id": 10,
//     "email": "byron.fields@reqres.in",
//     "first_name": "Byron",
//     "last_name": "Fields",
//     "avatar": "https://reqres.in/img/faces/10-image.jpg"
// },

// {
//     "id": 11,
//     "email": "george.edwards@reqres.in",
//     "first_name": "George",
//     "last_name": "Edwards",
//     "avatar": "https://reqres.in/img/faces/11-image.jpg"
// },
// {
//     "id": 12,
//     "email": "rachel.howell@reqres.in",
//     "first_name": "Rachel",
//     "last_name": "Howell",
//     "avatar": "https://reqres.in/img/faces/12-image.jpg"
// }