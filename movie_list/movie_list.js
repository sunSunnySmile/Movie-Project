// 1.定义模块
var movie_list = angular.module('movie_list', ['common'])
    // 2.定义控制器--内置发送请求的$http---和原来Ajax发送请求一样
movie_list.controller('movie_listCtrl', [
    '$scope',
    '$http',
    '$stateParams',
    function($scope, $http, $stateParams) {
        // console.log($stateParams.page);
        console.log($stateParams);
        var page = $stateParams.page;
        var movie_list = $stateParams.movie_list
            // 定义一个变量值控制上一页的disable属性为true/false
        $scope.abc = page;
        $http({
                url: "http://localhost:3000/" + movie_list,
                method: "get",
                params: {
                    _page: page,
                    _limit: 10
                }
            })
            .then((res) => {
                // console.log(res.data);
                $scope.theatersList = res.data
            })

        $scope.getPage = function(num) {
            var newPage = page - 0 + num; //page-0将page隐式转换成number类型
            if (newPage <= 0) return;
            // location.hash = "#!/in_theaters/" + newPage
            location.hash = "#!/" + movie_list + "/" + newPage
        }
    }
])