'use strict';

module.exports = function(app) {
    var routes = {};

    routes.index = function(req, res) {
        var jsonData = {
            pageTitle: 'Home Page',
            pageName: 'homepage',
            pagePath: 'homepage',
            isReleaseBuild: ('development' !== app.get('env')),
        };

        // Render the HTML template using the jsonData
        res.render('homepage', jsonData);
        
        // Tip: The `req` and `res` variables are actually very helpful! You
        // can use them to check the request headers and change the response
        // type among many other useful things. 
        //
        // Learn more here:
        // http://expressjs.com/api.html#req.params
        // http://expressjs.com/api.html#res.params
    };

    /*
    routes.jsonResponseExample: function(req, res) {
        // Respond with JSON
        res.json(404, { message: 'page not found', something: true })
    }
    */
    
    return routes;
};
