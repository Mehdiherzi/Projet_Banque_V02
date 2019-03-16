


monappbanq = angular.module('miageBanq', [

    //'ngResource'
])
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


monappbanq.controller('MainCtrl', function ($scope, $http) {

    $scope.id = $scope.obj.id;

    $scope.test = function () {
        return $scope.obj.id;
    }


    $scope.positioncompte = function ($scope) {

        $http.get("/compte/")
            .then(function (response) {
                $scope.moncompte = response.data;
            });

    }


    $scope.creecompte = function ($scope, $http) {


        $http.post("/compte/" + $scope.id)
            .then(function (response) {
                $scope.macrea = response.data;

            });

    }
});



// test comtrole angalar 
monappbanq.controller('controle000', function ($scope) {



    $scope.test = 0;

    $scope.alpha = function () {
          if ($scope.test == 4) {
          return  $scope.test = 100;

          }else 
          return  $scope.test =0;
        
       

    }

})

monappbanq.controller('controle001',function ($scope) {

  $scope.test1=1000;
})

