'use strict';

describe('Controller: BluebadgeCtrl', function () {

  // load the controller's module
  beforeEach(module('clientSideApp'));

  var BluebadgeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BluebadgeCtrl = $controller('BluebadgeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BluebadgeCtrl.awesomeThings.length).toBe(3);
  });
});
