angular.module('local-storage',[])
.factory('localStorageService', ['$window', function ($window) {

    var storage = $window.localStorage;

    // Save item (if is a objects, serialize to string json)
    function set(key, value){
        value = (_.isObject(value)) ? JSON.stringify(value): value; 
        storage.setItem(key, value);
    };

    // Get item (if is string json, deserialize to object)
    function get(key){
        var data = storage.getItem(key);
        try {
           data = JSON.parse(data);
        } catch (ex) {
            data = storage.getItem(key);
        }
        return data;
    };

    return {
        get: function(key) {
            return get(key);
        },
        set: function(key, value) {
            return set(key, value);
        },
    };
}]);