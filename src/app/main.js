angular.module("app", ["ngRoute", "ui.bootstrap"])
  .config(($routeProvider) => (
    $routeProvider
      .when("/", {
        controller: "MainCtrl",
        controllerAs: "main",
        templateUrl: "app/partials/main.html"
      })
      .otherwise("/")
  ))
  .controller("MainCtrl", function () {
    const main = this

    main.closeAlert = (index) => main.alerts.splice(index, 1)

  })
