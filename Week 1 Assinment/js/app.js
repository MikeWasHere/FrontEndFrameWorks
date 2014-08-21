/**
 * Created by MikeWasHere on 8/4/14.
 */

   function DBController($scope){
        $scope.userName;

        $scope.nameArray = ['Bread','Turkey','Cheese','Mayo'];

        $scope.addName = function(){
            $scope.nameArray.push($scope.userName);

            $scope.userName = '';
        };

        $scope.deleteName = function(deletedName) {
            var idx = $scope.nameArray.indexOf(deletedName);
            $scope.nameArray.splice(idx,1);
        }
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x==null || x=="") {
        alert("First name must be filled out");
        return false;
    }
}