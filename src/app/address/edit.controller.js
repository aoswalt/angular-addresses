angular.module("app")
   .controller("EditAddressCtrl", function(addressFactory, $routeParams, $location) {
    const address = this;
    address.submit = () => addressFactory.update($routeParams.id, address.person)
      .then($location.path("/addresses"));

    addressFactory.get($routeParams.id).then(person => address.person = person);
  });
