var app = angular.module('app', ['ui.bootstrap', 'angular-advanced-searchbox']);


app.controller('DemoController', function($scope) {
  $scope.availableSearchParams = [
    { key: "name", name: "Name", placeholder: "Name..." },
    { key: "city", name: "City", placeholder: "City...", restrictToSuggestedValues: true, suggestedValues: ['Berlin', 'London', 'Paris'] },
    { key: "country", name: "Country", placeholder: "Country..." },
    { key: "emailAddress", name: "E-Mail", placeholder: "E-Mail...", allowMultiple: true },
    { key: "job", name: "Job", placeholder: "Job..." }
  ];

  $scope.addPredefinedNameSearchParam = function(){
    $scope.searchParams.name = 'Max Mustermann';
  };

  $scope.loadPredefinedSearchParamSet = function(){
    $scope.searchParams = {
      name: "Max M.",
      job: "Boss",
      emailAddress: [ 'mm@company.tld', 'max@private.tld' ]
    };
  };
});