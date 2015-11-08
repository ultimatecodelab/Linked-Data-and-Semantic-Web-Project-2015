'use strict';

describe('Controller: MetersCtrl', function () {

  // load the controller's module
  beforeEach(module('clientSideApp'));

  var MetersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MetersCtrl = $controller('MetersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MetersCtrl.awesomeThings.length).toBe(3);
  });
});
