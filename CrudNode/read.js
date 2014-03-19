var fs = require('fs')

//Funcion para leer un archivo
fs.readFile('read.txt', 'utf8', function (err,data) {
	console.log("Read Complete");
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

//Funcion para crear un archivo
fs.writeFile("build.txt", "Hello Node!", function (err){
	if (err) throw err;
	console.log("File Saved");
});

fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

//Funcion para renombrar un archivo
fs.rename('raname.txt', 'raname2.txt', function (err) {
  if (err) throw err;
  fs.stat('raname2.txt', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});


//Funcion para borrar un archivo asincrona
fs.unlink('delete.txt', function (err) {
  if (err) throw err;
  console.log('File Delete');
});

//Funcion para borrar un archivo sincronica
fs.unlinkSync("delete2.txt");
console.log("File Delete2");

//Verfica si existe
var path = require('path'); 

path.exists('foo.txt', function(exists) { 
  if (exists) { 
    console.log("Esta");
  } 
}); 

// or 

if (path.existsSync('foo.txt')) { 
  console.log("Esta 2")
} 