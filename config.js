require.config({
    baseUrl: 'vendor',
    paths: {
        app: '../app'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'firebase': {
            exports: 'firebase'
        },
        'angular.min': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular.min']
            
        },
        'angular-animate': {
            exports: 'ngAnimate',
            deps: ['angular.min']
            
        },
        'angular-cookies': {
            exports: 'ngCookies',
            deps: ['angular.min']
            
        },
        'bootstrap.min': {
            exports: 'bootstrap',
            deps: ['jquery']
        },
        'moment': {
            exports: 'moment',
        },
        'fullcalendar.min': {
            exports: 'fullcalendar',
            deps: ['jquery', 'moment']
        },
        'lodash.min': {
            exports: '_',
        },
    }
});
