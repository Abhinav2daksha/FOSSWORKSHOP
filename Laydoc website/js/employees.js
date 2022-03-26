app.controller('myCtrl', function($scope, $http, API_URL){

$scope.askMessage = "";
$scope.checkLogin = function() {
 var title = $('#askMessage').val();
//var titlesa =  document.write(Session::put('question', title));
  var data = {

       email: $scope.email,
       password: $scope.password,
       ques:$scope.askMessage,
     };

  $http({
method: 'POST',
url: 'http://localhost:8000/login',

  data: data,
  //dataType: 'JSON',
headers: { 'X-CSRF-TOKEN': $('meta[name=\'token\']').attr('content') }
//headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
//.then(function(response) {
//  console.log(response)
//  alert(message);
//  location.reload();
.then(function(response){

  location.reload();
  console.log(response);
                // $("#msg").html(data.msg);
              },
function(response){
	  location.reload();
  console.log(response);
 // alert('this is embarrassing An error had occured please check log for detail')

})


  //    LoginService.checkLogin(data).then(function(result){
  //       if (result.data.message == 'correct')
  //          $scope.message = result.data.message;
  //       else
  //          $scope.message = "Wrong Login";
  //    });
   }
//save new record update existing record
//.then(
  //     function(response){
         // success callback
    //   },
      // function(response){
         // failure callback
      // }
  //  );
$scope.save = function(id){
//var url = API_URL;
  $http({
method: 'POST',
url: 'http://localhost:8000/employees',
data: $.param($scope.employee),

//headers: { 'X-CSRF-TOKEN': $('meta[name=\'csrf-token\']').attr('content') }
headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
.then(function(response) {
  console.log(response)
  location.reload();
},
function(response){
  console.log(response);
  alert('this is embarrassing An error had occured please check log for detail')
})
};

});
