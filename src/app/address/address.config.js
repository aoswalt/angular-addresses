angular.module("app")
  .config(($routeProvider) => (
    $routeProvider
      .when("/addresses", {
        controller: "AddressCtrl",
        controllerAs: "address",
        templateUrl: "app/address/addresses.html"
      })
      .when("/addresses/new", {
        controller: "NewAddressCtrl",
        controllerAs: "address",
        templateUrl: "app/address/addresses-new.html"
      })
      .when("/addresses/:id/edit", {
        controller: "EditAddressCtrl",
        controllerAs: "address",
        templateUrl: "app/address/addresses-new.html"
      })
  ));
