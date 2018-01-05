angular.module('myActive', [])
    .directive('myActive', ['$location', function($location) {
        return {
            link: function($scope, element, attribute) {
                // console.log($location);
                $scope.local = $location;
                $scope.$watch('local.url()', function(newVal, oldVal) {
                    // console.log(newVal);
                    var url = newVal.split('/')[1]
                        // console.log(element);
                    var link = element.children();
                    var hash = link[0].hash
                    tempHash = hash.split("/")[1]
                        // console.log(tempHash);
                        // console.log(link.parent());
                    element.removeClass(attribute.myActive)
                    console.log(attribute);
                    if (url === tempHash) {
                        // link.parent().addClass(attribute.active)
                        link.parent().addClass(attribute.myActive)
                    }
                })



            }
        }
    }])