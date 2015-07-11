module.exports = function(grunt) {

  grunt.initConfig({
    copy : {
      css : {
        files : [
          {
            expand: true,
            flatten: true,
            src : [
                    'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                    'bower_components/bootstrap/dist/css/bootstrap.min.css'
                  ],
            dest : 'client/css/libs/'
          }
        ]
      },

      lib : {
        files : [
          {
            expand: true,
            flatten: true,
            src : [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js'
                  ],
            dest : 'client/code/libs/'
          }
        ]
      }
    },
  clean : {
    files : [
      'client/css/libs/bootstrap-theme.min.css',
      'client/css/libs/bootstrap.min.css',
      'client/code/lib/jquery.min.js',
      'client/code/lib/bootstrap.min.js'
    ]
  }});

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('bower', ['clean', 'copy:css', 'copy:lib']);
};
