var fs = require('fs');
//var path = 'Hurricane2000.mp3';


function Music( path ){

    try{
        var fd = fs.openSync( path, 'r' );

        return fs.readFileSync( fd );
    }
    catch(err){
        console.log( err );
    }
    finally {
        if ( fd !== undefined){
            fs.closeSync( fd );
        }
    }

}

exports.Music = Music;


