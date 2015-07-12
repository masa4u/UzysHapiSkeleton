/**
 * Created by 1002125 on 15. 7. 9..
 */
var ApiController = require('../controllers/api');
var ApiValidate = require('../validations/api');

module.exports = function() {
    return [
        {
            method: 'GET',
            path: '/api/{id}',
            config : {
                description: 'api List',
                notes: 'query : page=? ',
                tags :['api'], //you must put in 'api' in order to use Swagger-UI.
                handler: ApiController.list,
                validate: ApiValidate.list
            }
        },
        {
            method: 'GET',
            path: '/',
            config : {
                description: 'root page',
                notes: 'root view page ',
                tags :['root'],
                handler: ApiController.root
            }
        },
        {
            method: 'GET',
            path: '/auth',
            config : {
                auth: 'simple',
                description: 'authentication page',
                notes: 'auth view page id/pass uzysjung/uzysjung',
                tags :['auth'],
                handler: ApiController.auth

            }
        }
    ];
}();