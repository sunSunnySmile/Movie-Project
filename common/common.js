angular.module('common', [])
    .directive('myError', function() {
        return {
            link: function($scope, element, attribute) {
                // console.log('123');
                console.log(attribute);
                element.on('error', function() {
                    element.attr('src', attribute.myError)
                })
            }
        }
    })