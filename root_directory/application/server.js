const http = require('http');
const port = 3000;
    
    
    const server = http.createServer(function(req, res){

    })
    server.listen(port, function(error){
        if(error){
            console.log('Something went wrong here bud', error)
        } else {
            console.log('Server is listening on port ' + port)
        }
    })
    const Obserser = require('./services/observer');

    var obserser = new Obserser();

    const folder = '../file_watching';

    obserser.on('file-added', log => {
    // print error message to console
    console.log(log.message);
    });

    obserser.watchFolder(folder);