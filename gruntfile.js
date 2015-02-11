module.exports = function(grunt) {

   
    var path = require('path');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      
        //Starting server from app.js.
        express: {
            custom: {
                options: {
                    port: 9000,
                    hostname: "*",
                    bases: 'www-root',
                    server: path.resolve('./app')
                }
            }
        },

       

        // This task will open browser with Local Host
        open: {
            all: {
                path: 'http://localhost:9000'
            }
        }


    });

    // Load Plugins Here:
   
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
   
    // Default task(s).
     //grunt.registerTask('build', ['clean', 'less', 'cssmin', 'requirejs:production']);
    grunt.registerTask('server', ['express', 'express-keepalive', 'open']);


};