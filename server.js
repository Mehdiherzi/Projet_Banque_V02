


var express = require('express');  //import module expres
var bodyParser = require('body-parser'); // import module body-parser
var banque = require('./banque.js'); // import module banque

var app = express();
var port = "3000";


var path = require('path');
app.use('bower_components', express.static(__dirname + 'bower_components'));

app.use(bodyParser.json()); // inclusion du plugin pour parser du JSON



// …/banque/public (physique) = / (url)
app.use(express.static(__dirname + '/public'));


//banque.creerCompte(1,0);
banque.creerCompte(2, 0);

//faire le nettoyage 

/**
 * 
 *  app.get('/compte/:id', function (req, res) {
    // affiche la valeur du paramètre id sur la console de node
    console.log(req.params.id);
    // envoie la valeur du paramètre id au navigateur du client ayant fait
    // l’appel
    res.send(req.params.id);

    res.json(compte.positionDuCompte(req.params.id));
   

 });


 app.get('/compte/:id/:somme', function(req,res) {

    //res.json(compte.Position(req.params.id));
    //res.json(compte.sommeducompte(req.params.id,req,params.somme));
    
   // res.json(compte.sommeducompte(req.param.somme));
   res.send(req.param.somme);
    console.log(req.params.somme);
    
 })



app.get('/compte/:id', function (req, res) {
    res.json(banque.positionDuCompte(req.params.id));
})


app.post('/compte/list', function (req, res) {
    res.json(banque.listeComptes);
})

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/*

  app.get('/test/alpha/:id/:trans',function (req,res) {

    res.send('tranporte:'+req.params.trans+' de l\'id : ' + req.params.id );
    console.log(req.params.trans+'&'+req.params.id)
      
  })


*/
/*
app.get('/test/:id', function (req, res) {

    console.log(req.params.id);

});
*/
/*
  app.get('/compte/:id', function(req,res) {

    //res.json(compte.Position(req.params.id));
    //res.json(compte.sommeducompte(req.params.id,req,params.somme));
    
   // res.json(compte.sommeducompte(req.param.somme));
  // res.send(req.param.somme);
    console.log(req.params.somme);
    
 })
 */

/*
app.get('/compte/a/b/c/d/h', function (req, res) {
   // res.json(banque.positionDuCompte(req.params.id));        //parfait 

   res.status(404);
    
})
*/
/*
app.get('/compte/:id', function (req, res) {
    res.json(banque.positionDuCompte(req.params.id));        //parfait
    console.log(banque.positionDuCompte(req.params.id));
})
*/
/*
app.post("/compte/", function (req, res) {
    res.json(banque.creerCompte(parseInt(req.body.id), parseInt(req.body.somme)));
})
*/
/*
app.get('/compte/:id', function (req, res) {
    
   console.log(req.query);

})
*/


/*test verifier 
app.delete("/compte/del/:id",function (req,res) {

  res.send(banque.detruireCompte(req.params.id);
    
})
*/








/*


app.get('/compte/:id/modifier/add/:ajout', function (req, res) {
    res.json(banque.ajouterAuCompte(req.params.id, req.params.ajout));     //parfait mais mal parser en int pour ajoute
    /* if (banque.ajouterAuCompte(req.params.id,req.params.ajout)==1) {
         console.log(1);
     }
     
})
*/

/*
app.get('/compte/:id/modifier/mois/:redu', function (req, res) {
    res.json(banque.retirerDuCompte(req.params.id, req.params.redu));
    //  console.log(banque.retirerDuCompte(req.params.id,req.params.redu));
    if (banque.retirerDuCompte(req.params.id, req.params.redu) === 1) {
        console.log("le retait de " + req.params.redu + " de compte " + req.params.id);
    }
})
*/

/*app.get('/compte/:id/modifier/mois/:redu', function (req,res) {
    res.json(banque.retirerDuCompte(req.params.id, req.params.redu));
  //  console.log(banque.retirerDuCompte(req.params.id,req.params.redu));

})
*/
/*
app.get('/compte/:id/vire/:idv/:sv', function (req, res) {
    res.json(banque.virement(req.params.id, req.params.idv, req.params.sv));
    //console.log(banque.virement(req.params.id,req.params.idv,req.params.sp));


})
*/


/*

app.get('/Liste', function (req, res) {
    res.json(banque.Liste());

})
app.get('/test', function (req, res) {

    res.json(banque.test());
})

app.post('/myUrl/jb', function (req, res) {
    console.log("req.body : ", req.body);
    res.json({ code: 0, message: req.body.msg || "" });
});

*/

/*  test 00001 anglars*/

/*
var friends = [
    { _id: 0, name: 'A' },
    { _id: 1, name: 'B' },
    { _id: 2, name: 'C' },
    { _id: 3, name: 'D' }
];

app.get('/api/v1/friends', function (req, res) {
    return res.send(friends);
});

app.get('/api/v1/friends/:id', function (req, res) {
    for (var i = 0; i < friends.length; i++) {
        if (friends[i]._id == req.params.id) return res.send(friends[i]);
    }
    return res.status(404).send('Not found');
});

app.post('/api/v1/friends/:id', function (req, res) {
    for (var i = 0; i < friends.length; i++) {
        if (friends[i]._id == req.params.id) {
            friends[i].message = req.query.message;
            return res.send(friends[i]);
        }
    }
    return res.status(404).send('Not found');
});


*/

/*exemm 
pas router internen
pas soket.io
*/

/*
angular binding 

node => body parser =>  .json 
*/

//banque.creerCompte(1,0); 
/*
app.post('compte',function (req,res) {

    var id =1;
    
    var obj = banque.creerCompte(id,0); 

    res.json(obj);
    console.log(obj);

    
    
})
 */



app.put('/compte/:id', function (req,res) {

    var id = req.params.id;
    var somme =parseInt(req.body.somme);// body
    var obj = banque.creerCompte(id,0);


     
    if(somme <0)
    {
       console.log("neg"+ somme); 
    }else{

        console.log("pos" + somme);
    }

     
    if(somme < 0)
    {
        somme = -1*somme; 
        banque.retirerDuCompte(id,somme);
        console.log("neg");
        console.log(somme);
    }else
    {
          somme = 1*somme;
          banque.ajouterAuCompte(id,somme);
          console.log("pos");
        console.log(somme);
    }
    
 
    
    // probleme de négatif 
 
      
       //console.log(banque.retirerDuCompte(id,somme))
  
   
        
    obj = banque.positionDuCompte(id); 
  
    res.json("json : "+obj);

    console.log("console : "+ obj);

})




app.get('/compte/:id', function (req,res) {
    
    var obj = banque.positionDuCompte(req.params.id);

    res.json(obj);

    console.log(obj);


})

app.get('/compte/liste' ,function (req,res) {

    var obj = banque.Liste();
    res.json(obj);
    
})



/*
app.put('/test/compte/:id/', function (req, res) {

    console.log(req.body.somme);


})
*/
app.put('/test/compte/vir/:id/:somme/:idv', function (req, res) {

    var obj = banque.virement(req.params.id, req.params.somme, req.params.idv);

    res.json(obj);
    var a = 1;
    console.log(obj);
    console.log(req.body.a);


})






















app.listen(port, function () {

    console.log('Example app listening on port ' + port);
});








//http://localhost:3000/compte/1/modifier/mois/5
//http://localhost:3000/compte/1/modifier/add/12
//http://localhost:3000/compte/1/modifier/mois/5
//http://localhost:3000/compte/1/modifier/add/12