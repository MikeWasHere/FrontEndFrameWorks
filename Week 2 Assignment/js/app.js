/**
 * Created by MikeWasHere on 8/4/14.
 */
   angular.module("MyApp",[]).controller("DBController",function ($scope,dataService){
        $scope.userName;
        $scope.street;
        $scope.city;
        $scope.state;
        $scope.zipCode;

        $scope.nameArray = dataService.getNames();

        $scope.addName = function(){
            dataService.addName($scope.userName, $scope.street, $scope.city, $scope.state, $scope.zipCode);
//            dataService.addName($scope.street);
//            dataService.addName($scope.city);
//            dataService.addName($scope.state);
//            dataService.addName($scope.zipCode);

            $scope.userName = '';
            $scope.street = '';
            $scope.city = '';
            $scope.state = '';
            $scope.zipCode = '';
        };

        $scope.deleteName = function(deletedName){
            dataService.removeName(deletedName);
        }
});

//function validateForm() {
//    var x = document.forms["myForm"]["fname"].value;
//    if (x==null || x=="") {
//        alert("First name must be filled out");
//        return false;
//    }
//}