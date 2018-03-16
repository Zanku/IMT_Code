var fs = require('fs');

function Music( path, res ){

    try{

        fs.open( path, 'r', function(err, fd){

            if (err){
                throw( err );
            }

            fs.readFile( path, function(err, data){

                if (err){
                    throw( err );
                }

                res.write(data);
                res.end();
            });

            fs.close( fd, function( err ){

                if (err){
                    throw( err );
                }
            });
        })
    }
    catch(err){
        console.log(err);
    }
    finally {

    }

}

exports.Music = Music;

