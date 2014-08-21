/**
 * Created by MikeWasHere on 8/20/14.
 */
angular.module("MyApp").service("dataService",function(){

    var namesArray = ['Sean','Scott','Rebecca','Anna'];

    this.getNames = function(){
        var str = localStorage.getItem("NameLS");
        namesArray = JSON.parse(str) || namesArray;
        return namesArray;
    }

    this.addName = function(pName){
        namesArray.push(pName);
        var str = JSON.stringify(namesArray);
        localStorage.setItem("NameLS",str);
    }

    this.removeName = function(pName){
        namesArray.splice(namesArray.indexOf(pName),1);
        var str = JSON.stringify(namesArray);
        localStorage.setItem("NameLS",str);
    }
});