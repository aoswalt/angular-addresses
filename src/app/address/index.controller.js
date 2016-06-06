angular.module("app")
  .controller("AddressCtrl", function (addressFactory) {
    const address = this;
    address.delete = id =>
      addressFactory.delete(id).then(list => address.list = list);

    addressFactory.all().then(list => address.list = list);
  });
