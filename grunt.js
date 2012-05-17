/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= template.today("m/d/yyyy") %>\n' +
              '* <%= pkg.homepage %>\n' +
              '* Copyright (c) <%= template.today("yyyy") %> <%= pkg.author.name %>;' +
              ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner>', 'src/ba-linkify.js', '<file_strip_banner:src/jquery.twitter.js>'],
        dest: 'dist/jquery.twitter.js'
      }
    },
    min: {
      dist: {
        src: ['<banner>', 'dist/jquery.twitter.js'],
        dest: 'dist/jquery.twitter.min.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/!(ba-linkify)*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};