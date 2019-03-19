


monappbanq = angular.module('miageBanq', [

    //'ngResource'
])

 // ATTENTION CI DESSOUS LES CADAVRE => LES FACTORY , COMTROLLER  ET SERVICE 
 // NOTRE LA PARTIE FONCTIONNELLE COMMENCE A LA LIGNE 234
/*
monappbanq.factory('MaFactory', function ($resource) {

    return $resource('http://localhost:3000/compte/:id', { Id: '@id' },
        {
            update: {
                method: 'PUT'
            }


        });

})


*/
/*

   monappbanq.controller('MonCtrl', ['$scope', function ($scope) {

        $scope.tet = function () {
            $scope.op1 = 2;

            return op1;
        }
        $scope.tet2 = function () {

            $scope.tableau = ['Element1', 'Element2', 'Element3', 'Element4'];

        }
        $scope.tet3 = function () {

            $scope.tableau = [];

            for (let index = 0; index < 101; index++) {
                $scope.tableau[index] = index;

            }

        }



    }]);

*/



// test 

/*
monappbanq.service('MonService', function () {
    var mots = [];

    this.addMot = function (entree) {
        mots.push(entree);
    };

    this.getMot = function () {
        return mots;
    };
})
*/

/*
monappbanq.controller('controller1', function ($scope, MonService) {

    $scope.nouvelleEntre = "";
    $scope.ajouterEntree = function () {
        MonService.addMot($scope.nouvelleEntre);
        $scope.nouvelleEntre = "";
    };


})

monappbanq.controller('controleur2', function ($scope, MonService) {
    $scope.listerEntrees = function () {
        return MonService.getMot().join(',');
    }

})



*/
/*
monappbanq.controller('MainCtrl',function ($scope, MaFactory) {

        $scope.resultat = '';
        $scope.somme = 0;
        $scope.id = 0;
        $scope.mesg = {};
        $scope.obj = { id: '0', somme: '0' };





*/

/*
        $scope.creercompte = function () {
            var objtosave = new MaFactory();
            objtosave.id = $scope.obj.id;
            objtosave.somme = $scope.obj.somme;
            objtosave.$save(function (saveobj) {
                $scope.resultat = saveobj;
*/
/*

    $scope.listecpt =[];
    $scope.listecpt = MaFactory.query(function () {
        
    });

    $scope.creer =function () {
        $scope.cpt  = new MaFactory(); 
        $scope.cpt.idcpt = $scope.id;
		$scope.cpt.somme = $scope.somme;
        MaFactory.save($scope.cpt,function () {

            $scope.mesg="201";
            
        
    



    }, function (error) {
        $scope.resultat = error.data.error;
    }


);




        }
        
    }
    
)
*/


// test  $http

/*
monappbanq.controller('MainCtrl', function ($scope, $http) {

    $scope.id = $scope.obj.id;

    $scope.test = function () {
        return $scope.obj.id;
    }

     //le scoper  de la position du compte  
    $scope.positioncompte = function ($scope) {
     //requet http, pour un get 
        $http.get("/compte/")
            .then(function (response) {
                $scope.moncompte = response.data;
            });

    }


    $scope.creecompte = function ($scope, $http) {


        $http.post("/compte/" + $scope.id)
            .then(function (response) {
               // $scope.macrea = response.data;

            });

    }

    $scope.detruire= function($scope,$http){
        $http.delete("/compte/"+$scope.id)
       
         
    }
});



// test coter "client" controle angalar attache
//  prise de donnée 

monappbanq.controller('controle000', function ($scope) {



    $scope.test = 0;

    $scope.alpha = function () {
        if ($scope.test == 4) {
            return $scope.test = 100;

        } else
            return $scope.test = 0;



    }

})

monappbanq.controller('controle001', function ($scope) {

    $scope.test1 = 1000;

})


*/



// test coter "client" controle angalar attache  
monappbanq.controller("controle002", function ($scope, $http) {

    // création de objet d'angulars 
    $scope.obj = { id: 0, somme: 0 }; 
    //   $scope.obj.id=$scope.id;
    
   //fonvction  donner le compte en json coté  client 
    $scope.position = function () {
        console.log($scope.obj.id); // recupération de la variable
        //return $scope.id;
         // requet http pour  recupe en mode parms 
        $http.get("/compte/" + $scope.obj.id)
            .then(function (response,) {
                console.log(response.data);
                $scope.e = response.data;
            }
            )

    }

    $scope.cree = function () {

        // pour la création du compte  pour se faire vous faite  postion un commpte en notent dans l'idée non crée est cela retourne false 
      // requet http pour  recupe en mode parms  , JSON pour body
        $http.put('/compte/'+$scope.obj.id,{'somme':$scope.obj.somme})
        .success(function(data){

         $scope.obj.somme = {};
         console.log(data);

        });



         /*
        $http.put("/compte/"+$scope.obj.id+"/"+$scope.obj.somme)
            .then(function (response) {
                console.log(response.data);
                $scope.e = response.data;
           })
           */
           
    }


 
    $scope.add_ret= function () {

        // requete de pour mettre a jour  le compte 
        $http.put('/compte/'+$scope.obj.id,{'somme':$scope.obj.somme})

        .success(function(data){
            // retour en cas de  ou cela passe 
            // je n'est prevus en cas non trouver "4**"

         $scope.obj.somme = {};
         console.log(data);

        } )
     
            
    }







}




    //  $scope.positioncompte = function () {
    /*
           $http.get("/compte/"+$scope.id)
               .then(function (response) {
                   $scope.test2 = response.data;
   
                  
               });
   
           */





)

