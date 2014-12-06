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
          'dist/local-storage.min.js': ['src/local-storage.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('start_server', ['connect:server']);
  grunt.registerTask('dist', ['uglify:dist']);

};