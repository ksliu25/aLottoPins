module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        // point all tasks to karma config file
        configFile: 'test/karma-conf.js',
        files: [
                'test/unit/**',
              ]
      },
      unit: {
        // run tests once instead of continuously
        singleRun: true
      }
    }
  });
 
  // load the Grunt task
  grunt.loadNpmTasks('grunt-karma');
};