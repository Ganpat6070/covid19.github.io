
const URL="https://covid19.mathdro.id/api";
const URL2="https://covid19.mathdro.id/api/countries/INDIA";
const URL1="https://covid19.mathdro.id/api/countries/USA";
const URL3="https://covid19.mathdro.id/api/countries/AUSTRALIA";
const URL4="https://covid19.mathdro.id/api/countries/PAKISTAN";
const URL5="https://covid19.mathdro.id/api/countries/RUSSIA";
const URL6="https://covid19.mathdro.id/api/countries/CHINA";


let app = angular.module("MyApp",[]);
app.controller('MyCtrl',($scope,$http)=>{
  $scope.title="CORONA TRACKER WEBPAGE Stay Home Stay Safe";
  
  console.log("App Loaded");
  $http.get(URL)
  .then((response)=>{
    console.log(response.data);
    $scope.all_data=response.data;
  },(error)=>{

    console.log(error);
    } 
    
  );
  
  $scope.get_c_data=()=>{
   let country = $scope.c;
   if(country=="")
   {
     $scope.c_data=undefined;
    return;
   }
  
   $http.get(URL1).then((response)=>{
   console.log(response.data);
   $scope.c_data= response.data;
    },
    (error)=>{
     console.log(error);
    }
    )
    
    
      $scope.get_cc_data = () => {
          let country = $scope.cc;
          if (country == "")
          {
            $scope.cc_data = undefined;
            return;
          }
    $http.get(URL2).then((response) => {
       console.log(response.data);
       $scope.cc_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    )
   }
    
      $scope.get_c3_data = () => {
          let country = $scope.c3;
          if (country == "")
          {
            $scope.c3_data = undefined;
            return;
          }
    $http.get(URL3).then((response) => {
       console.log(response.data);
       $scope.c3_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    )
   }
   
   
   $scope.get_c4_data = () => {
          let country = $scope.c4;
          if (country == "")
          {
            $scope.c4_data = undefined;
            return;
          }
    $http.get(URL4).then((response) => {
       console.log(response.data);
       $scope.c4_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    )
   }
   
   
   $scope.get_c5_data = () => {
          let country = $scope.c5;
          if (country == "")
          {
            $scope.c5_data = undefined;
            return;
          }
    $http.get(URL5).then((response) => {
       console.log(response.data);
       $scope.c5_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    )
   }
   
   
   $scope.get_c6_data = () => {
     let country = $scope.c6;
     if (country == "")
     {
       $scope.c6_data = undefined;
       return;
     }
     $http.get(URL6).then((response) => {
         console.log(response.data);
         $scope.c6_data = response.data;
       },
       (error) => {
         console.log(error);
       }
     )
   }
   
   
   
  };
});
