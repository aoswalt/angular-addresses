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
      .otherwise("/")
  ))
  .controller("MainCtrl", function () {
    const main = this;
  })
  .controller("AddressCtrl", function () {
    const address = this;

    address.list = {};
    address.list.a1 = {
      name: "Amy",
      phone: "(615) 234-5678",
      email: "amy@example.com",
      twitter: "@amy"
    };
    address.list.a2 = {
      name: "Bob",
      phone: "(615) 345-6789",
      email: "bob@example.com",
      twitter: "@bob"
    };
  })

  .filter("phonedial", () =>
    //NOTE(adam): assuming 10 digit number
    input => `+1${input.replace(/[^\d]/g, "")}`
  )

  .filter("twitter", () =>
    input => input.slice(1)
  );
