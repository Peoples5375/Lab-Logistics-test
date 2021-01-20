const http = require('http');
const port = 3000;
const Obserser = require('./services/observer');


const server = http.createServer(function(req, res){

})

server.listen(port, function(error){
    if(error) {
        console.log('Something is wrong here bud.')
    } else {
        console.log('The server hears you bud. Port ' + port + ' ready to go.')

        var obserser = new Obserser();

        const folder = '../file_watching';
    
        obserser.on('file-added', log => {
        // print error message to console
        console.log(log.message);
        });
    
        obserser.watchFolder(folder);
    }
})

    // var obserser = new Obserser();

    // const folder = 'file_watching';

    // obserser.on('file-added', log => {
    // // print error message to console
    // console.log(log.message);
    // });

    // obserser.watchFolder(folder);