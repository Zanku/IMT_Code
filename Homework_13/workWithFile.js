var fs = require("fs");
var text = "\r\n"
        + "This is new string add ";
var file = 'D:/nodeJs.txt';

var fd;

// Синхронный
try{
    fd = fs.openSync( file, 'a' );
    fs.appendFileSync( fd, (text + "SYNC"), 'utf8' );
    console.log("SYNC update!");
}
catch(err){
    console.log( err );
}
finally {
    if ( fd !== undefined){
        fs.closeSync( fd );
    }
}

// Асинхронный
try {
    fs.open( file, 'a', function( err, fd ){
        fs.appendFile( file, (text + "ASYNCHRONOUSLY"), 'utf8', function( err ){
            if (err){
                throw err;
            }
            console.log('ASYNC Updated!');
        })
        if (err){
            throw err;
        }

        fs.close( fd, function( err ){
            if (err){
                throw err;
            }
        } )
    })
}
catch (err){
    console.log( err );
}
