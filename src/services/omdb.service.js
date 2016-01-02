angular.module('moviesApp', [])
    .factory('omdbService', omdbService);

//Main Factory Function
function omdbService ($http, $q) {
    var factory = {
        search: search
    };
    var baseURL = 'http://www.omdbapi.com/?v=1&';
    var deferred = $q.defer();

    return factory;

    ///// -- Functions -- /////

    function httpPromise (url) {
        $http.get(url)
            .then(searchSuccess, searchFailure);

        return deferred.promise;
    }

    function search (query) {
        return httpPromise(baseURL + 's=' + encodeURIComponent(query));
    }

    ///// -- Promise handling funtions -- /////

    function searchSuccess (data) {
        deferred.resolve(data.data);
    }

    function searchFailure (err) {
        deferred.reject();
    }
}
