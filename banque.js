var listeComptes = {};

// Constructeur pour les Positions
function Position(id, somme) {
	// l'id du compte
	this.id = parseInt(id);
	// la somme
	this.somme = parseInt(somme);
	// la date de dernière opération
	this.date = new Date();
}

// Constructeur pour les Comptes
function Compte(id, somme) {
	// la position du compte
	this.position = new Position(id, somme);
	// pour créditer le compte
	this.ajouter = function (somme) {
		this.position.somme += somme;   // faire un parse int si cela est penible 
		this.position.date = new Date();
	}
	// pour débiter le compte
	this.retirer = function (somme) {
		this.position.somme -= somme;
		this.position.date = new Date();
	}
}

// créer un nouveau compte
var creerCompte = function (id, somme) {
	// s'il n'existe pas
	if (typeof listeComptes[id] === 'undefined') {
		// on le cree
		listeComptes[id] = new Compte(id, somme);
		//console.log(listeComptes);
		return 1;
	}
	return 0;
}
///////////////////////////////////////////////////////////////////////encour
var detruireCompte = function (id) {
	// s'il n'existe pas
	if (typeof listeComptes[id] === 1) {
		// on le cree
		listeComptes[id] = delete Compte(id,0);
		//console.log(listeComptes);
		return 1;
	}
	return 0;
}

//////////////////////////////////////////////////////////////////////


// pour créditer un compte existant
var ajouterAuCompte = function (id,somme) {
	//console.log(listeComptes);
	// s'il n'existe pas
	if (typeof listeComptes[id] === 'undefined')
		return 0;
	listeComptes[id].ajouter(somme);
	return 1;
}

// pour débiter un compte existant
var retirerDuCompte = function (id, somme) {
	//console.log(listeComptes);
	// s'il n'existe pas
	if (typeof listeComptes[id] === 'undefined')
		return 0;
	listeComptes[id].retirer(somme);
	return 1;
}

// pour connaitre la position d'un compte existant
var positionDuCompte = function (id) {
	//console.log(listeComptes);
	// s'il n'existe pas
	if (typeof listeComptes[id] === 'undefined')
		return false;
	return listeComptes[id].position;
}




var virement = function (id,idv,sp) {

	/*
	if (typeof listeComptes[id] === 'undefined' || typeof listeComptes[idv] === 'undefined')
	return false;
	*/

	ajouterAuCompte(id,sp);
	retirerDuCompte(idv,sp);
	
	return true;

	//	listeComptes[ida].ajouter(S);

}



var Liste = function () {

	for (let index = 0; index < 20; index++) {
      return listeComptes[index].position;
	}

}

// les 4 fonctions exportées
exports.creerCompte = creerCompte;
exports.ajouterAuCompte = ajouterAuCompte;
exports.retirerDuCompte = retirerDuCompte;
exports.positionDuCompte = positionDuCompte;
// fonction new 

exports.virement = virement;
exports.Liste = Liste;
exports.detruireCompte=detruireCompte;

