// const fs = require('fs')

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }   
  // Read the file and print its contents.
  const fs = require('fs')
    , filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('Nama File: ' + filename);
    console.log('Jumlah baris: ' + data.split("\n").length)
    console.log('jumlah karakter(total): ' + data.length)
    console.log('jumlah huruf: ' + data.replace(/[^A-Z]/gi, "").length) //replace karakter yang bukan alphabet jadi NULL
    console.log('jumlah angka: ' + data.replace(/[^0-9]/gi, "").length)
    console.log('jumlah angka: ' + data.replace(/[^!@#$%^&*.,-=?]/gi, "").length)
    console.log('jumlah kata: ' + data.split(' ').length)
    console.log('jumlah kata 1 karakter: ' + data.match(/(\w+)/g).length)
    
  });