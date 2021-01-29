const http = require('http');
const port = 3000;
const axios = require('axios');
const Obserser = require('./services/observer');

    const server = http.createServer(function(req, res){

    })
    server.listen(port, function(error){
        if(error){
            console.log('Something went wrong here bud', error)
        } else {
            console.log('Server is listening on port ' + port)
        }
    })

    var obserser = new Obserser();
    const folder = '../file_watching';
    obserser.on('file-added', log => {
    // print error message to console
    console.log(log.message);
    });
    obserser.watchFolder(folder);

//using this for testing purposes and it is ran every time the server is ran. 
    //     axios.post("https://jsonplaceholder.typicode.com/posts", {
    // title: "foo",
    // body: "bar",
    // userId: 1
    // }).then(function(response) {
    // console.log(response.data)
    // }).catch(function(error) {
    // console.log(error)
    // })



// whenever i run this i get "Error: write EPROTO 4381998592:error:1408F10B:SSL routines:ssl3_get_record:wrong version number:../deps/openssl/openssl/ssl/record/ssl3_record.c:332:"
        // axios
        //     .post('https://localhost:3000/file_watching/1000000/1002',{
        //         header: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'multipart/form-data',
        //             },
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         console.log(response);
        //     });

//whenever i run this im getting a catch. so thats the problem with the one above. its hitting the catch and running the response. although on this one 
//i just wanted it to hit the catch and say hello...


// im finding a lot of sources on how to do file upload but those are using front ends and im not actually grabbing data from a frontend.
// im trying to use post man to send my files. i could use multer, although thats for handling files on the front end and not really on the 
//backend for postman and server handling. i could also run an express server and run it that way. although i already have a server running on
// port 3000 so i dont think that would cause this to not run and only hit the catch. maybe its running this post every time i run the server and its not waiting for an upload? that might be it.. maybe everything is in the right spot but its just running every time and there is no file to be posted. that 
//could be why there is a catch err. 



//although if i ran it with multer i could have that file or whatever is saved into db into any folder i want. which in this case would be in the file watching..
//but with multer i would need something on the front end to pass data. 
            axios
            .post('https://https://test-api.lablogserv.net/file_watching/1000000/1002',{

            //data types in here?
                // header: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'multipart/form-data',
                //     },
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log("hello");
            });
