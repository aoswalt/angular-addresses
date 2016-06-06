/* eslint-disable no-console */
angular.module("app", ["ngRoute", "ui.bootstrap"])
  .config(($routeProvider) => (
    $routeProvider
      .when("/", {
        controller: "MainCtrl",
        controllerAs: "main",
        templateUrl: "app/partials/main.html"
      })
      .when("/addresses", {
        controller: "AddressCtrl",
        controllerAs: "address",
        templateUrl: "app/partials/addresses.html"
      })
      .when("/addresses/new", {
        controller: "NewAddressCtrl",
        controllerAs: "address",
        templateUrl: "app/partials/new.html"
      })
      .when("/addresses/:index/edit", {
        controller: "EditAddressCtrl",
        controllerAs: "address",
        templateUrl: "app/partials/edit.html"
      })
      .otherwise("/")
  ))
  .controller("MainCtrl", function () {
    const main = this;
  })
  .controller("AddressCtrl", function (addressFactory) {
    const address = this;
    address.delete = index =>
      addressFactory.delete(index).then(list => address.list = list);

    addressFactory.all().then(list => address.list = list);
  })
  .controller("NewAddressCtrl", function(addressFactory, $location) {
    const address = this;
    address.new = () => addressFactory.create(address.person)
      .then($location.path("/addresses"));
  })
  .controller("EditAddressCtrl", function(addressFactory, $routeParams, $location) {
    const address = this;
    address.edit = () => addressFactory.update($routeParams.index, address.person)
      .then($location.path("/addresses"));

    addressFactory.get($routeParams.index).then(person => address.person = person);
  })

  .factory("addressFactory", () => {
    const list = [
      {
        name: "Amy",
        phone: "+16152345678",
        email: "amy@example.com",
        twitter: "amy"
      },
      {
        name: "Bob",
        phone: "+16153456789",
        email: "bob@example.com",
        twitter: "bob"
      },
      {
        name: "Cal",
        phone: "+16154567890",
        email: "cal@example.com",
        twitter: "cal"
      },
      {
        name: "Dom",
        phone: "+16155678901",
        email: "dom@example.com",
        twitter: "dom"
      }
    ];

    return {
      all: () => new Promise((res, rej) => res(list)),
      create: person => new Promise((res, rej) => {
        setTimeout(() => {
          person ? list.push(person) : rej(null);
          res(person);
        }, 1000);   // eslint-disable-line no-magic-numbers
      }),
      get: index => new Promise((res, rej) => res(list[index])),
      delete: index => new Promise((res, rej) => {
        list.splice(index, 1);
        // list = [
        //   ...list.slice(0, index),
        //   ...list.slice(index + 1)
        // ];
        res(list);
      }),
      update: (index, person) => new Promise((res, rej) => {
        list[index] = person;
        res(list);
      })
    };
  })

  .filter("phonedisplay", () =>
    //NOTE(adam): assuming +12345678901
    /* eslint-disable no-magic-numbers */
    input => `(${input.slice(2, 5)}) ${input.slice(5, 8)}-${input.slice(8)}`
  );
