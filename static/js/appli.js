var app = angular.module("app", ['flow']);

app.config(["$interpolateProvider", function($interpolateProvider){
  $interpolateProvider.startSymbol("{[");
  $interpolateProvider.endSymbol("]}");
}]);

app.controller("TabController", function() {
    this.tab = 1;

    this.setTab = function(newVal) {
        this.tab = newVal;
    };
    this.isSet = function(tabName) {
        return this.tab === tabName;
    };
});

