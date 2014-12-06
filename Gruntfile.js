module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          useAvailablePort: true,
          hostname: '*',
          keepalive: true
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/angular-local-storage.min.min.js': ['src/angular-local-storage.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('start_server', ['connect:server']);
  grunt.registerTask('dist', ['uglify:dist']);

};