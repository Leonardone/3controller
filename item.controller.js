// CREA UN CONTROLLER PER L'OGGETTO
angular.module('app').controller('ItemController',function($scope){

    $scope.titolo="El Fusco";






// CREA UN OGGETTO ARMA E RIEMPILO CON I SEGUENTI DATI
/*
 * nome: "Ascia bipenne",
 * descrizione: "L’ascia bipenne è una scure a due lame, simbolo del potere minoico.",
 * slots : "3",
 * image: "http://khazalidgrungron.altervista.org/axes/05.png"
 */

//
$scope.listaArmi= [{
    id: '01',
    nome: 'Ascia bipenne',
    descrizione: 'Eddie Fuscaldo, Dicembre 2001',
    slots: '3',
    image: 'http://www.skuola.net/news_foto/2016/scemo-buona.jpg'
},{
    id: '02',
    nome: 'Ascia bimatite',
    descrizione: 'Edoardo Roncaldo, Dicembre 2001',
    slots: '7',
    image: 'http://www.repubblica.it/images/2010/12/26/101517923-c1326a40-e9e3-4c5b-865f-c1d98bbcb80f.jpg'
}];

$scope.elimina= function(id, indice){
    console.log(id, indice);
    $scope.listaArmi.splice(indice, 1);
}

// $scope.listanumeri= [1,2,3,4,5];
});