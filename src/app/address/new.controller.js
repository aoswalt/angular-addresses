angular.module("app")
  .controller("NewAddressCtrl", function(addressFactory, $location) {
    const address = this;
    address.submit = () => addressFactory.create(address.person)
      .then(() => $location.path("/addresses"));
  });
